import React from 'react';
import BeganImage from "../assets/began.png"; 
import Meeting from "../assets/have.png";

const WeBegan = () => {
  return (
    <div className="pt-10 md:pt-20 bg-[#480C2C] relative overflow-hidden">
      {/* Section Title */}
      <div className="flex flex-col gap-4 px-4 sm:px-6">
        <div className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair text-[#C3AF69] text-center">
          WHY WE BEGAN
        </div>

        {/* Desktop overlapping boxes */}
        <div className="hidden lg:block relative w-full mt-6 md:mt-10 h-[600px] lg:h-[800px]">
          {/* Left Image Box */}
          <div
            className="absolute border-[#C3AF69] border-4 md:border-5 lg:border-6 xl:border-7 overflow-hidden"
            style={{
              width: '612px',
              height: '638px',
              top: '50px',
              left: '52px',
            }}
          >
            <img
              src={BeganImage}
              alt="We Began"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Text Box */}
          <div
            className="absolute border-[#C3AF69] border-10 bg-[#480C2C]/70 flex items-center justify-center p-10"
            style={{
              width: '800px',
              height: '579px',
              top: '80px',
              left: '601px',
            }}
          >
            <p className="text-[#FFF8E7] text-lg leading-relaxed font-light font-playfair text-justify max-w-[90%]">
              It began with a quiet moment — a daughter watching her mother’s hands move gently over fabric, 
              a bride imagining her perfect lehenga, a woman wishing her outfit could speak who she truly is.
              <br /><br />
              From that small table, thread and needle became more than tools — they became a way to preserve tradition, 
              honor womanhood, and weave memories into every seam.
              <br /><br />
              Even when festivals like Eid or Diwali arrive, and the world rushes by, we pour our heart into each stitch, 
              because we believe every woman deserves to celebrate in what she truly loves. 
              <br /><br />
              At Dhaagae, every outfit carries that first feeling — a thread of love, a stitch of care, and the beauty of being seen.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-4 mt-6 lg:hidden text-white">
          <div className="border-[#C3AF69] border-4 w-full h-40 bg-transparent">
            <img
              src={BeganImage}
              alt="We Began"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-[#FFF8E7] text-base leading-relaxed font-light px-4">
            It began with a quiet moment — a daughter watching her mother’s hands move gently over fabric, 
            a bride imagining her perfect lehenga, a woman wishing her outfit could speak who she truly is.
            <br /><br />
            From that small table, thread and needle became more than tools — they became a way to preserve tradition, 
            honor womanhood, and weave memories into every seam.
            <br /><br />
            Even when festivals like Eid or Diwali arrive, and the world rushes by, we pour our heart into each stitch, 
            because we believe every woman deserves to celebrate in what she truly loves. 
            <br /><br />
            At Dhaagae, every outfit carries that first feeling — a thread of love, a stitch of care, and the beauty of being seen.
          </p>
        </div>
      </div>

      {/* Meeting Section */}
      <div className="relative w-full lg:mt-0 mt-10 h-[300px] sm:h-[400px] md:h-[500px] bg-[#480C2C] mb-10 flex items-center justify-center">
        <img
          src={Meeting}
          alt="Meeting"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />

        <div className='absolute top-[40%] w-[741px] border-[1px] h-[4px] text-[#fff]'></div>
        <h2 className="absolute text-[#C3AF69] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center">
          SCHEDULE  <span className='px-2'>A</span> MEETING
        </h2>
        <div className='absolute top-[60%] w-[741px] border-[1px] h-[4px] text-[#fff]'></div>
        <button
  type="button"
  onClick={() => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="absolute top-[80%] cursor-pointer px-6 py-2 text-lg font-medium rounded-xl bg-[#C3AF69]/20 text-[#C3AF69] border border-[#C3AF69] hover:bg-[#C3AF69]/40 transition"
>
  View Form
</button>

      </div>
    </div>
  );
};

export default WeBegan;
