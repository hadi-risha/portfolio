import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/footer.css"

const Footer = ({ scrollToIntro }) => {
  return (
    <div className="px-20 pt-20 max-w-screen h-[auto] bg-black flex justify-center text-center">
      <div className="mainContainer space-y-6">
        <p className="text-white block">
          Let's turn your ideas into a stunning reality.
        </p>
        <p className="secondText text-7xl font-bold text-white block">
          Have a Project?
        </p>
        <Link to="/contact">
          <p className="mt-6 px-6 py-2 border border-white text-white inline-block">
            Let's talk
          </p>
        </Link>

        <div className="lastSection ml-20 mt-16 flex items-end">
          <p className="myName text-[#272727] w-full text-[13vw] font-bold leading-none">
            Hadi Risha
          </p>
          <button onClick={scrollToIntro} className=" mb-6 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={41}
              height={61}
              viewBox="0 0 21 21"
              className="scrollBtn"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.5 7.5l-4-4l-4.029 4m4.029-4v13"
                strokeWidth={1}
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
