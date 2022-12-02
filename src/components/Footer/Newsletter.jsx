import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div class="footer-app">
    <section
      class="footer-contact-us wrapper scrollable"
      id="contact-us"
    ></section>
    <div className="app__newletter-heading">
      <SubHeading title="Contact us" />
      <form class="footer-form" autocomplete="off">
        <div class="contact-fields">
          <div class="contact-field-container">
            <div class="contact-group contact-field false">
              <label for="name" class="contact-label">
                Your Name
              </label>
              <div class="contact-form-control">
                <input
                  name="name"
                  class="contact-input"
                  placeholder="e.g.Ilia Kiselevich"
                  value=""
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-field-container">
          <div class="contact-group contact-field false">
            <label for="phone" class="contact-label">
              Your phone number
            </label>
            <div class="contact-form-control">
              <input
                name="phone"
                class="contact-input"
                placeholder="Your phone number"
                value=""
              ></input>
            </div>
          </div>
        </div>

        <div class="contact-field-container">
          <div class="contact-group contact-field false">
            <label for="email" class="contact-label">
              Your email
            </label>
            <div class="contact-form-control">
              <input
                name="email"
                class="contact-input"
                placeholder="Your email"
                value=""
              ></input>
            </div>
          </div>
        </div>

        <div class="contact-field-container">
          <div class="contact-group contact-field false">
            <label for="company" class="contact-label">
              Company
            </label>
            <div class="contact-form-control">
              <input
                name="company"
                class="contact-input"
                placeholder="Your company"
                value=""
              ></input>
            </div>
          </div>
        </div>

        <div class="contact-field-container text-area-field">
          <div class="contact-group contact-field false">
            <label for="description" class="contact-label">
              How can we help you?
            </label>
            <div class="contact-form-control">
              <textarea
                name="description"
                class="contact-input contact-textarea"
                placeholder="I need a mobile app for my business"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Newsletter;
