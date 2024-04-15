import { render, screen } from "@testing-library/react";
import SearchableList from "./SearchableList";
import { describe } from "vitest";

describe("SearchableList component", () => {
  test("renders search input", () => {
    render(<SearchableList items={[]} itemKeyFn={(item) => item.id} />);
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });
});
