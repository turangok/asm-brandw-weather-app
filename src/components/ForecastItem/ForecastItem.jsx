import React from 'react';
import { TempIcon } from 'components';
import {
  StyledForecastItemWrapper,
  StyledForecastItemLeft,
  StyledDay,
  StyledTemp,
} from './ForecastItem.styles';
import moment from 'moment';

export const ForecastItem = ({ time, temp, iconId, description }) => {
  return (
    <StyledForecastItemWrapper data-testid="forecastItemWrapper">
      <StyledForecastItemLeft>
        <StyledDay>{moment(time).format('ddd').toLocaleUpperCase()}</StyledDay>
        <StyledTemp>{Math.round(temp)}&#xb0;</StyledTemp>
      </StyledForecastItemLeft>
      <TempIcon icon={iconId} description={description} />
    </StyledForecastItemWrapper>
  );
};
