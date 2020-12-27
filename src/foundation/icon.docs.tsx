import React from "react";
import styled from "styled-components";

import { iconTokens } from "./colors";

export interface IIconDocsWrapperProps
  extends React.HTMLAttributes<HTMLDivElement> {
  fontSize?: string | number;
  /**
   * One of `colors.iconTokens`
   */
  iconColor?: keyof typeof iconTokens;
}

const IconStyler = styled.div`
  .material-icons {
    color: ${(props: IIconDocsWrapperProps) =>
      props.iconColor ? iconTokens[props.iconColor] : iconTokens.iconPrimary};
    font-size: ${(props: IIconDocsWrapperProps) => props.fontSize || "36px"};
  }
`;

export const IconDocsWrapper = (props: IIconDocsWrapperProps) => {
  return <IconStyler {...props}></IconStyler>;
};
