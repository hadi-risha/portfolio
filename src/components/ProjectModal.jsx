import React from 'react'
// import { motion } from "framer-motion";
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
      name: "Lofticore",
      imgUrl: lofticore,
      description:
        "A full-stack furniture and decor marketplace built with the MERN stack and TypeScript. Customers browse a catalogue, preview products in 3D and in their own room with augmented reality on their phone, and pay online or on delivery. Order status updates arrive live, without refreshing the page.\n\nIt has five roles: customer, seller, delivery partner, admin and super admin. Sellers manage their own products and stock, and admins approve products and read sales reports. Search tolerates typos, a Gemini-powered assistant answers product questions, and recommendations follow what a user has viewed and bought.\n\nSecurity uses argon2 password hashing, short-lived access tokens with rotating refresh cookies, and two-factor authentication for staff. The API has 170 automated tests and OpenAPI documentation, and the app runs in production with Sentry error tracking and a public status page.",
      features: [
        {
          "Payment Methods":
            "Razorpay (test mode), UPI (demo), Cash on Delivery",
        },
        {
          Authentication: [
            "Email and password",
            "Google sign-in",
            "2FA for staff",
          ],
        },
        { "3D and AR": "Product viewer with AR on mobile" },
        { "Live Updates": "Order status via Server-Sent Events" },
        { Search: "Typo-tolerant, ranked by relevance (Meilisearch)" },
        { "AI Assistant": "Gemini shopping chatbot" },
        { Shopping: "Reviews and ratings, wishlist, guest cart" },
        { "Seller Tools": "Dashboard, inventory and stock reservation" },
        { Admin: "Approvals, reports and audit log" },
        { Observability: "OpenAPI docs, status page, Sentry" },
      ],
      tech: [
        "MongoDB (Atlas, transactions)",
        "Express.js",
        "React.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "TanStack Query",
        "Zustand",
        "Zod",
        "JWT with rotating refresh tokens",
        "argon2",
        "Redis",
        "BullMQ",
        "Server-Sent Events",
        "Meilisearch",
        "Razorpay",
        "Cloudinary",
        "Docker",
        "Vitest and Playwright",
        "GitHub Actions",
      ],
      githubLink: "https://github.com/hadi-risha/Lofticore-2",
      websiteUrl: "https://lofticore-2.vercel.app/",
    },
    {
      id: 2,
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
      githubLink: "https://github.com/hadi-risha/connect-backend-rebuild.git",
      websiteUrl: "https://connect-client-ltst.vercel.app",
    },
    {
      id: 3,
      name: "Time Trove",
      imgUrl: TT2,
      description:
        "A seamless and user-friendly e-commerce platform designed to enhance the shopping experience. Users can effortlessly log in, browse products, add items to their cart, and save favorites to their wishlist. The platform ensures a smooth checkout process with secure payment options, allowing users to track their orders and access purchase history. Easy returns and wallet management provide added convenience. An intuitive admin panel streamlines product, order, and user management, ensuring efficient operations and a hassle-free shopping journey.",
      features: [
        { "Payment Methods": "Razorpay, Cash on Delivery (COD), Wallet" },
      ],
      tech: ["MongoDB", "Express.js", "EJS", "Node.js", "JavaScript", "CSS"],
      githubLink: "https://github.com/hadi-risha/Time-Trove-ecommerce",
      //websiteUrl: "http://timetrove.duckdns.org:3031/",
      websiteUrl: "http://timetrove.ddns.net/",
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
