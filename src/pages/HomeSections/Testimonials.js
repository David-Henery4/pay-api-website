import React from 'react'
import {
  GoogleIcon,
  HewlettPackardIcon,
  MicrosoftIcon,
  NvidiaIcon,
  OracleIcon,
  TeslaIcon,
} from "../../assets";

const Testimonials = () => {
  return (
    <section className="bg-secondaryMirageBlue px-6 py-20">
      <div>
        <TeslaIcon />
        <MicrosoftIcon />
        <GoogleIcon />
        <HewlettPackardIcon />
        <NvidiaIcon />
        <OracleIcon />
      </div>
      <div>
        <div>
          <h2 className="text-[32px] leading-9 font-dmDisplay text-primaryWaterWhite">
            Who we work with
          </h2>
          <p>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.{" "}
          </p>
        </div>
        <button className="secondary-about-btn text-primaryWaterWhite">
          About Us
        </button>
      </div>
    </section>
  );
}

export default Testimonials