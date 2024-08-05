"use client";

import { useState } from "react";
import TextInput from "../TextInput";
import axios from "axios";
import { allDataFilledIn } from "@/utils/validation-utils";

function SignupForm({ headline, infoText, buttonLabel, pricing }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      data: { ...formData, isGeneralInterest: true },
    };

    if (allDataFilledIn(formData)) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`,
          payload
        );
        setShowConfirmation(true);
        setErrorMessage(false);
      } catch (error) {
        setErrorMessage(
          error.response?.data?.error?.message || `Something went wrong!`
        );
      }
    } else {
      setErrorMessage("Please fill in all fields");
    }
  };
  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">
          {headline || "Stay tuned for our events"}
        </h3>
        {infoText}
      </div>
      {showConfirmation ? (
        <div className="signup-form__form">
          <h4>Thanks for signing up! We'll be in touch!</h4>
        </div>
      ) : (
        <form className="signup-form__form" onSubmit={onSubmit}>
          <div className="signup-form__name-container">
            <TextInput
              inputName="firstName"
              value={FormData.firstName}
              label="First Name"
              onChange={onChange}
            />
            <TextInput
              inputName="lastName"
              value={FormData.lastName}
              label="Last Name"
              onChange={onChange}
            />
          </div>
          <TextInput
            inputName="email"
            value={FormData.email}
            label="Your Email Address"
            onChange={onChange}
          />
          <TextInput
            inputName="phone"
            value={FormData.phone}
            label="Your Phone Number"
            onChange={onChange}
          />
          {errorMessage && (
            <p className="copy error-text signup-form__error">{errorMessage}</p>
          )}
          <button className="btn btn--medium btn--turquoise" type="submit">
            {buttonLabel || "Stay in Touch"}
          </button>
          {pricing && (
            <div className="signup-form__pricing">
              <h3>Pricing</h3>
              <p className="copy">
                <span className="bold">
                  Single Room: ${pricing.single} per person
                </span>
              </p>
              <p className="copy">Shared Room: ${pricing.shared} per person</p>
            </div>
          )}
        </form>
      )}
    </section>
  );
}

export default SignupForm;
