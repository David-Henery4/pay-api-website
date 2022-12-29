import React from 'react'
import { simpleUi, easyImplementation, SimpleUi, EasyImplementation, CodeSvg , codeSvg, twoPhones, TwoPhones} from "../../assets";

const Description = () => {
  return (
    <section className="col-start-2 col-end-12 text-center flex flex-col gap-20">
      <div className="flex flex-col justify-center items-center gap-12 desk:flex-row desk:justify-start desk:gap-32">
        <div className="desk:w-1/2 w-full max-w-[392px]">
          {/* <img src={easyImplementation} alt="" /> */}
          {/* <EasyImplementation /> */}
          <img className="w-full h-full" src={codeSvg} alt="" />
          {/* <CodeSvg className="w-full h-[56vw] max-h-[250px] desk:max-h-[284px]" /> */}
        </div>
        <div className="flex flex-col gap-6 justify-center items-center max-w-[573px] desk:max-w-[445px] desk:text-left">
          <h3 className="font-dmDisplay text-secondarySanJuanBlue text-4xl font-medium tab:text-5xl desk:w-full">
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
      <div className="flex flex-col justify-between items-center desk:flex-row-reverse gap-12">
        <div className="desk:w-full w-full max-w-[363px] desk:max-w-[566px]">
          {/* <img className="w-full h-full" src={twoPhones} alt="" /> */}
          <TwoPhones className='rounded-[8%]'/>
          {/* <img src={simpleUi} alt="" /> */}
          {/* <SimpleUi/> */}
        </div>
        <div className="flex flex-col gap-6 justify-center items-center max-w-[573px] desk:text-left desk:max-w-[445px]">
          <h3 className="font-dmDisplay text-secondarySanJuanBlue text-4xl font-medium tab:text-5xl desk:w-full">
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