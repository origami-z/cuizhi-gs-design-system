import React from "react";
import styled from "styled-components";

import {
  borderTokens,
  colorRampsBoldTokens,
  colorRampsSubtleTokens,
  colorRampsTextBoldTokens,
  colorRampsTextSubtleTokens,
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

const getBackgroundColor = (props: Partial<IBadgeProps>) => {
  if (props.emphasis === "minimal") {
    return "transparent";
  } else if (props.emphasis === "subtle") {
    return colorRampsSubtleTokens[
      (props.color +
        "RampSubtleBackground") as keyof typeof colorRampsSubtleTokens
    ];
  } else if (props.emphasis === "bold") {
    return colorRampsBoldTokens[
      (props.color + "RampBoldBackground") as keyof typeof colorRampsBoldTokens
    ];
  }
};

const getTextColor = (props: Partial<IBadgeProps>) => {
  if (props.emphasis === "bold") {
    return colorRampsTextBoldTokens[
      (props.color + "RampBoldText") as keyof typeof colorRampsTextBoldTokens
    ];
  } else if (props.emphasis === "minimal" || props.emphasis === "subtle") {
    return colorRampsTextSubtleTokens[
      (props.color +
        "RampSubtleText") as keyof typeof colorRampsTextSubtleTokens
    ];
  }
};

const getBorderColor = (props: Partial<IBadgeProps>) => {
  if (props.emphasis === "minimal") {
    return borderTokens.borderModerate;
  } else {
    return "transparent";
  }
};

// Padding is 1px less than the spec, missing the border width
const StyledBadge = styled.div`
  padding: 3px 9px;
  background: ${(props: Partial<IBadgeProps>) => getBackgroundColor(props)};
  color: ${(props: Partial<IBadgeProps>) => getTextColor(props)};
  border-color: ${(props: Partial<IBadgeProps>) => getBorderColor(props)};
  border-width: 1px;
  border-style: solid;
  width: fit-content;
  border-radius: 2px;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
`;

export const Badge = (props: IBadgeProps) => {
  const { label, color = "gray", emphasis = "bold", ...restProps } = props;

  return (
    <StyledBadge color={color} emphasis={emphasis} {...restProps}>
      {label.toUpperCase()}
    </StyledBadge>
  );
};
