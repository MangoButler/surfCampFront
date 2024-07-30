"use client";

import { useState } from "react";
import axios from "axios";

function SubscribeToNewsletter() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [error, setError] = useState(null);
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    //send email to strapi
    // give back feedback to user
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/newsletter-signups`,
        {
          data: {
            email,
          },
        }
      );
      if (email.length && email.includes("@")) {
        setHasSignedUp(true);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="newsletter">
      {error ? (
        <div className="newsletter__error">
          <h4 className="newsletter__thanks error-text">
            Something went wrong!
          </h4>
          <button
            className="btn btn--medium btn--error"
            onClick={() => setError(null)}
          >
            Try Again!
          </button>
        </div>
      ) : hasSignedUp ? (
        <h4 className="newsletter__thanks">Thanks for signing up!</h4>
      ) : (
        <>
          <div className="newletter__info">
            <h4>subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form className="newsletter__form" onSubmit={submitHandler}>
            <input
              type="text"
              className="newsletter__email input"
              placeholder="Enter your email address"
              value={email}
              onChange={emailChangeHandler}
            />
            <button
              type="submit"
              className="newsletter__subscribe btn btn--medium btn--turquoise"
            >
              SUBSCRIBE
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default SubscribeToNewsletter;
