import { render, screen } from "@testing-library/react";
import Collaborator from "./Collaborator";

test("renders Collaborator component", () => {
  render(<Collaborator name="John" occupation={"Programmer"} image={"http"} />);
  const collaborator = screen.getByTestId("collaborator-John");
  expect(collaborator).toBeInTheDocument();
});
