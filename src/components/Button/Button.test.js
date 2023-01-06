import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders Button component", () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Criar Card</Button>);
  const button = screen.getByTestId("button-Criar Card");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1)
});
