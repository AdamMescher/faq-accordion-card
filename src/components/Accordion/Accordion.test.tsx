import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Accordion from "./Accordion";

expect.extend(toHaveNoViolations);

describe("Accordion Component", () => {
  it("Should render without errors", () => {
    render(<Accordion />);
    expect(screen.getByText(/faq/i)).toBeInTheDocument();
  });
  it("Should render without axe a11y errors", async () => {
    render(<Accordion />);
    expect(await axe(screen.getByText(/faq/i))).toHaveNoViolations();
  });
});
