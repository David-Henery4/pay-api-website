import React from 'react'
import { teamImgDesk, teamImgMob, teamImgTab, BgPatternFive } from "../../assets";
import BgPatternWrapper from '../../assets/cloneBgPattern';

const ImageSection = () => {
  return (
    <div className="w-full relative col-start-1 col-end-13 pb-12 md:pb-16 lg:pb-[72px]">
      <BgPatternFive
        className="hidden pointer-events-none w-[780px] h-[780px] absolute -left-[520px] -top-[140px] xl:block"
      />
      <picture>
        <source srcSet={`${teamImgDesk} 2x`} media="(min-width:64em)" />
        <source srcSet={`${teamImgTab} 2x`} media="(min-width:31.25em)" />
        <img
          srcSet={`${teamImgMob} 2x`}
          className="max-w-full w-full object-center object-cover relative z-10"
          src={`${teamImgMob}`}
          alt="team-members"
        />
      </picture>
    </div>
  );
}

export default ImageSection