import moment from 'moment';
import { Header } from 'components';
import { ForecastItem } from 'components';
import {
  StyledCurrentWeatherWrapper,
  StyledTitle,
} from './CurrentWeather.styles';
import { useSelector } from 'react-redux';

const CurrentWeather = () => {
  const weatherList = [];
  const currentResults = useSelector((state) => {
    return state?.weatherResults?.currentResults;
  });
  const weather = currentResults?.data && currentResults?.data[0];

  return currentResults?.data ? (
    <StyledCurrentWeatherWrapper data-testid="CurrentWeatherWrapper">
      <StyledTitle>{currentResults.data[0].city_name}</StyledTitle>
      <StyledTitle>Current Weather</StyledTitle>
      {weatherList?.city && (
        <Header
          cityName={weatherList?.city?.name}
          temp={weatherList?.currentWeather?.temp}
          time={moment(weatherList?.currentWeather?.time).format('HH:mm')}
        />
      )}
      <ForecastItem
        time={weather.ob_time}
        temp={weather.app_temp}
        iconId={weather.weather.icon}
        description={weather.weather.description}
      />
    </StyledCurrentWeatherWrapper>
  ) : null;
};
export default CurrentWeather;
