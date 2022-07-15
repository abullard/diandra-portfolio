import React from 'react';
import { render } from '../utils/test-utils';
import { Photography } from './Photography';
import { screen } from '@testing-library/react';
import { fileSystemService } from '../scripts/fileSystemService';
import { chance } from '../utils/setup-chance';
import { PhotoModel } from '../components/useImages';

jest.mock('../scripts/fileSystemService');
const mockFsService = fileSystemService as jest.Mocked<typeof fileSystemService>;

describe('<Photography />', () => {
    let imageList: PhotoModel[];

    beforeEach(() => {
        imageList = [chance.photoModel()];
        mockFsService.readdirAsync.mockResolvedValue(imageList);
    });

    it('should render', () => {
        render(<Photography />);

        expect(screen.getByText('Photography')).toBeInTheDocument();
    });

    it('should read list of images from json', () => {
        render(<Photography />);

        console.log(imageList);
        expect(mockFsService.readdirAsync).toHaveBeenCalled();
        // expect(screen.getByAltText('')).toBeInTheDocument();
    });
});
