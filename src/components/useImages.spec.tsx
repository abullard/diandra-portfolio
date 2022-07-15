import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import useImages, { ImageModel } from './useImages';
import { chance } from '../utils/setup-chance';

describe('useImages()', () => {
    let imageList: ImageModel[];

    beforeEach(() => {
        imageList = [chance.photoModel(), chance.photoModel()];
        jest.mock('../assets/images.json');
    });

    it('should read the images json file, and get a list of PhotoModels back', async () => {
        render(<TestWrapper />);

        await waitFor(async () => {
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
