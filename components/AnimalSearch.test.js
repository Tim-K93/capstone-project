import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import AnimalSearch from "./AnimalSearch";

test("renders a searchbar", () => {
  const mockOnSearch = jest.fn();
  const { getByLabelText } = render(<AnimalSearch onSearch={mockOnSearch} />);

  const speciesSearch = getByLabelText("searchSpecies");
  expect(speciesSearch).toBeInTheDocument();
});
