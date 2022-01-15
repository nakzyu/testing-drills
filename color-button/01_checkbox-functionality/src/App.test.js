import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("en/disable checkbox", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  // eslint-disable-next-line jest/valid-expect
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});

test("set button status depending on checkbox checked", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");
  expect(button).not.toBeEnabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
