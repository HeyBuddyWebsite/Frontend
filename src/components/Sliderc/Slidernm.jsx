"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import Image from "next/image";
import Img from "../../../public/Images/img1.webp";

const Slidernm = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const Wrap = styled.div`
    cursor: pointer;
    img {
      width: 98%;
      border-radius: 10px;
      object-fit: cover;
      transition-duration: 300ms;
      &:hover {
        border: 4px solid rgba (249, 249, 249, 0.8);
      }
    }
  `;

  const Carousel = styled(Slider)`
    margin: 20px;
    width: 80%;
    .slick-list {
      overflow: visible;
    }
    ul li button {
      &:before {
        font-size: 10px;
        color: ${(props) => props.theme.white};
      }
    }
    li.slick-active button:before {
      color: ${(props) => props.theme.white};
    }
    button {
      z-index: 1;
    }
    .slick-dots {
      bottom: 25px;
      margin-x: auto;

      padding-right: 20px;
    }
    .slick-dots li button:before {
      font-size: 20px;
      color: white;
    }
    .slick-next:before {
    }
    .slick-prev:before {
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.64);
    }
  `;
  return (
    <>
      <div className="lg:w-[80%]">
        <Carousel {...settings}>
          <Wrap>
            <Image
              loading="lazy"
              src={Img}
              alt="badag"
              className="h-[50vh] lg:h-[70vh]"
            />
          </Wrap>
          <Wrap>
            <Image
              loading="lazy"
              src={Img}
              alt="badag"
              className="h-[50vh] lg:h-[70vh]"
            />
          </Wrap>
          <Wrap>
            <Image
              loading="lazy"
              src={Img}
              alt="badag"
              className="h-[50vh] lg:h-[70vh]"
            />
          </Wrap>
          <Wrap>
            <Image
              loading="lazy"
              src={Img}
              alt="badag"
              className="h-[50vh] lg:h-[70vh]"
            />
          </Wrap>
        </Carousel>
      </div>
    </>
  );
};

export default Slidernm;
