import { render } from "@testing-library/react";
import { TempIcon } from "components";
const iconId = 'c01d';
const iconDesc = "Clear Sky";


test("should render TempIcon component", () => {
    const wrapper = render(
        <TempIcon
            icon={iconId}
            description={iconDesc}
        />
    );
    expect(wrapper.getByTestId("tempIconWrapper")).toBeInTheDocument();
});

test("should render the description in TempIcon component", () => {
    const wrapper = render(
        <TempIcon
            icon={iconId}
            description={iconDesc}
        />
    );
    expect(wrapper.getByText("CLEAR SKY")).toBeInTheDocument();
});

test("should render 2 children in the TempIcon component", () => {
    const wrapper = render(<TempIcon />);
    expect(wrapper.getByTestId("tempIconWrapper").children.length).toBe(2);
});

test("should render 5 children in the TempIcon component", () => {
    const wrapper = render(
        <TempIcon
            icon={iconId}
            description={iconDesc}
        />
    );
    expect(wrapper.getByTestId("tempIconImg").src).toBe(
        "https://www.weatherbit.io/static/img/icons/c01d.png"
    );
});
