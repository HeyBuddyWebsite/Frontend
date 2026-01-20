"use client";
import React from "react";
import styled, { keyframes } from "styled-components";
import "../../styles/Section2Home.css";

const Company = () => {
  const row1 = [
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/_1491628374448.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/g3.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Google_2015_logo-01+1.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Group+1261152696.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Group+1261152698.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Group-1.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Group-2.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Group.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Layer+51+1.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Two_Sigma_logo-02.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Two_Sigma_logo-03.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Two_Sigma_logo-04.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Vector.png",
  ];

  return (
    <div className="w-full bg-black" style={{ paddingTop: "clamp(60px, 6vw, 100px)", paddingBottom: "clamp(60px, 6vw, 100px)" }}>
      <div className="text-center mx-auto justify-center py-8 lg:py-16">
        <h1 className="btn-shine text-white text-3xl lg:text-4xl font-bold">
          Brands that trust us{" "}
        </h1>
        <p className="text-white text-sm mt-2">
          Driving technology for leading brands
        </p>
      </div>
      <AppContainer className="w-[90%] overflow-hidden lg:w-[80%] pb-8 mx-auto">
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup key={`brand-1-${index}`}>
                  <Image loading="lazy" src={el} alt={`Brand logo ${index + 1}`} />
                </ImageGroup>
              ))}
              {row1.map((el, index) => (
                <ImageGroup key={`brand-2-${index}`}>
                  <Image loading="lazy" src={el} alt={`Brand logo ${index + 1}`} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </div>
  );
};

export default Company;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Marquee = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  user-select: none;
  position: relative;
  align-items: center;
  margin: 0 auto;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const MarqueeGroup = styled.div`
  flex-shrink: 0;
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  width: max-content;
  min-width: max-content;
  gap: 0;
  animation: ${scrollX} 30s linear infinite;
  will-change: transform;
`;

const ImageGroup = styled.div`
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  align-items: center;
  justify-content: center;
  width: 120px;
  min-width: 120px;
  max-width: 120px;
  margin: 0;
  padding: 0 20px;
  height: 60px;
  flex-shrink: 0;
  flex-grow: 0;
  box-sizing: border-box;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 40px;
  max-width: 100%;
  max-height: 40px;
  border-radius: 0.5rem;
  padding: 0;
  display: block;
  
  &:hover {
    opacity: 0.8;
  }
`;
