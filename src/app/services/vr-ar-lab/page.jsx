"use client";

import React, { useState } from "react";
import HeroSection from "@/components/servicescomp/vrarlab/HeroSection";
import StatsSection from "@/components/servicescomp/vrarlab/StatsSection";
import ServicesSection from "@/components/servicescomp/vrarlab/ServicesSection";
import SolutionsSection from "@/components/servicescomp/vrarlab/SolutionsSection";
import SuccessStoriesSection from "@/components/servicescomp/vrarlab/SuccessStoriesSection";
import InfrastructureSection from "@/components/servicescomp/vrarlab/InfrastructureSection";
import WhyChooseSection from "@/components/servicescomp/vrarlab/WhyChooseSection";
import ProcessSection from "@/components/servicescomp/vrarlab/ProcessSection";
import IndustriesSection from "@/components/servicescomp/vrarlab/IndustriesSection";
import TestimonialsSection from "@/components/servicescomp/vrarlab/TestimonialsSection";
import FAQSection from "@/components/servicescomp/vrarlab/FAQSection";
import CTASection from "@/components/servicescomp/vrarlab/CTASection";
import ContactModal from "@/components/ContactModal/ContactModal";

const VRARLabPage = () => {
    const [contactusModal, setcontactusModal] = useState(false);

    const handlecontactusModal = () => {
        setcontactusModal(true);
    };
    const handleClose = (e) => {
        if (e.target.id === "sidebar") setcontactusModal(false);
    };
    const handleModalClose = () => {
        setcontactusModal(false);
    };

    return (
        <div className="bg-black min-h-screen text-white">
            <HeroSection handlecontactusModal={handlecontactusModal} />
            <StatsSection />
            <ServicesSection />
            <SolutionsSection />
            <SuccessStoriesSection />
            <InfrastructureSection />
            <WhyChooseSection />
            <ProcessSection />
            <IndustriesSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection handlecontactusModal={handlecontactusModal} />

            <ContactModal
                contactusModal={contactusModal}
                handlecontactusModal={handlecontactusModal}
                handleClose={handleClose}
                handleModalClose={handleModalClose}
            />
        </div>
    );
};

export default VRARLabPage;
