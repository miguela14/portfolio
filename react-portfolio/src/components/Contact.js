import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required",
      }));
    } else {
      setFieldErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleEmailBlur = (e) => {
    const { value } = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.trim()) {
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        email: "This field is required",
      }));
    } else if (!emailRegex.test(value)) {
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setFieldErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check for any remaining errors
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || fieldErrors.email) {
      setSubmitStatus("error");
      return;
    }

    // Handle form submission (e.g., sending data to the server)
    try {
      // Simulate a delay to show the loading state
      setSubmitStatus("loading");
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // On successful submission:
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <div className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Send me a message</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {fieldErrors.name && <p className="text-red-500">{fieldErrors.name}</p>}
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleEmailBlur}
        />
        {fieldErrors.email && <p className="text-red-500">{fieldErrors.email}</p>}
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button
          className={`text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center ${
            submitStatus === "loading" ? "cursor-wait" : ""
          }`}
          onClick={handleSubmit}
          disabled={submitStatus === "loading"}
        >
          {submitStatus === "loading" ? "Submitting..." : "Let's Collaborate"}
        </button>
        {submitStatus === "error" && (
          <p className="text-red-500 text-center">An error occurred. Please try again.</p>
        )}
        {submitStatus === "success" && (
          <p className="text-green-500 text-center">Form submitted successfully!</p>
        )}
      </div>
    </div>
  );
};