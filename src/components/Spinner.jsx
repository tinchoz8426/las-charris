import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";

const Spinner = () => {
  
    const spinner = css`
    display: block;
    text-align: center;
    margin: 2rem 1rem;
  `;

  return (
    <div>
      <BeatLoader css={spinner} />
    </div>
  );
};

export default Spinner;
