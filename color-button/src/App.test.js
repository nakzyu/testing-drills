import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // button turns blue when clicked
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton.textContent).toBe("Change to red");
});

/*
Create virutal DOM for argument JSX
Access virtual DOM via screen global

/learn react/i
regular expression
case insensitive (i)
cloud be string 'Learn React'
*/
