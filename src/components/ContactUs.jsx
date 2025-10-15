"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "https://api.heybuddy.co.in/contact";

    try {
      setIsSubmitting(true); // Disable the submit button
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          mobile: phoneNumber, // Assuming the phone number is stored in the 'phoneNumber' state
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        toast.success("Form submitted successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");

        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        console.error("Failed to submit form:", response.statusText);
        // Handle the error as needed
      }
    } catch (error) {
      console.error("Error during form submission:", error.message);
      // Handle the error as needed
    } finally {
      setIsSubmitting(false); // Enable the submit button regardless of success or failure
    }
  };
  return (
    <div className="contact-form-container">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="phone-input-container">
          <PhoneInput
            placeholder="Your Phone Number"
            className="input-field"
            value={phoneNumber}
            style={{ backgroundColor: "black" }}
            onChange={setPhoneNumber}
            defaultCountry="US" // Set your default country code here
            required
          />
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            className="input-field"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
