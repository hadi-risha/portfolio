import React from 'react'
import "../styles/services.css"

const Services = () => {
  return (
    // <div className="mainContainer mb-20 px-20 mt-10 max-w-screen min-h-screen bg-gray-100 flex space-x-28">
    <div className="mainContainer mb-20 px-20 mt-10 max-w-screen min-h-screen bg-gray-100 flex flex-col lg:flex-row space-x-28 lg:space-x-28">
      {/* <div className="headingContainer w-4/12 space-y-8"> */}
      <div className="headingContainer w-4/12 space-y-8 text-center lg:text-left">
        <p className="mainHeading text-7xl font-bold">Services</p>
        <p className="subHeading text-2xl poppins-regular">
          I offer a comprehensive range of services to ensure that projects run
          as smoothly as possible
        </p>
      </div>
      {/* <div className="servicesContainer w-8/12 flex space-x-7"> */}
      {/* <div className="servicesContainer w-8/12 flex flex-col space-y-7 lg:flex-row lg:space-x-7">
        <div className="mt-52 w-1/2 space-y-8">
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">API Development & Integration</p>
            <p className="text-base">
              Building scalable APIs and integrating third-party services to
              ensure seamless functionality.
            </p>
          </div>
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">Database Design & Management</p>
            <p className="text-base">
              Structuring efficient and secure databases to optimize performance
              and maintain data integrity.
            </p>
          </div>
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">Authentication & Security</p>
            <p className="text-base">
              Implementing robust authentication, authorization, and encryption
              to safeguard user data.
            </p>
          </div>
        </div>
        <div className="w-1/2 space-y-8">
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">UX/UI Design</p>
            <p className="text-base">
              Crafting intuitive and engaging user interfaces that enhance the
              overall user experience.
            </p>
          </div>
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">Product Design</p>
            <p className="text-base">
              Creating innovative products that balance functionality,
              usability, and aesthetics.
            </p>
          </div>
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">UX Research & Writing</p>
            <p className="text-base">
              Writing clear and concise content that guides users and enhances
              their digital experience.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="servicesContainer w-8/12 flex flex-col space-y-7 lg:flex-row lg:space-x-7"> */}
      <div className="servicesContainer w-8/12 flex flex-col space-y-7 lg:flex-row lg:space-x-7 justify-center items-center">
        <div className="serviceFirstContainer mt-52 w-3/4 space-y-8">
          {" "}
          {/* Adjusted width */}
          <div className="px-10 py-12 bg-white space-y-4 rounded-3xl">
            {" "}
            {/* Increased padding */}
            <p className="text-2xl">API Development & Integration</p>
            <p className="text-base">
              Building scalable APIs and integrating third-party services to
              ensure seamless functionality.
            </p>
          </div>
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">Database Design & Management</p>
            <p className="text-base">
              Structuring efficient and secure databases to optimize performance
              and maintain data integrity.
            </p>
          </div>
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">Authentication & Security</p>
            <p className="text-base">
              Implementing robust authentication, authorization, and encryption
              to safeguard user data.
            </p>
          </div>
        </div>
        <div className="w-1/2 space-y-8">
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">UX/UI Design</p>
            <p className="text-base">
              Crafting intuitive and engaging user interfaces that enhance the
              overall user experience.
            </p>
          </div>
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">Product Design</p>
            <p className="text-base">
              Creating innovative products that balance functionality,
              usability, and aesthetics.
            </p>
          </div>
          <div className="px-6 py-9 bg-white space-y-4 rounded-3xl">
            <p className="text-2xl">UX Research & Writing</p>
            <p className="text-base">
              Writing clear and concise content that guides users and enhances
              their digital experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
