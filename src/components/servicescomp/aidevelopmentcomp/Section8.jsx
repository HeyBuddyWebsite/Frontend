"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@material-tailwind/react";

const Pagenation = ({ handlecontactusModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const buttonHeader = {
    border: isHovered ? "0px" : "1px solid white",
    background: isHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: isHovered ? "white" : "white", // Change the text color as needed
    padding: "10px 20px",
    fontSize: "16px",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
      if (isVisible) {
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const [selectedTab, setSelectedTab] = useTabs([
    "core-ai",
    "llms",
    "gen-ai",
    "ai-agents",
    "data-eng",
    "vector-db",
    "mlops",
    "cloud"
  ]);

  const techStack = {
    "core-ai": [
      "PyTorch", "TensorFlow", "JAX", "Scikit-learn", "XGBoost"
    ],
    "llms": [
      "OpenAI", "Anthropic Claude", "Meta LLaMA", "Mistral AI", "Google Gemini"
    ],
    "gen-ai": [
      "LangChain", "LlamaIndex", "Hugging Face Transformers", "PEFT", "Sentence Transformers"
    ],
    "ai-agents": [
      "AutoGen", "CrewAI", "LangGraph", "Semantic Kernel", "Apache Airflow"
    ],
    "data-eng": [
      "Apache Spark", "Apache Kafka", "PostgreSQL", "MongoDB", "Redis"
    ],
    "vector-db": [
      "Pinecone", "Weaviate", "Milvus", "Qdrant", "Chroma"
    ],
    "mlops": [
      "MLflow", "Weights & Biases", "Kubeflow", "DVC", "BentoML"
    ],
    "cloud": [
      "AWS", "Microsoft Azure", "GCP", "Docker", "Kubernetes"
    ]
  };

  const TechList = ({ items }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center justify-center text-center hover:bg-white/20 transition-all border border-white/20">
          <span className="text-white font-medium text-lg">{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="lg:py-8 text-white"
    >
      <div className="py-6">
        <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Technology Stack for Our AI Custom Software Development
        </h2>
        <p className="text-xl lg:text-xl">
          The right technology foundation makes all the difference between an AI idea and a real, scalable product. At our AI development company, we use a modern, enterprise-grade tech stack built around performance, security, and flexibility.
        </p>
      </div>

      <nav className="flex border-b border-gray-300 overflow-x-auto scrollbar-hide mb-6 gap-8">
        {[
          { id: "core-ai", label: "Core AI & ML" },
          { id: "llms", label: "LLMs" },
          { id: "gen-ai", label: "Gen AI & Engineering" },
          { id: "ai-agents", label: "AI Agents & Automation" },
          { id: "data-eng", label: "Data Engineering" },
          { id: "vector-db", label: "Vector DBs" },
          { id: "mlops", label: "MLOps" },
          { id: "cloud", label: "Cloud & Infra" }
        ].map(tab => (
          <TabSelector
            key={tab.id}
            isActive={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className="whitespace-nowrap pb-4 px-2"
          >
            {tab.label}
          </TabSelector>
        ))}
      </nav>

      <div className="py-6 px-2 min-h-[300px]">
        {Object.entries(techStack).map(([key, items]) => (
          <TabPanel key={key} hidden={selectedTab !== key} className="w-full">
            <TechList items={items} />
          </TabPanel>
        ))}
      </div>
    </motion.div>
  );
};

export default Pagenation;
