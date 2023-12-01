import { render, screen } from "@testing-library/react";
import Home from "./home";

test("renders home page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
