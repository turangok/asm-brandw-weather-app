import styled from "styled-components";
import Select from 'react-select';


export const StyledHeaderWrapper = styled.div`
  border-radius: 0.31rem;
  padding: 0.3125rem;
  background-color: ${(p) => p.theme.darkGrey};
  min-width: 19.38rem;
  min-height: 5rem;
  width: 100%
`;

export const StyledHeaderTextWrapper = styled.div`
  padding: 0 0.63rem;
  margin-top: 0.625rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 19.38rem;
`;

export const StyledCityName = styled.div`
  font-size: 2rem;
  letter-spacing: -0.02rem;
  font-stretch: ultra-expanded;

  @media (max-width: 28.13rem) {
    font-size: 1.5rem;
  }
`;


export const StyledTemp = styled.div`
  font-size: 2rem;
  letter-spacing: -0.02rem;
  font-stretch: ultra-expanded;

  @media (max-width: 28.13rem) {
    font-size: 1.5rem;
  }
`;


export const StyledSelect = styled(Select)`
  min-width: 7rem;
  margin-right: 1.25rem;
  font-size: 0.8rem; 
`;