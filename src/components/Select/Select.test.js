import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Select from "./Select";

test("renders Select component", () => {
  render(
    <Select
      label="Time"
      placeholder="Escolha seu time"
      options={[
        { label: "Devops", value: "DEVOPS" },
        { label: "Programação", value: "PROGRAMACAO" },
      ]}
      value=""
      onChange={(e) => null}
    />
  );
  const select = screen.getByTestId("select-Time");
  expect(screen.getByTestId("select-container-Time")).toBeInTheDocument();
  expect(screen.getByTestId("select-label-Time")).toBeInTheDocument();
  expect(screen.getByTestId("select-option-Devops")).toBeInTheDocument();
  expect(select).toBeInTheDocument();
  screen.getByText(/Escolha seu time/i);
  expect(select.value).toBe("");
  fireEvent.select(select, { target: { value: "DEVOPS" } });
  expect(select.value).toBe("DEVOPS");
});
