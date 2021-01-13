import { render } from "@testing-library/react";
import { ForecastItem } from "components";
import { currentMockData } from "config/mockData";

test("should render ForecastItem component", () => {
    const wrapper = render(
        <ForecastItem weather={currentMockData} index="3" />
    );
    expect(wrapper.getByTestId("forecastItemWrapper")).toBeInTheDocument();
});

test("should render the ForecastItem component with image", () => {
    const wrapper = render(
        <ForecastItem weather={currentMockData} index="3" />
    );
    expect(wrapper.getByTestId('tempIconImg')).toBeInTheDocument();
});

test("should render 5 children in the ForecastItem component", () => {
    const wrapper = render(
        <ForecastItem weather={currentMockData} index="5" />
    );
    expect(wrapper.getByTestId("forecastItemWrapper").children.length).toBe(2);
});
