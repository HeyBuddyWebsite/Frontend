"use client";

import React from "react";
import styled, { keyframes, css } from "styled-components";
import "../../styles/Section2Home.css";

function Company() {
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
      <div className="text-center mx-auto justify-center py-16">
        <h2 className="btn-shine text-white text-3xl lg:text-4xl font-bold">
          Brands that trust us{" "}
        </h2>
        <p className="text-white text-sm">
          Driving technology for leading brands
        </p>
      </div>
      <AppContainer className="w-[90%] overflow-hidden lg:w-[80%] pb-8">
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
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
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
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
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
