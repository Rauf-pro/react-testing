import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// Test suit grouping
describe("Greet component", () => {
  it("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});

// Or you can use the test suit grouping like this
describe("Nested", () => {
  it("renders a name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText("Hello John");
    expect(textElement).toBeInTheDocument();
  });
});
