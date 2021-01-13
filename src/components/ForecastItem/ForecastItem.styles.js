import styled from "styled-components";

export const StyledForecastItemWrapper = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.doveGrey};
  margin: 0.63rem 0;
  border-radius: 0.31rem;
  height: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.63rem 1.25rem 0.63rem 2.25rem;
  min-width: 18.13rem;

  @media (max-width: 28.13rem) {
    padding: 0.31rem 0.63rem 0.31rem 1.13rem;
  };
`
export const StyledForecastItemLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledDay = styled.div`
  margin-right: 3.75rem;
  width: 5rem;
  font-size: 2rem;
  @media (max-width: 28.13rem) {
    margin-right: 1.88rem;
  }
`;
export const StyledTemp = styled.div`
  font-size: 2.2rem;
`;
