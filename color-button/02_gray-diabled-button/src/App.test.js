import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("disable button", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  console.log(button.style);
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("is color changed when disabled", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  fireEvent.click(button);
  fireEvent.click(checkbox);

  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
