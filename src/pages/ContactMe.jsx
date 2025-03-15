import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contactMe.css"

const ContactMe = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+\d\s]+$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid Email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm() || loading) return;
    setLoading(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="mb-40 max-w-screen min-h-screen py-4 bg-gray-100 overflow-x-hidden">
      <p className="mainHeading mx-20 w-full text-[13vw] font-medium">
        SAY HELLO
      </p>

      <div className="subText mx-20 mb-44 w-8/12 ">
        <p className="text-3xl leading-relaxed">
          I’m always excited to connect and collaborate on new projects. Whether
          you have a question, need design consultation, or want to discuss a
          potential partnership, feel free to reach out.
        </p>
      </div>

      <div className="contactTextContainer relative w-full flex justify-center items-center py-20">
        {/* Background Text */}
        <p className="bgContactText absolute text-[16rem] font-playfair text-gray-300 opacity-50 select-none">
          Contact
        </p>
        {/* Foreground Texts */}
        <div className="contactSubContainer absolute top-10/12 transform -translate-y-1/2 flex flex-col items-center space-y-4">
          <p className="contactText text-[12px] text-[#bfbfbf] font-semibold">
            CONTACT
          </p>
          <p className="contactMeText text-3xl font-playfair font-light text-black">
            Contact Me
          </p>
        </div>
      </div>

      <div className="detailandFormContainer px-20 mt-20 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="addressContainer py-20  bg-gray-100 flex space-x-20">
          <div className="contactLettersContainer text-sm text-gray-500">
            <div className="lettersContainer">
              <p className="rotate-[90deg]">C</p>
              <p className="rotate-[90deg]">O</p>
              <p className="rotate-[90deg]">N</p>
              <p className="rotate-[90deg]">T</p>
              <p className="rotate-[90deg]">A</p>
              <p className="rotate-[90deg]">C</p>
              <p className="rotate-[90deg]">T</p>
            </div>
            <div className="ml-1 bg-gray-700 w-[1.5px] h-10 "></div>
          </div>
          <div className="addressContainer space-y-10">
            <p className="myAddressText font-playfair text-4xl">My Address</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 100 100"
                  className="p-2 bg-white rounded-full"
                >
                  <path
                    fill="#3e3c3c"
                    d="m68.913 48.908l-.048.126l.042-.115z"
                    color="#3e3c3c"
                    strokeWidth={2.5}
                    stroke="#fff"
                  ></path>
                  <path
                    fill="#3e3c3c"
                    d="M50.002 0C33.524 0 20 13.48 20 29.922c0 6.372 2.04 12.31 5.48 17.174l-.123-.192l19.206 33.198l.097.127c.774 1.01 1.54 1.824 2.467 2.437s2.114 1 3.28.883c2.33-.234 3.684-1.844 4.935-3.54l.078-.105L76.594 43.87l.017-.03c.507-.915.874-1.838 1.188-2.732A29.6 29.6 0 0 0 80 29.922C80 13.48 66.48 0 50.002 0m0 5C63.756 5 75 16.218 75 29.922a24.6 24.6 0 0 1-1.84 9.332l-.025.062l-.022.065c-.263.757-.549 1.444-.879 2.04L51.275 77.087c-.927 1.221-1.575 1.51-1.367 1.488c.107-.01.206.074-.023-.078c-.219-.145-.666-.57-1.196-1.246L29.63 44.3l-.067-.093C26.69 40.147 25 35.23 25 29.922C25 16.219 36.248 5 50.002 5m0 7.85c-9.462 0-17.115 7.626-17.115 17.072s7.654 17.072 17.115 17.072s17.111-7.627 17.111-17.072s-7.65-17.072-17.111-17.072m0 5c6.817 0 12.111 5.285 12.111 12.072S56.82 41.994 50.002 41.994s-12.115-5.286-12.115-12.072c0-6.787 5.298-12.072 12.115-12.072"
                    color="#3e3c3c"
                    strokeWidth={2.5}
                    stroke="#fff"
                  ></path>
                  <path
                    fill="#3e3c3c"
                    d="M34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143s-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174z"
                    color="#3e3c3c"
                    strokeWidth={2.5}
                    stroke="#fff"
                  ></path>
                </svg>
                <p className="addressSubText text-gray-600">Kerala, India</p>
              </div>

              <div className="flex items-center space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  className="p-2 bg-white rounded-full"
                >
                  <circle
                    cx={12.003}
                    cy={18.937}
                    r={1}
                    fill="#3e3c3c"
                    strokeWidth={0.5}
                    stroke="#fff"
                  ></circle>
                  <path
                    fill="#3e3c3c"
                    d="M16.725 2.065h-9.45a2.386 2.386 0 0 0-2.24 2.5v14.87a2.386 2.386 0 0 0 2.24 2.5h9.45a2.38 2.38 0 0 0 2.24-2.5V4.565a2.38 2.38 0 0 0-2.24-2.5m1.24 17.37a1.384 1.384 0 0 1-1.24 1.5h-9.45a1.39 1.39 0 0 1-1.24-1.5v-2.5h11.93Zm0-3.5H6.035V4.565a1.39 1.39 0 0 1 1.24-1.5h9.45a1.384 1.384 0 0 1 1.24 1.5Z"
                    strokeWidth={0.5}
                    stroke="#fff"
                  ></path>
                </svg>
                <p className="addressSubText text-gray-600">+91 8593965289</p>
              </div>

              <a href="mailto:hadi.kuttiyullathil@gmail.com" className="block">
                <div className="flex items-center space-x-5 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    viewBox="0 0 24 24"
                    className="p-2 bg-white rounded-full"
                  >
                    <path
                      fill="#3e3c3c"
                      d="M21 9v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9c0-1.11.6-2.08 1.5-2.6l8-4.62l8 4.62c.9.52 1.5 1.49 1.5 2.6M3.72 7.47l7.78 5.03l7.78-5.03l-7.78-4.54zm7.78 6.24L3.13 8.28C3.05 8.5 3 8.75 3 9v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9c0-.25-.05-.5-.13-.72z"
                      strokeWidth={0.5}
                      stroke="#fff"
                    ></path>
                  </svg>
                  <p className="addressSubText text-blue-600 underline">
                    hadi.kuttiyullathil@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="formContainer w-6/12 mt-20 space-y-5"
        >
          <div className="flex space-x-5">
            <input
              className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}

          <input
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}

          <input
            className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <textarea
            className="bg-white shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            className={`px-6 py-2 text-sm border border-gray-500 rounded-lg cursor-pointer ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
            type="submit"
            disabled={loading} // disable button while sending
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
