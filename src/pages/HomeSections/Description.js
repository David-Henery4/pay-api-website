import React from 'react'
import { simpleUi, easyImplementation } from "../../assets";

const Description = () => {
  return (
    <section className="col-start-2 col-end-12 text-center flex flex-col gap-20">
      <div className="grid gap-12">
        <div>
          <img src={easyImplementation} alt="code-example" />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <h3 className="font-dmDisplay text-secondarySanJuanBlue text-4xl font-medium tab:text-5xl">
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
      <div className="grid gap-12">
        <div>
          <img src={simpleUi} alt="code-example" />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <h3 className="font-dmDisplay text-secondarySanJuanBlue text-4xl font-medium tab:text-5xl">
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