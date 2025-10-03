import React from 'react'

const InfoBox = ({ title1, title2, content, bgColor, textColor }) => {
    return (
      <div className={`border-[5px] border-[#C3AF69] p-6 text-center ${bgColor}`}>
        <div>
          <h2 className={`font-playfair text-2xl font-normal ${textColor}`}>{title1}</h2>
          <h2 className={`font-playfair text-2xl mb-4 ${textColor}`}>{title2}</h2>
        </div>
        <p className={`text-justify max-w-[85%] mx-auto leading-relaxed ${textColor}`}>
          {content}
        </p>
      </div>
    );
  };

export default InfoBox