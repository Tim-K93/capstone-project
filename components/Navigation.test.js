import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Navigation from "./Navigation";

test("renders navigation", () => {
  const { getByLabelText } = render(<Navigation />);

  const linkHome = getByLabelText("Home");
  expect(linkHome).toBeInTheDocument();

  const linkCreateCards = getByLabelText("Create Cards");
  expect(linkCreateCards).toBeInTheDocument();

  const linkAllCards = getByLabelText("All Cards");
  expect(linkAllCards).toBeInTheDocument();
});
