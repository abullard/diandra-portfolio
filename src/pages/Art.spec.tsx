import React from 'react';
import { render, screen } from '@testing-library/react';
import Art from './Art';

describe('<Art />', () => {
    it('should render', () => {
        // AJB: need to do this still
        render(<Art />);

        expect(screen.getByText('Art')).toBeInTheDocument();
    });
});
