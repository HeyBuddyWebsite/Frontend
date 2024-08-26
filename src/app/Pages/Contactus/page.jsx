// page.js
"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./page.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for button disabling

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "https://heybuddyapiadmin.azurewebsites.net/contact";

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
        // console.log("Form submitted successfully!");

        // Send a confirmation email using EmailJS
        const serviceId=process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId=process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey=process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const templateParams={
          to_name: name,         // Mapping the name from your form to the template variable
          reply_to: email,       // Mapping the email from your form to the template variable
        };
        emailjs.send(
          serviceId, templateId, templateParams,publicKey
        ).then(() => {
          toast.success("Form submitted successfully! Confirmation email sent.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }).catch((error) => {
          console.error("Failed to send confirmation email:", error);
          toast.error("Form submitted, but failed to send confirmation email.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });

        // Reset the form fields
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
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
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="contact-form-container pt-[20vh] w-[90%] lg:w-[80%] mx-auto" >
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1 className=" text-2xl lg:text-4xl font-bold text-center mx-auto mb-[50px]   ">
            Have a great idea, let’s connect to make it reality
          </h1>

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
              className="input-field black-bg"
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
    </div>
  );
};

export default Page;
