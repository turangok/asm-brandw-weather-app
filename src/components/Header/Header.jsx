import { useState } from 'react';
import { TYPES } from 'config/constants';
import { useHistory } from 'react-router-dom';

import { Button } from 'components';
import {
  StyledHeaderWrapper,
  StyledHeaderTextWrapper,
  StyledSelect,
} from './Header.styles';

import { useDispatch } from 'react-redux';
import { fetchCurrent, fetchDaily } from 'store/actions/weatherActions';

export const Header = ({ cityName, temp }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedCity, setSelectedCity] = useState({
    label: 'Sydney',
    value: 'Sydney',
    country: 'AU',
  });

  const handleOnChange = (data) => {
    setSelectedCity(data);
  };

  dispatch(
    fetchCurrent({ city: selectedCity.value, country: selectedCity.country })
  );
  dispatch(
    fetchDaily({ city: selectedCity.value, country: selectedCity.country })
  );

  return (
    <StyledHeaderWrapper data-testid="headerWrapper">
      <StyledHeaderTextWrapper>
        <StyledSelect
          options={TYPES}
          value={selectedCity}
          onChange={handleOnChange}
        />
        <Button type="submit" onClick={() => history.push('/')}>
          Current Weather
        </Button>
        <Button type="submit" onClick={() => history.push('/daily')}>
          16 Day Forecast
        </Button>
      </StyledHeaderTextWrapper>
    </StyledHeaderWrapper>
  );
};
