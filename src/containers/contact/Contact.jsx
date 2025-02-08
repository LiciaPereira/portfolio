import React, { useRef, useState } from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID, //serviceID
        process.env.REACT_APP_TEMPLATE_ID, //templateID
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          console.log("SUCCESS!");
        },
        (error) => {
          setStatus("error");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-text">
            <p>
              I'm always open to new opportunities and collaborations. Whether
              you have a project in mind or just want to say hello, I'd love to
              hear from you.
            </p>
          </div>
          <ul className="contact-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/liciapereira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/liciapereira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
        <div className="contact-form-container">
          {status === "success" ? (
            <div className="success-message">
              <h3>Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible</p>
              <button
                onClick={() => setStatus("idle")}
                className="contact-submit"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <textarea
                type="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="contact-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" && (
                <p className="error-message">
                  Oops! Something went wrong. Please try again later.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
