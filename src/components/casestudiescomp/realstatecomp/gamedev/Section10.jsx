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
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/csgame11.png')] bg-no-repeat bg-auto lg:bg-cover bg-[center_top_0rem]">
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="mx-auto"
      >
        <div className="py-16  " id="testimonials">
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
            className="w-[90%] md:w-[60%]"
          >
            {cardData.map((card) => (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  key={card.id}
                  // style={{
                  //   flex: "0 0 70%", // Set width to 100%
                  //   boxSizing: "border-box",
                  //   padding: "46px 56px",
                  //   borderRadius: "12px",
                  //   backgroundColor: "#fff",
                  //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  //   color: "white",
                  //   backgroundColor: "#0000004a",
                  //   width: "90%",
                  // }}
                  className="border-2 border-gray-500 rounded-lg px-6 py-6 text-2xl"
                >
                  <p className="text-gray-300">{card.content}</p>

                  {/* <p style={{ textAlign: "right" }}>{card.number}</p> */}
                  {/* <p style={{ textAlign: "right" }}>{card.name}</p> */}
                </div>
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
