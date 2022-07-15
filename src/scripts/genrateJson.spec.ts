import { generateJson } from './generateJson';
import { fileSystemService } from './fileSystemService';
import { chance } from '../utils/setup-chance';

jest.mock('./fileSystemService');
const mockFileSystemService = fileSystemService as jest.Mocked<typeof fileSystemService>;

describe('generate_json', () => {
    let photography_photo_list: string[];
    let architecture_photo_list: string[];
    let art_photo_list: string[];

    beforeEach(() => {
        photography_photo_list = [chance.word()];
        architecture_photo_list = [chance.word()];
        art_photo_list = [chance.word()];
    });

    it('should read the images directories', async () => {
        mockFileSystemService.readdirAsync.mockResolvedValueOnce(photography_photo_list);
        mockFileSystemService.readdirAsync.mockResolvedValueOnce(architecture_photo_list);
        mockFileSystemService.readdirAsync.mockResolvedValueOnce(art_photo_list);

        await generateJson();

        expect(mockFileSystemService.readdirAsync).toHaveBeenNthCalledWith(1, '../assets/dynamic_photos/photography');
        expect(mockFileSystemService.readdirAsync).toHaveBeenNthCalledWith(2, '../assets/dynamic_photos/architecture');
        expect(mockFileSystemService.readdirAsync).toHaveBeenNthCalledWith(3, '../assets/dynamic_photos/art');
    });
});
