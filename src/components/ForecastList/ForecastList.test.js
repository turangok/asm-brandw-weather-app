import { render } from "@testing-library/react";
import { ForecastList } from "components";
import { dailyMockData } from "config/mockData";

test("should render ForecastList component", () => {
    const wrapper = render(<ForecastList />);
    expect(wrapper.getByTestId("forecastListWrapper")).toBeInTheDocument();
});

test("should render the ForecastList component with zero child", () => {
    const wrapper = render(<ForecastList />);
    expect(wrapper.getByTestId("forecastListWrapper").children.length).toBe(0);
});

test("should render 16 children in the ForecastList component", () => {
    const wrapper = render(<ForecastList foreCastList={dailyMockData} />);
    expect(wrapper.getByTestId("forecastListWrapper").children.length).toBe(16);
});
