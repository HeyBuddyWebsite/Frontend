"use client";
import React, { useEffect } from "react";
import union from "../../public/Images/Union.png";
import power from "../../public/Images/power.png";
import game from "../../public/Images/game.png";
import Image from "next/image";

const OrbitingCircles = () => {
  useEffect(() => {
    const orbits = document.querySelectorAll(".orbit");
    let angle = -360;

    setInterval(() => {
      angle += 1;
      orbits.forEach((orbit, index) => {
        const radius = 100 + index * 50;
        const x =
          100 +
          radius *
            Math.cos(
              (angle + index * 60) *
                (index % 2 === 0 ? Math.PI / 180 : -Math.PI / 180)
            );
        const y =
          100 +
          radius *
            Math.sin(
              (angle + index * 60) *
                (index % 2 === 0 ? Math.PI / 180 : -Math.PI / 180)
            );

        // Check if the circle is in the upper half
        if (y < 100) {
          // Show the circle and update its position
          orbit.style.display = "block";
          orbit.style.left = `${x}px`;
          orbit.style.top = `${y}px`;
        } else {
          // Hide the circle if it is in the lower half
          orbit.style.display = "none";
        }
      });
    }, 20);
  }, []);

  return (
    <div className="container hidden">
      <div className="semicircle"></div>
      <div className="center-circle">
        <Image loading="lazy" src={union} width={50} height={62.5} />
      </div>
      <div className="or1"></div>
      <div className="or2"></div>
      <div className="or3"></div>

      <div className="orbit orbit1">
        <Image loading="lazy" src={power} width={30} height={42.5} />
      </div>
      <div className="orbit orbit2">
        <Image loading="lazy" src={game} width={40} height={52.5} />
      </div>
      <div className="orbit orbit3"></div>

      <style jsx>{`
        .container {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .semicircle {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 100px 100px 0 0;
          top: 50px;
          left: 50px;
        }

        .center-circle {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 2px solid black;
          border-radius: 50%;
          top: 95px;
          left: 95px;
        }

        .orbit {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: none; /* Initially hide the orbits */
        }
        .or1 {
          width: 189px;
          height: 123px;
          border-top-left-radius: 110px;
          border-top-right-radius: 110px;
          border: 2px solid gray;
          border-bottom: 0;
          left: 13%;
          top: 4%;
          position: absolute;
        }
        .or2 {
          width: 289px;
          height: 160px;
          border-top-left-radius: 150px;
          border-top-right-radius: 150px;
          border: 2px solid gray;
          border-bottom: 0;
          left: -12%;
          top: -20%;
          position: absolute;
        }
        .or3 {
          width: 389px;
          height: 199px;
          border-top-left-radius: 190px;
          border-top-right-radius: 190px;
          border: 2px solid gray;
          border-bottom: 0;
          left: -37%;
          top: -45%;
          position: absolute;
        }

        .orbit1 {
          -webkit-animation: spin-right 20s linear infinite;
          animation: spin-right 6s linear infinite,
            glow 1.5s ease-in-out infinite;
          background-color: blue;
        }

        .orbit2 {
          background-color: yellow;

          -webkit-animation: spin-right 6s linear infinite;
          animation: spin-right 6s linear infinite,
            glow 1.5s ease-in-out infinite;
        }
        .orbit4 {
          background-color: lightblue;

          animation: spin-right 6s linear infinite,
            glow 1.5s ease-in-out infinite;
        }

        .orbit3 {
          background-color: red;
          animation: spin-right 6s linear infinite,
            glow 1.5s ease-in-out infinite;
        }

        @keyframes spin-right {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 10px white;
          }
          50% {
            box-shadow: 0 0 20px white, 0 0 30px white;
          }
          100% {
            box-shadow: 0 0 10px white;
          }
        }
      `}</style>
    </div>
  );
};

export default OrbitingCircles;
