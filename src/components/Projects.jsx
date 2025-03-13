import React, { useState } from 'react'
import connect from "../assets/connect.png";
import TT from "../assets/TT.png";
import TT2 from "../assets/TT2.png";
import lofticore from "../assets/lofticore.png";
import blogApp from "../assets/blogApp.png";
import chatApp from "../assets/chatApp.png";
import razer from "../assets/razer.png";
import ather from "../assets/ather.png";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import "../styles/projects.css"


const projects = [
  {
    id: 1,
    name: "Connect",
    imgSrc: connect,
    description: "E-learning platform",
    link: "https://connect-client-delta.vercel.app/",
  },
  {
    id: 2,
    name: "Time Trove",
    imgSrc: TT2,
    description: "E-commerce platform",
    link: "https://timetrove.hadirisha.online/",
  },
  {
    id: 3,
    name: "Lofticore",
    imgSrc: lofticore,
    description: "E-commerce platform",
    link: "https://lofticore-ecommerce.vercel.app/",
    status: "In Progress", // This will be displayed only for Lofticore
  },
  {
    id: 4,
    name: "Blog App",
    imgSrc: blogApp,
    description: "Blog Application",
    link: "https://blog-app-mvyw.onrender.com/",
  },
  {
    id: 5,
    name: "Chat App",
    imgSrc: chatApp,
    description: "Chat Application",
    link: "https://chat-app-prod-ae4i.onrender.com/",
  },
  {
    id: 6,
    name: "Ather",
    imgSrc: ather,
    description: "Static page",
    link: "https://ather.onrender.com",
  },
];

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const techStack = [
      {
        name: "MongoDB",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={54}
            height={54}
            viewBox="0 0 128 128"
          >
            <path
              fill="white" // Change fill color to white
              stroke="white" // Change stroke color to white
              strokeWidth={3}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934c-3.244-10.104-8.45-19.046-15.783-26.74c-1.854-1.946-3.916-3.729-5.209-6.151c-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501c-.065 2.517-1.491 4.224-3.267 5.817c-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763q-2.388 4.388-4.772 8.775l-3.19 8.617l-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688c-.16 2.251.022 4.535.149 6.798c.181 3.235.743 6.415 1.586 9.545c3.062 11.372 9.276 20.805 17.771 28.819c1.579 1.489 3.199 2.843 4.847 4.26c.282-.965.507-1.93.763-2.895c.256-.961.515-1.917.688-2.881c-.174.964-.369 1.92-.562 2.881l-.826 2.895l.738 2.501l.684 3.884l.326 4.053c-.003.823-.036 1.648.014 2.47c.012.21.288.404.442.606l1.376.483l1.434.558l-.246-3.603l-.011-3.548l.495-5.405l.359-1.177l1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081c2.09-2.054 4.175-4.134 6.045-6.383a48 48 0 0 0 6.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001c.77-2.104 1.247-4.315 1.854-6.479c.054-.156.126-.309.16-.468c1.254-5.841 1.465-11.741 1.004-17.682m-23.599 49.375l-.805-1.763zl1.183 1.01z"
            />
          </svg>
        ),
      },
      {
        name: "React.js",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={54}
            height={54}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M11.103 10.438a1.786 1.786 0 1 0 2.44.654a1.786 1.786 0 0 0-2.44-.654m8.005 1.938q-.176-.201-.371-.403q.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701c-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146q-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644q-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924c-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5q-.279.286-.525.571c-1.465 1.698-2.057 3.376-1.457 4.415c.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124q.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659q.089-.262.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95c.619-1.075-.02-2.877-1.554-4.63M4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.5 20.5 0 0 0-.422 2.678A21 21 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452m3.887 5.728c-.51-.387-.985-.783-1.416-1.181c.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179q0 .59.028 1.178m0 3.94a7.2 7.2 0 0 1-2.64.094a1.77 1.77 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.5 20.5 0 0 0 2.107 1.7a21 21 0 0 0 .426 2.712q-.25.063-.505.114m7.1-8.039q-.503-.317-1.018-.613q-.508-.292-1.027-.563a19 19 0 0 1 1.739-.635a18 18 0 0 1 .306 1.811M9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98c.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.5 20.5 0 0 0-2.526.97a20 20 0 0 0-2.52-.981q.087-.3.188-.596m-.4 1.424a18 18 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823m-.317 7.66q.497.319 1.009.613q.522.3 1.057.576a18 18 0 0 1-1.744.665a19 19 0 0 1-.322-1.853m5.456 3.146a7.2 7.2 0 0 1-1.238 2.333a1.77 1.77 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20 20 0 0 0 2.53-1.01a21 21 0 0 0 2.547.979q-.072.249-.155.494m.362-1.324a19 19 0 0 1-1.762-.646q.509-.267 1.025-.565q.53-.306 1.032-.627a18 18 0 0 1-.295 1.838m.447-4.743q0 .911-.057 1.82q-.741.502-1.554.972q-.81.467-1.597.856q-.827-.396-1.622-.854q-.79-.455-1.544-.969q-.07-.91-.07-1.822q0-.911.068-1.821a24 24 0 0 1 3.158-1.823q.816.397 1.603.851q.79.454 1.55.959q.065.914.065 1.831m.956-5.093c1.922-.373 3.37-.122 3.733.507c.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20 20 0 0 0-2.144-1.688a20 20 0 0 0-.405-2.649q.31-.076.608-.135m-.13 3.885a18 18 0 0 1 1.462 1.188a18 18 0 0 1-1.457 1.208q.023-.594.023-1.188q0-.604-.028-1.208m3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20 20 0 0 0 .387-2.682a20 20 0 0 0 2.137-1.715q.177.183.336.364a7.2 7.2 0 0 1 1.403 2.238a1.77 1.77 0 0 1 .054 1.403"
              strokeWidth={0.5}
              stroke="#fff"
            ></path>
          </svg>
        ),
      },
      {
        name: "Node.js",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={58}
            height={45}
            viewBox="0 0 640 512"
          >
            <path
              fill="#fff"
              d="M316.3 452c-2.1 0-4.2-.6-6.1-1.6L291 439c-2.9-1.6-1.5-2.2-.5-2.5c3.8-1.3 4.6-1.6 8.7-4c.4-.2 1-.1 1.4.1l14.8 8.8c.5.3 1.3.3 1.8 0L375 408c.5-.3.9-.9.9-1.6v-66.7c0-.7-.3-1.3-.9-1.6l-57.8-33.3c-.5-.3-1.2-.3-1.8 0l-57.8 33.3c-.6.3-.9 1-.9 1.6v66.7c0 .6.4 1.2.9 1.5l15.8 9.1c8.6 4.3 13.9-.8 13.9-5.8v-65.9c0-.9.7-1.7 1.7-1.7h7.3c.9 0 1.7.7 1.7 1.7v65.9c0 11.5-6.2 18-17.1 18c-3.3 0-6 0-13.3-3.6l-15.2-8.7c-3.7-2.2-6.1-6.2-6.1-10.5v-66.7c0-4.3 2.3-8.4 6.1-10.5l57.8-33.4c3.7-2.1 8.5-2.1 12.1 0l57.8 33.4c3.7 2.2 6.1 6.2 6.1 10.5v66.7c0 4.3-2.3 8.4-6.1 10.5l-57.8 33.4c-1.7 1.1-3.8 1.7-6 1.7m46.7-65.8c0-12.5-8.4-15.8-26.2-18.2c-18-2.4-19.8-3.6-19.8-7.8c0-3.5 1.5-8.1 14.8-8.1c11.9 0 16.3 2.6 18.1 10.6c.2.8.8 1.3 1.6 1.3h7.5c.5 0 .9-.2 1.2-.5c.3-.4.5-.8.4-1.3c-1.2-13.8-10.3-20.2-28.8-20.2c-16.5 0-26.3 7-26.3 18.6c0 12.7 9.8 16.1 25.6 17.7c18.9 1.9 20.4 4.6 20.4 8.3c0 6.5-5.2 9.2-17.4 9.2c-15.3 0-18.7-3.8-19.8-11.4c-.1-.8-.8-1.4-1.7-1.4h-7.5c-.9 0-1.7.7-1.7 1.7c0 9.7 5.3 21.3 30.6 21.3c18.5 0 29-7.2 29-19.8m54.5-50.1c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1c0-6.3 5.2-11.1 11.1-11.1c6-.1 11.1 4.8 11.1 11.1m-1.8 0c0-5.2-4.2-9.3-9.4-9.3c-5.1 0-9.3 4.1-9.3 9.3s4.2 9.4 9.3 9.4c5.2-.1 9.4-4.3 9.4-9.4m-4.5 6.2h-2.6c-.1-.6-.5-3.8-.5-3.9c-.2-.7-.4-1.1-1.3-1.1h-2.2v5h-2.4v-12.5h4.3c1.5 0 4.4 0 4.4 3.3c0 2.3-1.5 2.8-2.4 3.1c1.7.1 1.8 1.2 2.1 2.8c.1 1 .3 2.7.6 3.3m-2.8-8.8c0-1.7-1.2-1.7-1.8-1.7h-2v3.5h1.9c1.6 0 1.9-1.1 1.9-1.8M137.3 191c0-2.7-1.4-5.1-3.7-6.4l-61.3-35.3c-1-.6-2.2-.9-3.4-1h-.6c-1.2 0-2.3.4-3.4 1L3.7 184.6C1.4 185.9 0 188.4 0 191l.1 95c0 1.3.7 2.5 1.8 3.2s2.5.7 3.7 0L42 268.3c2.3-1.4 3.7-3.8 3.7-6.4v-44.4c0-2.6 1.4-5.1 3.7-6.4l15.5-8.9c1.2-.7 2.4-1 3.7-1s2.6.3 3.7 1l15.5 8.9c2.3 1.3 3.7 3.8 3.7 6.4v44.4c0 2.6 1.4 5.1 3.7 6.4l36.4 20.9c1.1.7 2.6.7 3.7 0c1.1-.6 1.8-1.9 1.8-3.2zM472.5 87.3v176.4c0 2.6-1.4 5.1-3.7 6.4l-61.3 35.4c-2.3 1.3-5.1 1.3-7.4 0l-61.3-35.4c-2.3-1.3-3.7-3.8-3.7-6.4v-70.8c0-2.6 1.4-5.1 3.7-6.4l61.3-35.4c2.3-1.3 5.1-1.3 7.4 0l15.3 8.8c1.7 1 3.9-.3 3.9-2.2v-94c0-2.8 3-4.6 5.5-3.2l36.5 20.4c2.3 1.2 3.8 3.7 3.8 6.4m-46 128.9c0-.7-.4-1.3-.9-1.6l-21-12.2c-.6-.3-1.3-.3-1.9 0l-21 12.2c-.6.3-.9.9-.9 1.6v24.3c0 .7.4 1.3.9 1.6l21 12.1c.6.3 1.3.3 1.8 0l21-12.1c.6-.3.9-.9.9-1.6v-24.3zm209.8-.7c2.3-1.3 3.7-3.8 3.7-6.4V192c0-2.6-1.4-5.1-3.7-6.4l-60.9-35.4c-2.3-1.3-5.1-1.3-7.4 0l-61.3 35.4c-2.3 1.3-3.7 3.8-3.7 6.4v70.8c0 2.7 1.4 5.1 3.7 6.4l60.9 34.7c2.2 1.3 5 1.3 7.3 0l36.8-20.5c2.5-1.4 2.5-5 0-6.4L550 241.6c-1.2-.7-1.9-1.9-1.9-3.2v-22.2c0-1.3.7-2.5 1.9-3.2l19.2-11.1c1.1-.7 2.6-.7 3.7 0l19.2 11.1c1.1.7 1.9 1.9 1.9 3.2v17.4c0 2.8 3.1 4.6 5.6 3.2zM559 219c-.4.3-.7.7-.7 1.2v13.6c0 .5.3 1 .7 1.2l11.8 6.8c.4.3 1 .3 1.4 0L584 235c.4-.3.7-.7.7-1.2v-13.6c0-.5-.3-1-.7-1.2l-11.8-6.8c-.4-.3-1-.3-1.4 0zm-254.2 43.5v-70.4c0-2.6-1.6-5.1-3.9-6.4l-61.1-35.2c-2.1-1.2-5-1.4-7.4 0l-61.1 35.2c-2.3 1.3-3.9 3.7-3.9 6.4v70.4c0 2.8 1.9 5.2 4 6.4l61.2 35.2c2.4 1.4 5.2 1.3 7.4 0l61-35.2c1.8-1 3.1-2.7 3.6-4.7c.1-.5.2-1.1.2-1.7m-74.3-124.9l-.8.5h1.1zm76.2 130.2l-.4-.7v.9z"
              strokeWidth={13}
              stroke="#fff"
            ></path>
          </svg>
        ),
      },
      {
        name: "JavaScript",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={54}
            height={54}
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            >
              <path d="m20 4l-2 14.5l-6 2l-6-2L4 4z"></path>
              <path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5"></path>
            </g>
          </svg>
        ),
      },
      {
        name: "TypeScript",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={52}
            height={54}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M19.131 3H4.869c-.955 0-1.73.787-1.73 1.758v14.484c0 .97.775 1.758 1.73 1.758h14.262c.956 0 1.73-.787 1.73-1.758V4.758c0-.97-.774-1.758-1.73-1.758m-5.712 9.984h-2.215v6.434H9.439v-6.434H7.223v-1.441h6.196zm5.712 5.277c-.139.317-.377.552-.658.739a3 3 0 0 1-.969.386a5.6 5.6 0 0 1-1.177.12a6.5 6.5 0 0 1-1.211-.11a3.7 3.7 0 0 1-1.004-.33v-1.689l-.066-.053l.066-.015v.068q.441.357.972.545c.347.133.727.2 1.108.2c.242 0 .426-.021.589-.06a1.4 1.4 0 0 0 .415-.168a.7.7 0 0 0 .246-.253a.7.7 0 0 0-.052-.738a1.3 1.3 0 0 0-.346-.335a3 3 0 0 0-.52-.295c-.207-.095-.418-.194-.657-.292c-.589-.281-1.053-.562-1.35-.95c-.301-.35-.45-.808-.45-1.335c0-.422.08-.76.242-1.055c.173-.316.377-.548.658-.738c.277-.193.588-.334.969-.422c.38-.088.762-.133 1.177-.133s.762.024 1.073.073c.311.05.602.127.865.229v1.652a2.3 2.3 0 0 0-.415-.242a3.8 3.8 0 0 0-.97-.275a3 3 0 0 0-.45-.033a2.4 2.4 0 0 0-.553.057a1.3 1.3 0 0 0-.416.161a.8.8 0 0 0-.26.25a.6.6 0 0 0-.093.327q0 .194.104.351q.103.152.295.296c.114.091.27.183.45.274c.207.091.394.183.623.278c.311.133.588.281.83.422c.243.14.447.305.623.492c.187.175.322.387.416.633s.142.523.142.843c0 .457-.108.809-.246 1.125"
              strokeWidth={0.5}
              stroke="#fff"
            ></path>
          </svg>
        ),
      },
      {
        name: "HTML5",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={54}
            height={54}
            viewBox="0 0 24 24"
          >
            <path
              fill="white" // Change fill color to white
              stroke="white" // Change stroke color to white
              strokeWidth={0.5}
              d="m12 18.178l4.62-1.256l.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866l-2.52.667l-2.52-.667l-.158-1.844h-2.27l.329 3.544zM3 2h18l-1.623 18L12 22l-7.377-2z"
            />
          </svg>
        ),
      },
      ,
      {
        name: "CSS",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={54}
            height={50}
            viewBox="0 0 384 512"
          >
            <path
              fill="#fff"
              d="m0 32l34.9 395.8L192 480l157.1-52.2L384 32zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6l-98.2 28.7l-98.8-29.2l-6.4-73.9h48.9l3.2 38.3l52.6 13.3l54.7-15.4l3.7-61.6l-166.3-.5v-.1l-.2.1l-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112z"
              strokeWidth={13}
              stroke="#fff"
            ></path>
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={57}
            height={57}
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M18.5 9.51a4.2 4.2 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4a3.23 3.23 0 0 1 3.5-1.49a4.3 4.3 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4a3.2 3.2 0 0 1-3.5 1.51m-13 4.98a4.2 4.2 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4a3.23 3.23 0 0 1-3.5 1.49a4.3 4.3 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4a3.2 3.2 0 0 1 3.5-1.51"
              strokeWidth={0.5}
              stroke="#fff"
            ></path>
          </svg>
        ),
      },
    ];

    const openModal = (projectId) => {
      const projectData = projects.find((p) => p.id === projectId);
      setSelectedProject(projectData);
      setIsModalOpen(true);
    };
    return (
      <div className="mainContainer mt-32 pb-20 max-w-screen min-h-screen bg-gray-100 space-y-20">
        <div className="py-20 skillsIconContainer h-auto w-full bg-black flex flex-wrap justify-center gap-16">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="w-auto flex justify-center relative group max-[1357px]:w-1/4"
            >
              {tech.svg}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 text-black text-sm bg-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20 px-20 w-full space-y-36">
          {/* Heading Section */}
          <div className="workHeadingContainer relative w-full flex justify-center items-center py-20">
            {/* Background Text */}
            <p className="bgWorkTitle absolute text-[16rem] font-playfair text-gray-300 opacity-50 select-none">
              Works
            </p>

            {/* Foreground Texts */}
            <div className="subTextContainer absolute top-10/12 transform -translate-y-1/2 flex flex-col items-center space-y-4">
              <p className="portfolioText text-[12px] text-[#bfbfbf] font-semibold">
                PORTFOLIO
              </p>
              <p className="subText text-3xl font-playfair font-light text-black">
                Done Projects
              </p>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="projectMainContainer mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-12">
              {projects.map((project, index) => (
                <div key={index} className="h-auto max-h-[610px]">
                  <div className="relative">
                    <img
                      src={project.imgSrc}
                      alt={`${project.name} image`}
                      className="w-full h-[400px] object-cover rounded-lg border border-gray-300"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                  </div>

                  <div className="flex justify-between">
                    <p className="mt-4 font-playfair font-serif text-4xl">
                      {project.name}
                      {project.status && (
                        <span className="ml-2 text-base font-sans">
                          ({project.status})
                        </span>
                      )}
                    </p>
                    <p
                      // onClick={() => setIsModalOpen(true)}
                      onClick={() => openModal(project.id)}
                      className="mt-6 font-playfair font-semibold underline text-blue-600 cursor-pointer"
                    >
                      View details
                    </p>
                  </div>
                  <p className="mt-6 font-playfair font-serif text-xl">
                    {project.description}
                  </p>

                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="mt-5 px-5 py-2 rounded-full border hover:border-2 cursor-pointer"
                  >
                    View project
                  </button>
                </div>
              ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
              {isModalOpen && selectedProject && (
                <ProjectModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  project={selectedProject} // Pass selected project data
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
}

export default Projects;
