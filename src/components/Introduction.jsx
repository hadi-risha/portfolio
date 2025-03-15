import React, { useEffect, useRef } from "react";
import myPhoto from "../assets/my-img.jpg";
import '../styles/introduction.css'

const Introduction = () => {
  const developerOptions = [
    "FULL STACK DEVELOPER",
    "MERN STACK DEVELOPER",
    "NODE.JS DEVELOPER",
    "FRONTEND DEVELOPER",
    "UI/UX DESIGNER",
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const startScrolling = () => {
      let scrollAmount = container.scrollWidth / 2; // start from the right
      const scrollSpeed = 1; // adjust speed

      const scroll = () => {
        scrollAmount -= scrollSpeed; // move leftward
        if (scrollAmount <= 0) {
          scrollAmount = container.scrollWidth / 2; // reset to the end
        }
        container.scrollTo({
          left: scrollAmount,
          behavior: "auto",
        });
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    };

    startScrolling();
  }, []);

  return (
    <div className="mx-20 mb-28 max-w-screen min-h-screen py-4 bg-gray-100">
      <p className="mainText w-full font-bold text-[10.9vw] max-[1350px]:text-[9vw] max-[1200px]:text-[8vw] max-[1024px]:text-[7vw] max-[768px]:text-[6vw] max-[640px]:text-[5vw]">
        WEB DEVELOPER
      </p>

      <div className="introContainer w-full flex justify-between max-[1210px]:mt-20">
        <div className="myImageContainer w-5/12">
          <img
            src={myPhoto}
            className="w-full h-96 rounded-3xl object-cover transition-all duration-500 filter grayscale hover:filter-none"
            alt="Hadi's photo"
          />
        </div>
        <div className="selfIntroContainer h-96 w-5/12 space-y-10 flex flex-col justify-center">
          <p className="text-2xl font-medium">
            Hadi Risha is a skilled MERN stack developer and product designer
            based in Calicut, specializing in building innovative web
            applications.
          </p>
          <p>
            With a keen eye for detail and a passion for crafting seamless user
            experiences, she specializes in both frontend and backend
            development using the MERN stack. She builds intuitive, scalable,
            and user-centered digital products, focusing on understanding user
            needs, optimizing performance, and balancing aesthetics with
            functionality. Whether developing social media platforms, web
            applications, or complex systems, she is dedicated to creating
            impactful solutions that enhance user engagement and drive business
            success.
          </p>
        </div>
      </div>

      {/* Continuous Scrolling Text with Left Margin on First Item */}
      <div
        ref={containerRef}
        className="designationContainer mt-12 flex items-center overflow-hidden whitespace-nowrap max-[1210px]:mt-36"
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-10 items-center">
            {developerOptions.map((option, index) => (
              <React.Fragment key={`${index}-${i}`}>
                <p
                  className={`text-2xl max-[1210px]:text-xl max-[1024px]:text-lg max-[768px]:text-base ${
                    index === 0 ? "ml-10" : ""
                  }`}
                >
                  {option}
                </p>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
