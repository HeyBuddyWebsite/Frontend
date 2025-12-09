"use client";

import React from "react";
import styled, { keyframes, css } from "styled-components";
import "../../styles/Section2Home.css";

function Company() {
  const row1 = [
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/amazon.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/bloomberg.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/dot_pe.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/facebook.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/google.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/two_sigma.png",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762296556827_852feu.png?x-id=PutObject",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762296665658_84yo61.png?x-id=PutObject",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762296712051_ixw9uo.png?x-id=PutObject",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762296735389_uee3l0.png?x-id=PutObject",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762296754391_nqtnb8.png?x-id=PutObject",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762296777386_iqnpk5.png?x-id=PutObject",
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762296799410_m3fvuu.png?x-id=PutObject",
  ];

  return (
    <>
      <div className="text-center mx-auto justify-center py-16">
        <h1 className="btn-shine text-white text-3xl lg:text-4xl font-bold">
          Brands that trust us{" "}
        </h1>
        <p className="text-white text-sm">
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
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el, index) => (
                <ImageGroup key={`brand-2-${index}`}>
                  <Image loading="lazy" src={el} alt={`Brand logo ${index + 1}`} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </>
  );
}

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

const common = css`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  width: fit-content;
  gap: 0;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
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
