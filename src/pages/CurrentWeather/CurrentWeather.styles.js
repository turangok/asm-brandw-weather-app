import styled from "styled-components";

export const StyledCurrentWeatherWrapper = styled.div`
  border-radius: 0.31rem;
  margin: 1.25rem 0;
  width: 100%;
  min-width: 19.38rem;
  min-height: 55rem;
  color: ${(p) => p.theme.white};
  background-color: ${(p) => p.theme.black};
  padding : 0.63rem;

  @media (max-width: 28.13rem) {
    margin: 0.31rem 0;
  }
`;

export const StyledTitle = styled.h3`
  color : ${(p) => p.theme.white};
  text-align : center;
  padding: 0.63rem; 
`