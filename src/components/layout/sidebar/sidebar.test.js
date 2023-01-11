import { render, screen } from "@testing-library/react";
import SideBar from ".";

describe("Side Bar", () => {
  test("has hiddenButton and Export / Import Button", () => {
    render(<SideBar />);

    screen.getByText("Export");
    screen.getByText("Import");
    screen.getByTestId("hiddenButton");
  });
});
