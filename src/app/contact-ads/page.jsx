"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import "./page.css";

// Import existing components
import Grid from "@/components/homepg/Section5"; // Why Choose Us
import Grid2 from "@/components/homepg/Section7"; // About Us
import Bottomsec from "@/components/homepg/Section9"; // CTA

const ContactAdsPage = () => {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiEndpoint = "https://api.heybuddy.co.in/contact";

    try {
      setIsSubmitting(true);
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message: `Company: ${companyName}\nSubject: ${subject}\nMessage: ${message}`,
          mobile: phoneNumber,
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

        // Reset form
        setName("");
        setEmail("");
        setPhoneNumber("");
        setCompanyName("");
        setSubject("");
        setMessage("");

        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        console.error("Failed to submit form:", response.statusText);
        toast.error("Failed to submit form. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error during form submission:", error.message);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="contact-ads-page min-h-screen bg-black">
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

      {/* Hero Section with Form */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="hero-grid grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div className="text-white" {...fadeInAnimation}>
              <h1 className="hero-title text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white" style={{fontFamily: 'customFont, sans-serif', fontWeight: 'bold', color: 'white'}}>
                From 100 Views to<br />
                <span className="text-white" style={{fontFamily: 'customFont, sans-serif', fontWeight: 'bold', color: 'white'}}>
                  1,00,000+ Views
                </span>
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-white" style={{fontFamily: 'customFont, sans-serif'}}>
                We turn your name into a brand that people remember and buy from.
              </p>
              <p className="text-base lg:text-lg mb-8 text-gray-300" style={{fontFamily: 'customFont, sans-serif'}}>
                It's not about just posting online. It's about letting "real" 
                customers know about your product in the most 
                creative way. With HeyBuddy, your growth isn't 
                random it's designed.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="feature-bullet"></div>
                  <span className="text-white font-medium" style={{fontFamily: 'customFont, sans-serif'}}>More Reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="feature-bullet"></div>
                  <span className="text-white font-medium" style={{fontFamily: 'customFont, sans-serif'}}>More Trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="feature-bullet"></div>
                  <span className="text-white font-medium" style={{fontFamily: 'customFont, sans-serif'}}>More Sales</span>
                </div>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div 
              className="form-container bg-gray-700 bg-opacity-90 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border-0 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-1" style={{fontFamily: 'customFont, sans-serif'}}>Ready to Grow?</h2>
              <p className="text-base lg:text-lg text-gray-300 mb-6" style={{fontFamily: 'customFont, sans-serif'}}>Let's Build Your Brand Together.</p>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="form-input w-full px-4 py-3 bg-gray-600 bg-opacity-80 border-0 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-0 transition-all duration-300"
                    style={{fontFamily: 'customFont, sans-serif', fontSize: '15px'}}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="form-input w-full px-4 py-3 bg-gray-600 bg-opacity-80 border-0 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-0 transition-all duration-300"
                    style={{fontFamily: 'customFont, sans-serif', fontSize: '15px'}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <PhoneInput
                    placeholder="Phone Number *"
                    className="phone-input-figma w-full"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    defaultCountry="US"
                    required
                  />
                </div>

                <div>
                  <select
                    className="form-input w-full px-4 py-3 bg-gray-600 bg-opacity-80 border-0 rounded-md text-white focus:outline-none focus:ring-0 transition-all duration-300 appearance-none"
                    style={{
                      fontFamily: 'customFont, sans-serif', 
                      fontSize: '15px',
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="" disabled style={{color: '#9ca3af', backgroundColor: '#4b5563'}}>What's your monthly budget? *</option>
                    <option value="Below Rs. 2,50,000" style={{backgroundColor: '#4b5563', color: 'white'}}>Below Rs. 2,50,000</option>
                    <option value="Rs. 2,50,000 - Rs. 5,00,000" style={{backgroundColor: '#4b5563', color: 'white'}}>Rs. 2,50,000 - Rs. 5,00,000</option>
                    <option value="Rs. 5,00,000 - Rs. 10,00,000" style={{backgroundColor: '#4b5563', color: 'white'}}>Rs. 5,00,000 - Rs. 10,00,000</option>
                    <option value="Above Rs. 10,00,000" style={{backgroundColor: '#4b5563', color: 'white'}}>Above Rs. 10,00,000</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company Name *"
                    className="form-input w-full px-4 py-3 bg-gray-600 bg-opacity-80 border-0 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-0 transition-all duration-300"
                    style={{fontFamily: 'customFont, sans-serif', fontSize: '15px'}}
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Tell Us About Your Project *"
                    rows={3}
                    className="form-input w-full px-4 py-3 bg-gray-600 bg-opacity-80 border-0 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-0 resize-none transition-all duration-300"
                    style={{fontFamily: 'customFont, sans-serif', fontSize: '15px'}}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button w-full text-white font-semibold py-3 px-6 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  style={{fontFamily: 'customFont, sans-serif'}}
                >
                  {isSubmitting ? "Submitting..." : "GET STARTED →"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <Grid />
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <Grid2 />
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Bottomsec />
      </section>

    </div>
  );
};

export default ContactAdsPage;
