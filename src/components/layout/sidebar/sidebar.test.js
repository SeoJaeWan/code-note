import { fireEvent, render, screen } from "@testing-library/react";
import SideBar from ".";

describe("Side Bar", () => {
  test("has hidden / show Button and Export / Import Button", () => {
    render(<SideBar />);

    screen.getByText("Export");
    screen.getByText("Import");
    screen.getByTestId("hiddenButton");
    screen.getByTestId("showButton");
  });

  test("toggle sideBar", () => {
    render(<SideBar />);

    const hiddenButton = screen.getByTestId("hiddenButton");
    const showButton = screen.getByTestId("showButton");

    expect(hiddenButton).toHaveStyle("display: flex");
    expect(showButton).toHaveStyle("display: none");

    fireEvent.click(hiddenButton);

    expect(hiddenButton).toHaveStyle("display: none");
    expect(showButton).toHaveStyle("display: flex");
  });
});
