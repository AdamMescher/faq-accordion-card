import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import App from "./App";

expect.extend(toHaveNoViolations);

describe("App Component", () => {
  it("Should Render without errors", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
    expect(screen.getByText(/faq/i)).toBeInTheDocument();
  });
  it("Should render without axe a11y errors", async () => {
    render(<App />);
    expect(await axe(screen.getByTestId("app"))).toHaveNoViolations();
  });
});
