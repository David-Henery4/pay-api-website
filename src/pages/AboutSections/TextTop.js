import React from 'react'

const TextTop = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 text-center md:gap-16">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:w-full md:justify-start md:text-left md:gap-[10px]">
        <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue md:min-w-[223px] md:text-[32px]">
          Our Vision
        </h3>
        <p className="max-w-[511px] md:max-w-none">
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:w-full md:justify-start md:text-left md:gap-[10px]">
        <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue md:min-w-[223px] md:text-[32px]">
          Our Business
        </h3>
        <p className="max-w-[511px] md:max-w-none">
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.{" "}
        </p>
      </div>
    </div>
  );
}

export default TextTop