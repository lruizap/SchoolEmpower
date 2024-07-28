// components/NewsletterForm.tsx

"use client";
import { useState } from "react";
import { Resend } from "resend";

// Components

import Button from "./Button";

// API

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

// Redux

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (re.test(email)) {
      setError("");
      try {
        resend.emails.send({
          from: "onboarding@resend.dev",
          to: email,
          subject: "Subscription Confirmed",
          html: "<p>Thank you for subscribing to our newsletter!</p>",
        });
        setSuccess("Subscription confirmed. Please check your email.");
        setEmail("");
      } catch (error) {
        setError("There was an error sending the email. Please try again.");
      }
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <form
      className="flex justify-center items-center"
      id="newsletterForm"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center">
        <input
          type="email"
          name="newsletterInput"
          id="newsletter"
          placeholder="Your Email"
          className="rounded-l-lg text-black min-w-full p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <Button
            label="Subscribe"
            rounded="rounded-r-lg"
            border="border-white"
          />
        </div>
      </div>
      {error && <p className="text-red-500 pl-3">{error}</p>}
      {success && (
        <p className={`text-green-500 pl-3 ${error ? "hidden" : ""}`}>
          {success}
        </p>
      )}
    </form>
  );
}
