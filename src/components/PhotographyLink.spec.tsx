import React from "react";
import PhotographyLink from "./PhotographyLink";
import { render } from "../utils/test-utils.js";

describe("<Home />", function () {
  it("should render", function () {
    render(<PhotographyLink />);
  });
});
