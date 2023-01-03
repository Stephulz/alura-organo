import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

test("renders Banner component", () => {
  render(<Banner />);
  const banner = screen.getByTestId("banner");
  expect(banner).toBeInTheDocument();
});
