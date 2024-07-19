"use client";

import { useState } from "react";

function SubscribeToNewsletter() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //send email to strapi
    // give back feedback to user
    if (email.length && email.includes("@")) {
      setHasSignedUp(true);
    }
  };
  return (
    <section className="newsletter">
      {hasSignedUp ? (
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
