import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe } from "vitest";

describe("App component", () => {
  test("renders main section with Accordion and SearchableList", () => {
    // Arrange: Render the App component
    render(<App />);

    // Act: Nothing to do here since we are just rendering the component

    // Assert: Check if the main section, Accordion, and SearchableList are rendered
    const mainSection = screen.getByRole("main");
    expect(mainSection).toBeInTheDocument();
  });
});
