import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";

test("renders TextInput component", () => {
  render(
    <Form
      name="create-colaborador"
      title="Preencha os dados para criar o card do colaborador"
    />
  );
  expect(
    screen.getByTestId("form-create-colaborador-section")
  ).toBeInTheDocument();
  expect(
    screen.getByTestId("form-create-colaborador-title")
  ).toBeInTheDocument();
  expect(screen.getByTestId("form-create-colaborador")).toBeInTheDocument();
});
