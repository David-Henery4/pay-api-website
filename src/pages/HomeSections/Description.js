import React from 'react'
import { codeSvg,  TwoPhones, BgPatternThree} from "../../assets";


const Description = () => {
  return (
    <section className="max-w-maxContentWidth mx-auto w-full col-start-2 col-end-12 text-center flex flex-col gap-20 py-20 tab:py-[100px] lg:py-[150px]">
      <div className="flex flex-col justify-center items-center gap-12 lg:flex-row lg:justify-start lg:gap-32">
        <div className="lg:w-1/2 w-full max-w-[392px] desk:max-w-[445px]">
          <img
            className="w-full h-full"
            src={codeSvg}
            alt="easy-implementation-img"
          />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center max-w-[573px] lg:max-w-[445px] lg:text-left">
          <h3 className="font-dmDisplay text-secondarySanJuanBlue text-4xl font-medium tab:text-5xl lg:w-full">
            Easy to implement
          </h3>
          <p>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
      {/**/}
      <div className="relative flex flex-col justify-between items-center lg:flex-row-reverse gap-12">
        <BgPatternThree
          className="hidden lg:block pointer-events-none absolute w-[780px] h-[780px] lg:left-[88%] desk:left-[80%]"
        />
        <div className="relative z-10 desk:w-full w-full max-w-[363px] desk:max-w-[566px]">
          <TwoPhones className="rounded-[8%]" />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center max-w-[573px] lg:text-left lg:max-w-[445px]">
          <h3 className="font-dmDisplay text-secondarySanJuanBlue text-4xl font-medium tab:text-5xl lg:w-full">
            Simple UI & UX
          </h3>
          <p>
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description