import React from "react";
import PhotographyLink from "./PhotographyLink";
import { render } from "../test/test-utils.jsx";

describe("<Home />", function () {
  it("should render", function () {
    render(<PhotographyLink />);
  });
});
