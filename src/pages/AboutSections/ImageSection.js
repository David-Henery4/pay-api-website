import React from 'react'
import { teamImgDesk, teamImgMob, teamImgTab } from "../../assets";

const ImageSection = () => {
  return (
    <div className="col-start-1 col-end-13 pb-12 md:pb-16 lg:pb-[72px]">
      <picture>
        <source srcSet={`${teamImgDesk} 2x`} media="(min-width:64em)" />
        <source srcSet={`${teamImgTab} 2x`} media="(min-width:31.25em)" />
        <img
          srcSet={`${teamImgMob} 2x`}
          className="max-w-full w-full object-center object-cover"
          src={`${teamImgMob}`}
          alt="team-members"
        />
      </picture>
    </div>
  );
}

export default ImageSection