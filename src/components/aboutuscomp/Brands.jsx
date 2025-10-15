"use client";

import React from "react";
import styled, { keyframes, css } from "styled-components";


function Company() {
  const row1 = [
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/amazon.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/bloomberg.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/dot_pe.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/facebook.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/google.png",
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Brands/two_sigma.png",
  ];

  //   const row2 = [
  //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
  //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
  //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
  //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
  //     "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  //   ];

  return (
    <>
      <div className="text-center mx-auto justify-center  pb-16 sm:pt-16 pt-24   ">
     
        <div className="py-2 lg:py-8  mx-auto text-center justify-center  text-xl lg:text-2xl font-bold text-white mb-6">
          <h1
            style={{
              color: "#ffffff",
              background:
                "linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%)",
              backgroundPosition: "0",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shine 5s infinite linear forwards",
              WebkitTextSizeAdjust: "none",
              fontFamily: "customFont",
              fontWeight: "900",
            }}
            className="text-white text-2xl lg:text-4xl font-bold"
          >
            Brands that trust us
          </h1>
        </div>
        <p className="text-white text-sm">These are Our Business Buddies</p>
      </div>
      <AppContainer className="w-[90%] mx-auto overflow-hidden lg:w-[80%]">
        <Wrapper>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image loading="lazy" src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image loading="lazy" src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>

          {/* <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Image loading="lazy"Group>
                <Image loading="lazy" src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <Image loading="lazy"Group>
                <Image loading="lazy" src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee> */}
        </Wrapper>
      </AppContainer>
    </>
  );
}

export default Company;

const AppContainer = styled.div`
  // width: 80vw;
  //   height: 100vh;
  // color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;
  align-items: center;

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
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;

  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
`;
