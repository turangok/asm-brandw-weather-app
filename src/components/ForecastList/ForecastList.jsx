import React from 'react';
import { StyledForecastListWrapper } from './ForecastList.styles';
import { ForecastItem } from 'components';

export const ForecastList = ({ foreCastList }) => {
  return (
    <StyledForecastListWrapper data-testid="forecastListWrapper">
      {foreCastList?.map((item, index) => (
        <ForecastItem
          key={`key-${index}`}
          time={item.datetime}
          temp={item.app_max_temp}
          iconId={item.weather.icon}
          description={item.weather.description}
        />
      ))}
    </StyledForecastListWrapper>
  );
};
