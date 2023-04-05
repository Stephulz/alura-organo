import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const linkElement = screen.getByTestId("banner");
  expect(linkElement).toBeInTheDocument();

  // TODO: remove temp TextInput test after creating other components
  const inputName = screen.getByTestId("text-input-Nome");
  expect(screen.getByTestId("text-input-container-Nome")).toBeInTheDocument();
  expect(screen.getByTestId("text-input-label-Nome")).toBeInTheDocument();
  expect(inputName).toBeInTheDocument();
  fireEvent.change(inputName, { target: { value: "test Name" } });
  expect(inputName.value).toBe("test Name");
  screen.queryByPlaceholderText(/Digite seu nome/i);

  const inputOccupation = screen.getByTestId("text-input-Cargo");
  expect(screen.getByTestId("text-input-container-Cargo")).toBeInTheDocument();
  expect(screen.getByTestId("text-input-label-Cargo")).toBeInTheDocument();
  expect(inputOccupation).toBeInTheDocument();
  fireEvent.change(inputOccupation, { target: { value: "test Occupation" } });
  expect(inputOccupation.value).toBe("test Occupation");
  screen.queryByPlaceholderText(/Digite seu cargo/i);

  const inputImage = screen.getByTestId("text-input-Imagem");
  expect(screen.getByTestId("text-input-container-Imagem")).toBeInTheDocument();
  expect(screen.getByTestId("text-input-label-Imagem")).toBeInTheDocument();
  expect(inputImage).toBeInTheDocument();
  fireEvent.change(inputImage, { target: { value: "test Image" } });
  expect(inputImage.value).toBe("test Image");
  screen.queryByPlaceholderText(/Informe o endereço da imagem/i);

  const button = screen.getByTestId("button-Criar Card");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});
