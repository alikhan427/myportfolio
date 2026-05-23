import React from "react";
import "./Contact.css";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact-section">

        {/* TITLE */}
        <div className="contact-title-box">
          <h1 className="contact-title">CONTACT</h1>
        </div>

        {/* DESCRIPTION */}
        <div className="contact-description">
          <p>
            Feel free to contact me for web development, UI/UX design,
            freelance work, or collaboration opportunities.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="divider">
          <span></span>
          <p>〰</p>
          <span></span>
        </div>

        {/* FORM */}
        <form className="contact-form">

          <input
            type="text"
            placeholder="ENTER YOUR NAME*"
          />

          <input
            type="email"
            placeholder="ENTER YOUR EMAIL*"
          />

          <input
            type="text"
            placeholder="PHONE NUMBER"
          />

          <textarea
            placeholder="YOUR MESSAGE*"
          ></textarea>

          {/* EMAIL */}
          <div className="my-email">
            <span>Email:</span>
            <p>Alikhan03009050164@gmail.com</p>
          </div>

          {/* BUTTON */}
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>

        </form>

      </section>
    </>
  );
};

export default Contact;