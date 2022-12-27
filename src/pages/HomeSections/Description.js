import React from 'react'
import { simpleUi, easyImplementation } from "../../assets";

const Description = () => {
  return (
    <section>
      <div>
        <div>
          <img src={easyImplementation} alt="code-example" />
        </div>
        <div>
          <h3 className="font-dmDisplay text-secondarySanJuanBlue text-4xl font-medium">
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
      <div>
        <div>
          <img src={simpleUi} alt="code-example" />
        </div>
        <div>
          <h3 className="font-dmDisplay text-secondarySanJuanBlue text-4xl font-medium">
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