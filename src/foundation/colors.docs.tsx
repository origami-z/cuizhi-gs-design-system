import React from "react";
import "./colors.docs.css";

export interface IColorDocsRowProps {
  tokenName: string;
}

export const ColorDocsRow = (props: IColorDocsRowProps) => {
  return (
    <div className="container">
      <div className="colorLabelsContainer">
        <div className="colorName">{props.tokenName}</div>
      </div>
      <div className="swatchOuterContainer">
        <div className="swatchInnerContainer">
          <div
            className="swatchColor"
            style={{ backgroundColor: `var(${props.tokenName})` }}
          />
          {/* <div className="swatchColorCode">{props.color}</div> */}
        </div>
      </div>
    </div>
  );
};
