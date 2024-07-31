"use client";

import { useState } from "react";
import TextInput from "../TextInput";

function SignupForm({ headline, infoText, buttonLabel }) {
  const [formData, setFormData] = useState();
  const onChange = () => {
    console.log("changing");
  };
  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">
          {headline || "Stay tuned for our events"}
        </h3>
        {infoText}
      </div>
      <form className="signup-form__form">
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
        <button className="btn btn--medium btn--teal" type="submit">
          {buttonLabel || "Stay in Touch"}
        </button>
      </form>
    </section>
  );
}

export default SignupForm;
