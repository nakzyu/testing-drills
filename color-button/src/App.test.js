import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});

/*
Create virutal DOM for argument JSX
Access virtual DOM via screen global

/learn react/i
regular expression
case insensitive (i)
cloud be string 'Learn React'
*/
