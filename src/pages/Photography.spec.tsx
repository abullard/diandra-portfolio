import React from 'react';
import { render } from '../utils/test-utils';
import { Photography } from './Photography';
import { screen, waitFor } from '@testing-library/react';
import { chance } from '../utils/setup-chance';
import { ImageModel } from '../components/useImages';

jest.mock('../assets/images.json', () => ({}));

describe('<Photography />', () => {
    it('should render', () => {
        render(<Photography />);

        expect(screen.getByText('Photography')).toBeInTheDocument();
    });

    it('should read list of images from json', async () => {
        render(<Photography />);

        await waitFor(() => {
            expect(mockFsService.readImageFile).toHaveBeenCalled();
            expect(screen.getByAltText(imageList[0].title!)).toBeInTheDocument();
        });
    });
});
