import React from "react";
import { screen } from "@testing-library/react";
import Home from "./Home";
import { render } from "../test/test-utils.jsx";

describe("<Home />", function () {
  it("should render", function () {
    render(<Home />);

    const link = screen.getByRole("link", { name: "go-to-photography" });
    expect(link).toHaveAttribute("href", "/photography");
  });
});
