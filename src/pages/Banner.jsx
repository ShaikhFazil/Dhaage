import React from "react";
import Ban1 from "../assets/ban2.jpg";
import InfoBox from "../component/InfoBox";

const Banner = () => {
  const boxes = [
    {
      title1: "HOW WE CAN",
      title2: "HELP YOU",
      content: `Do you still not know where to start when buying new clothes?
          Which items of clothing will combine well together and which will
          suit you? Our fashion consultants are here to help you with these
          questions and are at your disposal 24 hours a day, 7 days a week.
          We have only to agree on the time of the meeting.`,
      bgColor: "bg-[#480C2C]",
      textColor: "text-[#fff]",
    },
    {
      title1: "WE CAN COME",
      title2: "TO YOU",
      content: `Do you require a new suit but find yourself too pressed for time to visit us? It is no problem for us. You can choose and try on new clothes in your own home or office. We can also deliver your completed suit to whatever address you require`,
      bgColor: "bg-[#480C2C]",
      textColor: "text-[#fff]",
    },
    {
      title1: "EXPRESS",
      title2: "SERVICES",
      content: `If you require a new suit or shirt faster than usual we can also offer express manufacture and delivery. For an extra fee we can tailor make a new suit or shirt within just 1 week.`,
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
