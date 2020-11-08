import React from "react";
import styled from "styled-components";

const StyledBadgeStoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BadgeStoryContainer = (props: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledBadgeStoryContainer>
      <h3>{props.heading}</h3>
      {props.children}
    </StyledBadgeStoryContainer>
  );
};

export const StyledBadgeContainer = styled.div`
  margin: 8px 0px;
`;
