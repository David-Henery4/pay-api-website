import React from 'react'

const StatsSection = () => {
  return (
    <section className="py-4 border-y border-y-secondarySanJuanBlue/25 col-start-2 col-end-12 flex flex-col justify-center items-center gap-8 md:flex-row md:gap-[10px] md:border-y-0 lg:gap-[30px]">
      <div className="grid place-items-center md:w-full md:justify-items-start md:border-y md:border-y-secondarySanJuanBlue/25 md:py-4">
        <h4>Team Members</h4>
        <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
          300+
        </p>
      </div>
      <div className="grid place-items-center md:w-full md:justify-items-start md:border-y md:border-y-secondarySanJuanBlue/25 md:py-4">
        <h4>Offices in the US</h4>
        <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
          3
        </p>
      </div>
      <div className="grid place-items-center md:w-full md:justify-items-start md:border-y md:border-y-secondarySanJuanBlue/25 md:py-4">
        <h4>Transactions analyzed</h4>
        <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
          10M+
        </p>
      </div>
    </section>
  );
}

export default StatsSection