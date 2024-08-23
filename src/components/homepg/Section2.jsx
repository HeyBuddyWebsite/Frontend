"use client";

import React from "react";
import styled, { keyframes, css } from "styled-components";
import "../../styles/Section2Home.css";
import { BsUsbDrive } from "react-icons/bs";
import Image from "next/image";
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

function Company() {
  const row1 = [
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/amazon.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/bloomberg.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/dot_pe.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/facebook.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/google.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/Two_Sigma_logo-01.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/colorbar%20logo-01%202.png",
  ];

  return (
    <>
      <div className="text-center mx-auto justify-center py-16">
        <h1 className="btn-shine text-white text-2xl lg:text-4xl font-bold">
          Brands that trust us{" "}
        </h1>
        <p className="text-white text-sm">
          Driving technology for leading brands
        </p>
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
                  <Image
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
                  <Image
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

// const AppContainer = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 100%;
//   height: fit-content;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Marquee = styled.div`
//   display: flex;
//   width: 1200px;
//   overflow: hidden;
//   user-select: none;

//   mask-image: linear-gradient(
//     to right,
//     hsl(0 0% 0% / 0),
//     hsl(0 0% 0% / 1) 10%,
//     hsl(0 0% 0% / 1) 90%,
//     hsl(0 0% 0% / 0)
//   );
// `;

// const common = css`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   white-space: nowrap;
//   width: 100%;
//   animation: ${scrollX} 30s linear infinite;
// `;

// const MarqueeGroup = styled.div`
//   ${common}
// `;

// const ImageGroup = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: clamp(10rem, 1rem + 40vmin, 30rem);
//   padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// `;

// const Image = styled.img`
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//   border-radius: 0.5rem;
//   aspect-ratio: 16/9;
//   padding: 5px 20px;
// `;
