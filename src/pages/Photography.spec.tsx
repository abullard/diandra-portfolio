import React from "react";
import { render } from "../utils/test-utils";
import Photography from "./Photography";
import { screen } from "@testing-library/react";

describe("<Photography />", () => {
  it("should render", () => {
    render(<Photography />);
    expect(screen.getByText("Photography")).toBeInTheDocument();
  });
});
