"use client";

import React from "react";
import Hm from "./Slidernm";
import styled from "styled-components";

const Showslider = () => {
  const Container = styled.main`
    min-height: calc(100vh - 90px);
    padding: 0 calc(9.5vw - 5px);
    width: 80%;
    margin: 10px;
    position: relative;
    overflow-x: hidden;
    &:before {
      background-image: url("/images/home-background.png");
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
    h4 {
      font-size: 1.3rem;
      letter-spacing: 0.11px;
      line-height: 1.4;
    }
  `;
  return (
    <Container>
      <Hm />
    </Container>
  );
};

export default Showslider;

