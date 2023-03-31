import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Form from "./Form.js";

test("Form is rendered", () => {
  const { getByText, getByPlaceholderText, getByRole } = render(<Form />);
  const headline = getByText("Create a new profile");
  const nameInput = getByPlaceholderText("Name");
  const ageInput = getByPlaceholderText("Age");
  const colorInput = getByPlaceholderText("color");
  const ownerInput = getByPlaceholderText("Owners");
  const submitButton = getByRole("button");
  expect(headline).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(ageInput).toBeInTheDocument();
  expect(colorInput).toBeInTheDocument();
  expect(ownerInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});
