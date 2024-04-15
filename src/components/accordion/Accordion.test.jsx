import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion";
import { describe } from "vitest";

describe("Accordion Component", () => {
  test("renders without errors", () => {
    render(<Accordion />);
    const accordionElement = screen.getByRole("list");
    expect(accordionElement).toBeInTheDocument();
  });

  test("integrates correctly with AccordionItem, AccordionTitle, and AccordionContent", () => {
    render(
      <Accordion>
        <Accordion.Item id="test">
          <Accordion.Title>Title</Accordion.Title>
          <Accordion.Content>Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    const titleElement = screen.getByText("Title");
    const contentElement = screen.getByText("Content");
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
