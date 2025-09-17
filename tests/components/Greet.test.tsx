import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render hello and name when name is provided", () => {
    render(<Greet name="ali" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
