import React from 'react'
import { simpleUi, easyImplementation, SimpleUi, EasyImplementation } from "../../assets";

const Description = () => {
  return (
    <section className="col-start-2 col-end-12 text-center flex flex-col gap-20">
      <div className="flex flex-col justify-center items-center desk:flex-row">
        <div className="desk:w-1/2">
          <img src={easyImplementation} alt="" />
          {/* <EasyImplementation /> */}
        </div>
        <div className="flex flex-col gap-6 justify-center items-center max-w-[573px] mx-auto desk:max-w-[445px] desk:text-left">
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
      <div className="flex flex-col justify-center items-center desk:flex-row-reverse">
        <div className="desk:w-full">
          <img src={simpleUi} alt="" />
          {/* <SimpleUi/> */}
        </div>
        <div className="flex flex-col gap-6 justify-center items-center max-w-[573px] mx-auto desk:text-left">
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