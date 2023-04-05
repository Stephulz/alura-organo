import { render, screen } from "@testing-library/react";
import Team from "./Team";

test("renders Team component", () => {
  render(<Team name={"Programmers"} />);
  const team = screen.getByTestId("team-Programmers");
  expect(team).toBeInTheDocument();
});
