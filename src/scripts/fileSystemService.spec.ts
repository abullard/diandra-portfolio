import { fileSystemService } from './fileSystemService';
import { ImageModel } from '../components/useImages';
import { chance } from '../utils/setup-chance';
import fs from 'fs';

jest.mock('fs');
// const mockFs = fs as jest.Mocked<typeof fs>;

describe('fileSystemService', () => {
    let imageList: ImageModel[];

    beforeEach(() => {
        imageList = [chance.photoModel(), chance.photoModel()];
    });

    it('should read the data from images.json file', () => {
        JSON.parse = jest.fn().mockReturnValueOnce(imageList);

        const actual = fileSystemService.readImageFile();

        expect(actual[0].uri).toEqual(imageList[0].uri);
        expect(actual[0].title).toEqual(imageList[0].title);
        expect(actual[0].page).toEqual(imageList[0].page);
        expect(actual[0].category).toEqual(imageList[0].category);

        expect(actual[1].uri).toEqual(imageList[1].uri);
        expect(actual[1].title).toEqual(imageList[1].title);
        expect(actual[1].page).toEqual(imageList[1].page);
        expect(actual[1].category).toEqual(imageList[1].category);
    });

    it('should read the contents of the directory', () => {
        // AJB: write this test
        expect(true).toEqual(false);
    });
});
