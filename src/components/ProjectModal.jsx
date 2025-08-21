import React from 'react'
import { motion } from "framer-motion";
import connect from "../assets/connect.png";
import TT2 from "../assets/TT2.png";
import lofticore from "../assets/lofticore.png";
import blogApp from "../assets/blogApp.png";
import chatApp from "../assets/chatApp.png";
import ather from "../assets/ather.png";


const ProjectModal = ({ isOpen, onClose, project }) => {
  console.log("kkkkk", project);
  if (!isOpen) return null; // prevents rendering when not open

  const projectDetails = [
    {
      id: 1,
      name: "Connect",
      imgUrl: connect,
      description:
        "A dynamic e-learning platform built on the MERN stack, designed to provide an interactive and personalized learning experience. Users can authenticate using email and password or Google login and seamlessly reserve sessions with instructors through a secure payment system. Learning happens in real-time via video calls, allowing for direct interaction with educators. The platform also offers real-time chat for doubt clarification, community discussions for peer learning, and AI-powered chatbot support for instant assistance. With a host of additional features, this platform ensures a seamless and engaging learning journey",
      features: [
        { Chat: "Socket.IO" },
        { "Video Call": "ZegoCloud" },
        { "AI Chatbot": "Gemini AI" },
        { Authentication: ["Google Authentication"] },
        { "Payment Method": "Stripe" },
      ],
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "JWT",
        "Redux Toolkit",
        "OAuth 2.0",
        "Socket.IO",
        "ZegoCloud",
        "Gemini AI",
        "Stripe",
      ],
      githubLink: "https://github.com/hadi-risha/connect-elearning-platform",
      websiteUrl: "https://connect-client-delta.vercel.app/",
    },
    {
      id: 2,
      name: "Time Trove",
      imgUrl: TT2,
      description:
        "A seamless and user-friendly e-commerce platform designed to enhance the shopping experience. Users can effortlessly log in, browse products, add items to their cart, and save favorites to their wishlist. The platform ensures a smooth checkout process with secure payment options, allowing users to track their orders and access purchase history. Easy returns and wallet management provide added convenience. An intuitive admin panel streamlines product, order, and user management, ensuring efficient operations and a hassle-free shopping journey.",
      features: [
        { "Payment Methods": "Razorpay, Cash on Delivery (COD), Wallet" },
      ],
      tech: ["MongoDB", "Express.js", "EJS", "Node.js", "JavaScript", "CSS"],
      githubLink: "https://github.com/hadi-risha/Time-Trove-ecommerce",
      // websiteUrl: "https://timetrove.hadirisha.online/",
      websiteUrl: "http://13.211.234.157:3031/"
    },
    {
      id: 3,
      name: "Lofticore",
      "In progress": true,
      imgUrl: lofticore,
      description:
        "Lofticore is an e-commerce platform currently under development using the MERN stack with TypeScript. It will offer a seamless shopping experience with AI-powered product recommendations based on previous user interactions. Users can authenticate via GitHub, Google, or standard email/password login. The platform will support multiple payment options, including PayPal/Stripe, Cash on Delivery (COD), and Wallet. A guest cart feature allows users to add products before logging in, ensuring convenience. Additionally, customers can review and rate products, and all essential e-commerce functionalities will be included for a smooth and engaging shopping experience.",
      features: [
        { "Payment Methods": "PayPal, Cash on Delivery (COD), Wallet" },
        { Authentication: ["Google Authentication", "GitHub Authentication"] },
      ],
      tech: [
        "mongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Javascript",
        "Typescript",
        "TalwindCss",
        "JWT",
        "bcrypt",
        "Redux toolkit",
        "Refresh token",
      ],
      githubLink: "https://github.com/hadi-risha/lofticore-ecommerce",
      websiteUrl: "https://lofticore-ecommerce.vercel.app/",
    },
    {
      id: 4,
      name: "Blog App",
      imgUrl: blogApp,
      description:
        "A simple and user-friendly blog platform built on the MERN stack with TypeScript. Users can create, update, and delete their own blogs while also viewing blogs from others. The platform provides a straightforward experience for sharing and exploring content, making blogging accessible and easy to manage.",
      features: [{ "Blog Management": "Create, Read, Update, Delete" }],
      tech: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "JWT",
        "bcrypt",
      ],
      githubLink: "https://github.com/hadi-risha/blog-app",
      websiteUrl: "https://blog-app-mvyw.onrender.com/",
    },
    {
      id: 5,
      name: "Chat App",
      imgUrl: chatApp,
      description:
        "A real-time chat application built on the MERN stack with Socket.IO. Users can search for other users and engage in instant messaging with a seamless and responsive experience. The platform enables real-time communication, ensuring fast and efficient message delivery for smooth conversations.",
      features: [{ Chat: "Real-time messaging with Socket.IO" }], //here add 1 more thing like used a prebuilt template for ;ogin or something
      tech: [
        "mongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Javascript",
        "TalwindCss",
        "JWT",
        "bcrypt",
      ],
      // from here start again wifi
      githubLink: "https://github.com/hadi-risha/chat-app",
      websiteUrl: "https://chat-app-prod-ae4i.onrender.com/",
    },
    {
      id: 6,
      name: "Ather",
      imgUrl: ather,
      description:
        "A recreated static homepage of the Ather site, built using HTML5 and CSS with Bootstrap. The design maintains responsiveness and a clean layout, ensuring a smooth and visually appealing user experience.",

      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
      githubLink: "https://github.com/hadi-risha/Ather",
      websiteUrl: "https://ather.onrender.com/",
    },
  ];

  const selectedProject = projectDetails.find((p) => p.id === project.id);

  if (!selectedProject) {
    return null; 
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "80vh", marginTop: "5vh", marginBottom: "5vh" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-600 hover:text-black text-2xl cursor-pointer"
        >
          ✖
        </button>

        {/* scrollable content area */}
        <div
          className="mt-10 overflow-y-auto flex-1 pr-4"
          style={{
            maxHeight: "70vh",
            scrollbarWidth: "thin",
            scrollbarColor: "#c0c0c0 transparent",
          }}
        >
          {/* custom scrollbar styling */}
          <style>
            {`
              /* Thin Scrollbar */
              ::-webkit-scrollbar {
                width: 4px;
              }
              ::-webkit-scrollbar-thumb {
                background-color: #c0c0c0;
                border-radius: 4px;
              }
              ::-webkit-scrollbar-track {
                background: transparent;
              }
            `}
          </style>

          <img
            src={selectedProject.imgUrl}
            alt={selectedProject.name}
            className="w-full h-64 object-cover rounded-md mb-4"
          />

          <h2 className="text-2xl font-bold">{selectedProject.name}</h2>

          <p className="mt-2 text-gray-700">{selectedProject.description}</p>

          {selectedProject.tech && (
            <>
              <p className="mt-4 font-semibold">Tech Used:</p>
              <ul className="list-disc pl-5">
                {selectedProject.tech.map((tech, index) => (
                  <li key={index} className="text-gray-700">
                    {tech}
                  </li>
                ))}
              </ul>
            </>
          )}

          {selectedProject.features && (
            <div className="mt-4 space-y-4">
              {selectedProject.features.map((feature, index) => (
                <div key={index} className="flex justify-between">
                  <p className="font-semibold">{Object.keys(feature)[0]}</p>
                  <p>
                    {Array.isArray(Object.values(feature)[0])
                      ? Object.values(feature)[0].join(", ")
                      : Object.values(feature)[0]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* buttons - visit website & gitHub */}
        <div className="mt-4 flex justify-between items-center">
          {selectedProject.websiteUrl && (
            <button
              onClick={() => window.open(selectedProject.websiteUrl, "_blank")}
              className="px-5 py-2 rounded-full border hover:border-2 cursor-pointer"
            >
              Visit Project
            </button>
          )}
          {selectedProject.githubLink && (
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View on GitHub
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
