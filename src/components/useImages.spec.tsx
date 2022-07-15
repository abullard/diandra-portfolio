import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import useImages, { PhotoModel } from './useImages';
import { fileSystemService } from '../scripts/fileSystemService';
import { chance } from '../utils/setup-chance';

jest.mock('../scripts/fileSystemService');
const mockFsService = fileSystemService as jest.Mocked<typeof fileSystemService>;

describe('useImages hook', () => {
    let imageList: PhotoModel[];

    beforeEach(() => {
        imageList = [chance.photoModel(), chance.photoModel()];
        mockFsService.readImageFile.mockReturnValueOnce(imageList);
    });

    it('should read the images json file, and get a list of PhotoModels back', async () => {
        render(<TestWrapper />);

        await waitFor(async () => {
            expect(mockFsService.readImageFile).toHaveBeenCalledTimes(1);
            expect(screen.queryByText(imageList[0].title!)).toBeInTheDocument();
        });
    });

    const TestWrapper = () => {
        const [images] = useImages();

        return (
            <>
                {images?.map((i) => {
                    return <div key={i.uri}>{i.title}</div>;
                })}
            </>
        );
    };
});
