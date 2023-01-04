import { cloneElement } from "react";
import { ReactComponent as BgPattern } from "./shared/desktop/bg-pattern-circle.svg";

const BgPatternWrapper = (props) => {
    const svg = (
      <svg
        viewBox="-5 240 790 300"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <circle id={props.idone} cx="390" cy="390" r="390" />
          <circle id={props.idtwo} cx="390" cy="390" r="390" />
        </defs>
        <g fill="#36536B" fillRule="evenodd" opacity=".15">
          <use xlinkHref={`#${props.idone}`} />
          <use xlinkHref={`#${props.idtwo}`} />
        </g>
      </svg>
    );
  const newProps = { ...props, key: props.id };
  return cloneElement(svg, newProps);
};

export default BgPatternWrapper;
