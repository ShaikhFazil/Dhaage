import React, { useState } from "react";

const Form = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    note: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/AKfycbzYUznu7q5m2jCdEGFvYgo8bixeksym4RMoAmfCjsC5jOvviH1gg9S5U-my3SccTVnajg/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    alert("Form submitted successfully!");
    setFormData({ fullName: "", number: "", note: "" });
  };


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#480C2C] overflow-hidden px-6 py-12">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 300 Q400 100 800 300 T1600 300"
          stroke="#C3AF69"
          strokeWidth="1.5"
          fill="transparent"
          className="animate-dhaaga"
        />
        <path
          d="M0 400 Q400 200 800 400 T1600 400"
          stroke="#ffffff55"
          strokeWidth="1"
          fill="transparent"
          className="animate-dhaaga-slow"
        />
      </svg>

      <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-[#C3AF69]/40 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-gradient-to-r from-[#ffffff33] to-[#C3AF69]/30 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-[#C3AF69]/50 rounded-full blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Glass Container */}
      <form  onSubmit={handleSubmit} className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-2xl w-full max-w-md p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-center text-[#C3AF69] tracking-wider">
          Contact Form
        </h2>

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-lg text-[#C3AF69]">Full Name</label>
          <input
           type="text"
           name="fullName"
           value={formData.fullName}
           onChange={handleChange}
            placeholder="Enter your full name"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#C3AF69]"
          />
        </div>

        {/* Number */}
        <div className="flex flex-col gap-2">
          <label className="text-lg text-[#C3AF69]">Number</label>
          <input
           type="tel"
           name="number"
           value={formData.number}
           onChange={handleChange}
            placeholder="Enter your number"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#C3AF69]"
          />
        </div>

        {/* Note */}
        <div className="flex flex-col gap-2">
          <label className="text-lg text-[#C3AF69]">Note</label>
          <textarea
           name="note"
           value={formData.note}
           onChange={handleChange}
            placeholder="Write your note"
            className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#C3AF69]"
          />
        </div>

        {/* Send Button */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="border border-[#C3AF69] w-1/6 h-[1px]"></div>
          <button type="submit" className="px-6 py-2 text-lg font-medium rounded-xl bg-[#C3AF69]/20 text-[#C3AF69] border border-[#C3AF69] hover:bg-[#C3AF69]/40 transition">
            SEND
          </button>
          <div className="border border-[#C3AF69] w-1/6 h-[1px]"></div>
        </div>
      </form>

      <style jsx>{`
        @keyframes dhaaga {
          0% {
            stroke-dasharray: 0, 1000;
          }
          50% {
            stroke-dasharray: 500, 1000;
          }
          100% {
            stroke-dasharray: 0, 1000;
          }
        }
        .animate-dhaaga {
          stroke-dasharray: 0, 1000;
          animation: dhaaga 8s ease-in-out infinite;
        }
        .animate-dhaaga-slow {
          stroke-dasharray: 0, 1000;
          animation: dhaaga 14s ease-in-out infinite;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-25px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Form;
