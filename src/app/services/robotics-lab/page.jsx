"use client";

import "../../../styles/Font.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Herosection from "@/components/servicescomp/roboticslabcomp/Section1";
import Motionslide from "@/components/servicescomp/roboticslabcomp/Section3";
import StatsSection from "@/components/servicescomp/roboticslabcomp/StatsSection";
import SolutionsSection from "@/components/servicescomp/roboticslabcomp/SolutionsSection";
import SuccessStoriesSection from "@/components/servicescomp/roboticslabcomp/SuccessStoriesSection";
import InfrastructureSection from "@/components/servicescomp/roboticslabcomp/InfrastructureSection";
import WhyChooseSection from "@/components/servicescomp/roboticslabcomp/WhyChooseSection";
import ProcessSection from "@/components/servicescomp/roboticslabcomp/ProcessSection";
import TestimonialsSection from "@/components/servicescomp/roboticslabcomp/TestimonialsSection";
import FAQSection from "@/components/servicescomp/roboticslabcomp/FAQSection";
import CTASection from "@/components/servicescomp/roboticslabcomp/CTASection";
import ContactModal from "@/components/ContactModal/ContactModal";

const bgImages = {
  section5:
    "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457720237_mv8kvj.png?x-id=PutObject')",
  section6:
    "url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/bg%20(1).png')",
  section8:
    "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763458037132_139ti0.png?x-id=PutObject')",
  section9:
    "url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')",
  successStories:
    "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763963076417_a4hfqr.png?x-id=PutObject')",
};

export default function RoboticsLabPage() {
  const [contactusModal, setcontactusModal] = useState(false);

  const handlecontactusModal = () => setcontactusModal(true);
  const handleClose = (e) => {
    if (e.target.id === "sidebar") setcontactusModal(false);
  };
  const handleModalClose = () => setcontactusModal(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      className="lg:w-[80%] mx-auto relative"
    >
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <Herosection handlecontactusModal={handlecontactusModal} />
      </div>

      {/* Stats: The Shift to Tangible Intelligence */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: bgImages.section5,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(500px, 55vw, 900px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <StatsSection />
        </div>
      </div>

      {/* Services slider */}
      <div className="py-10 bg-black">
        <Motionslide />
      </div>

      {/* End-to-End Solutions */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: bgImages.section6,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(500px, 55vw, 900px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <SolutionsSection />
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: bgImages.successStories,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(500px, 55vw, 900px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <SuccessStoriesSection />
        </div>
      </div>

      {/* Infrastructure Requirements */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: bgImages.section8,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(400px, 45vw, 700px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <InfrastructureSection />
        </div>
      </div>

      {/* Why Choose Hey Buddy */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: bgImages.section6,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(500px, 55vw, 900px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <WhyChooseSection />
        </div>
      </div>

      {/* Implementation Process */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: bgImages.section8,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(500px, 55vw, 900px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <ProcessSection />
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-black w-full text-white">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: bgImages.section9,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(500px, 55vw, 900px)",
            paddingTop: "clamp(60px, 6vw, 100px)",
            paddingBottom: "clamp(60px, 6vw, 100px)",
          }}
        >
          <TestimonialsSection />
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: bgImages.section9,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(400px, 45vw, 700px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <FAQSection />
        </div>
      </div>

      <CTASection handlecontactusModal={handlecontactusModal} />

      <ContactModal
        contactusModal={contactusModal}
        handlecontactusModal={handlecontactusModal}
        handleClose={handleClose}
        handleModalClose={handleModalClose}
      />
    </motion.div>
  );
}
