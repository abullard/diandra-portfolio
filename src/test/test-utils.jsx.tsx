import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactElement } from "react";

const CustomRender = (component: ReactElement) => {
  return render(<Router>{component}</Router>);
};

export { CustomRender as render };
