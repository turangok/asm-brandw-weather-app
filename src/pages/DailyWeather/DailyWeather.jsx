import { ForecastList } from 'components';
import { StyledDailyWeatherWrapper, StyledTitle } from './DailyWeather.styles';
import { useSelector } from 'react-redux';

const DailyWeather = () => {
  const dailyResults = useSelector((state) => {
    return state?.weatherResults?.dailyResults;
  });
  const weatherList = dailyResults?.data;
  return (
    <StyledDailyWeatherWrapper data-testid="DailyWeatherWrapper">
      <StyledTitle>{dailyResults?.city_name}</StyledTitle>
      <StyledTitle>{weatherList?.length} Day Weather Forecast</StyledTitle>
      <ForecastList foreCastList={weatherList} />
    </StyledDailyWeatherWrapper>
  );
};
export default DailyWeather;
