import { Theme } from "@radix-ui/themes";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("OrderStatusSelector", () => {
  const renderComponent = () => {
    render(
      <Theme>
        <OrderStatusSelector onChange={vi.fn()} />
      </Theme>
    );

    const button = screen.getByRole("combobox");
    return {
      button,
    };
  };

  it("should render New as the default value", () => {
    const { button } = renderComponent();
    expect(button).toHaveTextContent(/new/i);
  });

  it("should render correct status", async () => {
    const { button } = renderComponent();
    const user = await userEvent.setup();
    user.click(button);

    const options = await screen.findAllByRole("option");
    expect(options).toHaveLength(3);
  });
});

// red => green => refactor
