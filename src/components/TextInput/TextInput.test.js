import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";

test("renders TextInput component", () => {
  render(<TextInput label="Nome" placeholder="Digite seu nome" />);
  const input = screen.getByTestId("text-input-Nome");
  expect(screen.getByTestId("text-input-container-Nome")).toBeInTheDocument();
  expect(screen.getByTestId("text-input-label-Nome")).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "test" } });
  expect(input.value).toBe("test");
  screen.getByPlaceholderText(/Digite seu nome/i);
});
