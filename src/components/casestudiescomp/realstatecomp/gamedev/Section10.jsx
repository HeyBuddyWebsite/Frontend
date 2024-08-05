import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views-react-18-fix";

const Section10 = ({ testimonal }) => {
  const cardData = [
    {
      id: 1,
      content: testimonal,
      number: "01",
      // name: "Zan Syed",
    },
    // {
    //   id: 2,
    //   name: "Sarah",
    //   content:
    //     "Thank you very much! An amazing job done by buddies what I like to call the team that exceeds all expectations. I am glad that I trusted you guys with the work.",
    //   number: "02",
    // },
    // {
    //   id: 3,
    //   name: "Ankit",
    //   content:
    //     "I loved working with Hey Buddy and the way my VR project was handled, I consider this company as one of the best metaverse and game company in India.",
    //   number: "03",
    // },
    // {
    //   id: 4,
    //   name: "Riyahi",
    //   content:
    //     "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
    //   number: "04",
    // },
    // {
    //   id: 5,
    //   name: "Jeremy",
    //   content:
    //     "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
    //   number: "05",
    // },
    // {
    //   id: 6,
    //   name: "Bhaskar",
    //   content:
    //     "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
    //   number: "06",
    // },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const handleChangeIndex = (index) => {
    setCurrentCard(index);
  };

  return (
    <div className="w-[100%] lg:w-[80%]  mb-8 md:mb-12 lg:mb-[130px] mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse%209%20(3).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]">
      <div
        style={{
          overflow: "hidden",
         
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="w-[90%] lg:w-[100%] mx-auto"
      >
        <div className="pt-16  " id="testimonials">
          <div className="py-2 lg:py-4  mx-auto text-center justify-center  text-2xl lg:text-4xl font-bold text-white mb-6">
            <h3>Client Testimonal</h3>
          </div>

          <SwipeableViews
            index={currentCard}
            onChangeIndex={handleChangeIndex}
            style={{
              // Set initial width to 60%
              margin: "auto", // Center the container
            }}
            className="w-[100%] md:w-[70%]"
          >
            {cardData.map((card) => (
              <div key={card.id} className="py-6 px-6 lg:py-8  lg:px-16 " style={{ display: "flex", borderRadius:"24px", justifyContent: "center",background: "#FFFFFF1A",border: "2px solid #6B7280"
              }}>
                
                  <p style={{color: "#D1D5DB",fontSize:"20.44px",fontWeight:"400",lineHeight:"32px",textAlign:"center"
}}>{card.content}</p>

                  {/* <p style={{ textAlign: "right" }}>{card.number}</p> */}
                  {/* <p style={{ textAlign: "right" }}>{card.name}</p> */}
               
              </div>
            ))}
          </SwipeableViews>

          {/* <div style={{ textAlign: "center", marginTop: "16px" }}>
          <button
            style={{
              padding: "8px 16px",
              margin: "0 8px",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() =>
              handleChangeIndex(
                (currentCard - 1 + cardData.length) % cardData.length
              )
            }
          >
            Previous
          </button>
          <button
            style={{
              padding: "8px 16px",
              margin: "0 8px",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() =>
              handleChangeIndex((currentCard + 1) % cardData.length)
            }
          >
            Next
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section10;
