import React from 'react'
import TestimonialIconGrid from "../SharedSections/TestimonialIconGrid";

const TestimonialSection = () => {
  return (
    <div className="grid place-items-center gap-8 lg:justify-items-start">
      <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue/75 leading-8 text-center max-w-[445px] lg:text-left">
        Join the thousands of innovators already building with us
      </h3>
      <TestimonialIconGrid isContactPage={true} />
    </div>
  );
}

export default TestimonialSection