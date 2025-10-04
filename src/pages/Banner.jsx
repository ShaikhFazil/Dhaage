import React from "react";
import Ban1 from "../assets/ban2.jpg";
import InfoBox from "../component/InfoBox";

const Banner = () => {
  const boxes = [
    {
      title1: "HOW WE CAN",
      title2: "HELP YOU",
      content: `Not sure what style or outfit will suit you best? Wondering how to pair fabrics, patterns, or embroidery for the perfect look? Our style consultants are here to guide you through every detail — from fabric selection to final fitting. We’re available to assist you all week — simply book a time that works for you.`,
      bgColor: "bg-[#480C2C]",
      textColor: "text-[#fff]",
    },
    {
      title1: "WE CAN COME",
      title2: "TO YOU",
      content: `Pressed for time? No worries — Dhaagae offers doorstep service. Our team can visit your home or office with fabric swatches, design options, and stitching consultations. Once ready, we’ll deliver your perfectly tailored outfit right to your doorstep.`,
      bgColor: "bg-[#480C2C]",
      textColor: "text-[#fff]",
    },
    {
      title1: "EXPRESS",
      title2: "STITCHING",
      content: `Need your outfit sooner than expected? With our express service, you can get your ethnic wear stitched and delivered within just 7 days. Ideal for last-minute events, functions, or festivals — crafted with the same care and precision.`,
      bgColor: "bg-[#480C2C]",
      textColor: "text-[#fff]",
    },
  ];

  return (
    <div className="relative bg-white w-full">
    <div className="relative z-10 flex justify-center px-5">
      <img src={Ban1} alt="Banner" className="w-full h-[85vh] object-cover" />
    </div>

    <div className="relative -mt-56 px-6 pt-20 bg-[#480C2C] z-0">
      <div className="pt-60 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {boxes.map((box, index) => (
          <InfoBox
            key={index}
            title1={box.title1}
            title2={box.title2}
            content={box.content}
            bgColor={box.bgColor}
            textColor={box.textColor}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Banner;
