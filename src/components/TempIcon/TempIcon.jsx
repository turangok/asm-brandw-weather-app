import React from 'react';
import {
  StyledIcon,
  StyledIconWrapper,
  StyledIconDesc,
} from './TempIcon.styles';
const path = process.env.REACT_APP_ICON_URL;

export const TempIcon = ({ icon, description }) => {
  return (
    <StyledIconWrapper data-testid="tempIconWrapper">
      <StyledIcon>
        <img
          data-testid="tempIconImg"
          src={`${path}${icon}.png`}
          className="rounded"
          alt={description}
        />
      </StyledIcon>
      <StyledIconDesc>{description?.toUpperCase()}</StyledIconDesc>
    </StyledIconWrapper>
  );
};
