import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render name", () => {
    render(
      <UserAccount
        user={{
          id: 1,
          name: "Ali",
        }}
      />
    );

    const name = screen.getByText("Ali");

    expect(name).toBeInTheDocument();
  });

  it("should render edit button when user is admin", () => {
    render(
      <UserAccount
        user={{
          id: 1,
          name: "Ali",
          isAdmin: true,
        }}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should not render edit button when user is not admin", () => {
    render(
      <UserAccount
        user={{
          id: 1,
          name: "Ali",
        }}
      />
    );

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
