import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 bg-[#480C2C] px-4 sm:px-6 py-8">
      <div className="border-[1px] border-[#C3AF69] h-[1px] w-full"></div>

      {/* <div className="flex flex-wrap gap-4 md:gap-10 items-center justify-center pt-4">
        <h1 className="text-sm sm:text-lg md:text-2xl font-playfair text-[#C3AF69] text-center">
          CAREER
        </h1>
        <h1 className="text-sm sm:text-lg md:text-2xl font-playfair text-[#C3AF69] text-center">
          PRIVACY POLICY
        </h1>
        <h1 className="text-sm sm:text-lg md:text-2xl font-playfair text-[#C3AF69] text-center">
          RETURN POLICY
        </h1>
        <h1 className="text-sm sm:text-lg md:text-2xl font-playfair text-[#C3AF69] text-center">
          TERMS & CONDITIONS
        </h1>
      </div> */}

      <div className="w-full flex justify-center">
  <div className="lg:w-[50%] h-[250px] sm:h-[300px] md:h-[400px] flex items-center justify-center mt-6 relative overflow-hidden rounded-md border-2 border-[#C3AF69]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15087.474214582053!2d72.86923044999999!3d19.025513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf30b033c95f%3A0xed6a913c37dc832!2sAntop%20Hill%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1758821074202!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


      <div className="flex flex-col gap-1 items-center justify-center mt-4">
        <h1 className="text-sm sm:text-base font-bold text-[#C3AF69]">
          +91 9892937786
        </h1>
        <h1 className="text-[8px] sm:text-[10px] font-bold text-[#C3AF69]">
          WWW.DHAAGAE.COM
        </h1>
      </div>

      <div className="flex items-center justify-center gap-3 mt-6 w-full">
        <div className="border-[1px] border-[#C3AF69] h-[1px] flex-1"></div>
        <span className="text-xs sm:text-sm text-center text-[#C3AF69] whitespace-nowrap">
          FIND US ON THE MAP
        </span>
        <div className="border-[1px] border-[#C3AF69] h-[1px] flex-1"></div>
      </div>

      <div className="border-[1px] border-[#C3AF69] h-[1px] w-full mt-6"></div>
    </div>
  );
};

export default Footer;
