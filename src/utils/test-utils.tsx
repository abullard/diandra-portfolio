import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactElement } from 'react';
import Chance from 'chance';

export const chance = new Chance() as Chance.Chance;

const CustomRender = (component: ReactElement) => {
    return render(<Router>{component}</Router>);
};

export { CustomRender as render };
