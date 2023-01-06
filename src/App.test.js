import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const linkElement = screen.getByTestId("banner");
  expect(linkElement).toBeInTheDocument();

  // TODO: remove temp TextInput test after creating other components
  const inputNome = screen.getByTestId("text-input-Nome");
  expect(screen.getByTestId("text-input-container-Nome")).toBeInTheDocument();
  expect(screen.getByTestId("text-input-label-Nome")).toBeInTheDocument();
  expect(inputNome).toBeInTheDocument();
  fireEvent.change(inputNome, { target: { value: "test nome" } });
  expect(inputNome.value).toBe("test nome");
  screen.queryByPlaceholderText(/Digite seu nome/i);

  const inputCargo = screen.getByTestId("text-input-Cargo");
  expect(screen.getByTestId("text-input-container-Cargo")).toBeInTheDocument();
  expect(screen.getByTestId("text-input-label-Cargo")).toBeInTheDocument();
  expect(inputCargo).toBeInTheDocument();
  fireEvent.change(inputCargo, { target: { value: "test cargo" } });
  expect(inputCargo.value).toBe("test cargo");
  screen.queryByPlaceholderText(/Digite seu cargo/i);

  const inputImagem = screen.getByTestId("text-input-Imagem");
  expect(screen.getByTestId("text-input-container-Imagem")).toBeInTheDocument();
  expect(screen.getByTestId("text-input-label-Imagem")).toBeInTheDocument();
  expect(inputImagem).toBeInTheDocument();
  fireEvent.change(inputImagem, { target: { value: "test imagem" } });
  expect(inputImagem.value).toBe("test imagem");
  screen.queryByPlaceholderText(/Informe o endereço da imagem/i);

  const button = screen.getByTestId("button-Criar Card");
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});
