import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import {
  displayErrorMessage,
  inputTextChecker,
} from "../../utils/Validation/Validation";

init(process.env.REACT_APP_PUBLIC_KEY);
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cj78taf",
        "template_d4yz2tb",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <div className="firstname-container input-container">
        <label htmlFor="firstname" className="label subtitle">
          Firstname :
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          className="input subtitle"
          onBlur={(e) => {
            inputTextChecker(e.target.id, e.target.value);
            displayErrorMessage();
          }}
        />
      </div>
      <div className="lastname-container input-container">
        <label htmlFor="lastname" className="label subtitle">
          Lastname :
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          className="input subtitle"
          onBlur={(e) => {
            inputTextChecker(e.target.id, e.target.value);
            displayErrorMessage();
          }}
        />
      </div>
      <div className="email-container input-container">
        <label htmlFor="email" className="label subtitle">
          Email :
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input subtitle"
          onBlur={(e) => {
            inputTextChecker(e.target.id, e.target.value);
            displayErrorMessage();
          }}
        />
      </div>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        className="subtitle"
        placeholder="Enter your message here..."
      ></textarea>
      <input type="submit" value="Send" className="submit subtitle" />
    </form>
  );
};

export default Form;
