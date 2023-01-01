import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

test("renders learn react link", () => {
  render(<Banner />);
  const banner = screen.getByTestId("banner");
  expect(banner).toBeInTheDocument();
});
