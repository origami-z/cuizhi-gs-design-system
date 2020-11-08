import React from "react";
import styled from "styled-components";

import {
  colorRampsBoldTokens,
  colorRampsTextBoldTokens,
} from "../foundation/colors";

// To be shared with other components
export const EmphasisValues = ["bold", "subtle", "minimal"] as const;

export type Emphasis = typeof EmphasisValues[number];

export const ColorValues = [
  "gray",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "turquoise",
  "aqua",
  "blue",
  "ultramarine",
  "purple",
  "pink",
] as const;

export type Color = typeof ColorValues[number];

export const SizeValues = ["large", "medium", "small", "x-small"] as const;
export type Size = typeof SizeValues[number];
export const SizeShortHandValues = ["L", "M", "S", "XS"] as const;
export type SizeShortHand = typeof SizeShortHandValues[number];

export interface IBadgeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  emphasis?: Emphasis;
  color?: Color;
  size?: Size | SizeShortHand;
  label: string;
}

// function isValidColorRampsBoldTokens(
//   tokenName: string
// ): tokenName is keyof typeof colorRampsBoldTokens {
//   const colorName = tokenName.replace("RampBoldBackground", "");
//   return colorName in ColorValues;
// }

const StyledBadge = styled.div`
  padding: 6px 10px;
  background: ${(props: Partial<IBadgeProps>) =>
    colorRampsBoldTokens[
      (props.color + "RampBoldBackground") as keyof typeof colorRampsBoldTokens
    ]};
  color: ${(props: Partial<IBadgeProps>) =>
    colorRampsTextBoldTokens[
      (props.color + "RampBoldText") as keyof typeof colorRampsTextBoldTokens
    ]};
  width: fit-content;
  border-radius: 2px;
  display: inline-block;
`;

export const Badge = (props: IBadgeProps) => {
  const { label, color = "gray", ...restProps } = props;

  return (
    <StyledBadge color={color} {...restProps}>
      {label.toUpperCase()}
    </StyledBadge>
  );
};
