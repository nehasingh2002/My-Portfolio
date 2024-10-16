// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form name="Contact-me" onsubmit="return ContactForm()" method="post" action="https://formspree.io/f/xeoqqlly">
        <input
          type="text"
          name='name'
          className="form-control"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name='email'
          className="form-control"
          placeholder="Your Email"
          required
        />
        <textarea
          name='message'
          className="form-control"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

