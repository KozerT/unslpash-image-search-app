import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe } from "vitest";

describe("App component", () => {
  test("renders main section", () => {
    render(<App />);
    const mainSection = screen.getByRole("main");
    expect(mainSection).toBeInTheDocument();
  });

  test("renders h2 heading", () => {
    const { getByRole } = render(<App />);
    const headingElement = getByRole("heading", {
      name: /Main Section/i,
      level: 2,
    });
    expect(headingElement).toBeInTheDocument;
  });

  test("renders Accordion component with the class 'accordion' ", () => {
    const { container } = render(<App />);
    const accordionComponent = container.querySelector(".accordion");
    expect(accordionComponent).toBeInTheDocument();
  });

  test("renders multiple AccordionItems with the class 'accordion-item' ", () => {
    const { container } = render(<App />);
    const accordionItems = container.querySelectorAll(".accordion-item");

    expect(accordionItems.length).toBeGreaterThan(1);

    accordionItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  test("renders multiple Accordion Item Titles with the class 'accordion-item-title' ", () => {
    const { container } = render(<App />);
    const accordionItemTitles = container.querySelectorAll(
      ".accordion-item-title"
    );

    accordionItemTitles.forEach((title) => {
      expect(title).toBeInTheDocument();
    });
  });

  test("renders multiple 'Accordion Content' component", () => {
    const { container } = render(<App />);
    const articleElements = container.querySelectorAll("accordion-content");
    articleElements.forEach((article) => {
      expect(article).toBeInTheDocument();
    });
  });

  test("renders 2 SearchableList components", () => {
    render(<App />);
    const searchComponents = screen.getAllByRole("searchbox");
    expect(searchComponents.length).toBe(2);
  });

  test("renders Place component inside SearchableList", () => {
    render(<App />);
    const placeComponents = screen.getAllByRole("article");
    expect(placeComponents.length).toBeGreaterThan(0);
  });
});
