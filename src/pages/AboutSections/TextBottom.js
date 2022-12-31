import React from 'react'

const TextBottom = () => {
  return (
    <section className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-12 text-center pt-12 md:max-w-[920px] md:mx-auto md:gap-16 md:pb-16 lg:pb-[72px]">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:w-full md:justify-start md:text-left md:gap-[10px]">
        <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue md:min-w-[223px] md:text-[32px]">
          The Culture
        </h3>
        <p className="max-w-[511px] md:max-w-none">
          We strongly believe there's always an opportunity to learn from each
          other outside of day-to-day work, whether it's company-wide offsites,
          internal hackathons, or co-worker meetups. We always value cross-team
          collaboration and diversity of thought, no matter the job title.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:w-full md:justify-start md:text-left md:gap-[10px]">
        <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue md:min-w-[223px] md:text-[32px]">
          The People
        </h3>
        <p className="max-w-[511px] md:max-w-none">
          We're all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </div>
    </section>
  );
}

export default TextBottom