import React from "react";
import styled from "styled-components";

import * as colors from "./colors";

export interface IColorDocsRowProps {
  color: string;
  name: string;
}

export const ColorDocsRow = (props: IColorDocsRowProps) => {
  const Container = styled.div`
    display: flex;
    align-items: flex-start;
  `;

  const ColorLabelsContainer = styled.div`
    flex: 0 0 30%;
    line-height: 20px;
    margin-top: 5px;
  `;

  const ColorName = styled.div`
    font-weight: 700;
    color: ${colors.textTokens.textPrimary};
  `;

  const SwatchOuterContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
  `;

  const SwatchInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    margin-bottom: 30px;
  `;

  const SwatchColor = styled.div`
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    height: 50px;
    margin-bottom: 5px;
    overflow: hidden;
    border-radius: 4px;
    background: ${props.color};
  `;

  const SwatchColorCode = styled.div`
    flex: 1;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    overflow: hidden;
    color: ${colors.textTokens.textSecondary};
  `;

  return (
    <Container>
      <ColorLabelsContainer>
        <ColorName>{props.name}</ColorName>
      </ColorLabelsContainer>
      <SwatchOuterContainer>
        <SwatchInnerContainer>
          <SwatchColor />
          <SwatchColorCode>{props.color}</SwatchColorCode>
        </SwatchInnerContainer>
      </SwatchOuterContainer>
    </Container>
  );
};
