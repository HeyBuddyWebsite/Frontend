import React from "react";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import "./styles.css";

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const AnimatedDiv = styled.div`
  animation: ${css`
    ${scrollX} 30s linear infinite
  `};
`;

const textAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 1.2 },
};

function Company() {
  const row1 = [
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/amazon.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/bloomberg.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/dot_pe.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/facebook.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/google.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/two_sigma.png",
  ];

  return (
    <>
      <div className="text-center mx-auto justify-center py-16">
        <motion.h1
          className="btn-shine text-white text-2xl lg:text-4xl font-bold"
          {...textAnimation}
          style={{}}
        >
          Brands that trust us{" "}
        </motion.h1>

        <motion.p
          className="text-white text-sm"
          {...textAnimation}
          style={{ lineHeight: "1.5rem" }}
        >
          Driving technology for leading brands
        </motion.p>
      </div>
      <div className="relative flex items-center justify-center w-[90%] overflow-hidden lg:w-[80%]">
        <div className="w-full h-fit flex items-center justify-center flex-col">
          <div
            className="flex w-[1200px] overflow-hidden select-none"
            style={{
              maskImage:
                "linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))",
            }}
          >
            <AnimatedDiv className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full">
              {row1.map((el, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  style={{
                    width: "clamp(10rem, 1rem + 40vmin, 30rem)",
                    padding: "calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)",
                  }}
                >
                  <img
                    loading="lazy"
                    src={el}
                    width={450}
                    height={450}
                    className="w-full h-full rounded-md"
                    style={{
                      objectFit: "contain",
                      aspectRatio: "16 / 9",
                      width: "100%", // Add a width property here
                      height: "100%",
                      padding: "5px 20px",
                    }}
                    alt={`Brand ${index}`}
                  />
                </div>
              ))}
            </AnimatedDiv>
            <AnimatedDiv className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full">
              {row1.map((el, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                  style={{
                    width: "clamp(10rem, 1rem + 40vmin, 30rem)",
                    padding: "calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10)",
                  }}
                >
                  <img
                    loading="lazy"
                    src={el}
                    width={450}
                    height={450}
                    className="w-full h-full rounded-md"
                    style={{
                      objectFit: "contain",
                      aspectRatio: "16 / 9",
                      width: "100%", // Add a width property here
                      height: "100%",
                      padding: "5px 20px",
                    }}
                    alt={`Brand ${index}`}
                  />
                </div>
              ))}
            </AnimatedDiv>
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
