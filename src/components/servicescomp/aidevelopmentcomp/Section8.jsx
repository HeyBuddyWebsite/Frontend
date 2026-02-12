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

  // Use a state to track selected tab for styling purposes if needed, 
  // though react-headless-tabs handles the logic.
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

  const textAnimation1 = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
        <div
          key={index}
          className="group bg-[#111] border border-white/10 rounded-xl p-6 flex items-center justify-center text-center hover:bg-[#1a1a1a] hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        >
          <span className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors">{item}</span>
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
      className="py-12 lg:py-16 px-6 lg:px-12 text-white"
    >
      <div className="py-6 mb-8">
        <h2 className="lg:w-[90%] text-3xl lg:text-5xl font-bold mb-6">
          Technology Stack for Our <br />
          <span className="text-white">
            AI Custom Software Development
          </span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
          The right technology foundation makes all the difference between an AI idea and a real, scalable product. At our AI development company, we use a modern, enterprise-grade tech stack built around performance, security, and flexibility.
        </p>
      </div>

      <nav className="flex flex-wrap border-b border-gray-800 mb-8 gap-x-6 gap-y-2">
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
            className={`whitespace-nowrap pb-4 px-2 text-lg transition-colors border-b-2 ${selectedTab === tab.id ? 'border-blue-500 text-blue-400' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
          >
            {tab.label}
          </TabSelector>
        ))}
      </nav>

      <div className="py-6 min-h-[300px]">
        {Object.entries(techStack).map(([key, items]) => (
          <TabPanel key={key} hidden={selectedTab !== key} className="w-full focus:outline-none">
            <TechList items={items} />
          </TabPanel>
        ))}
      </div>
    </motion.div>
  );
};

export default Pagenation;
