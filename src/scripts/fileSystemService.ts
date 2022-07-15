import fs from 'fs';
import path from 'path';
import { PhotoModel } from '../components/useImages';

export const fileSystemService = {
    readdirAsync: (path: string) => {
        return new Promise((resolve, reject) => {
            fs.readdir(path, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    },

    readImageFile: (): PhotoModel[] => {
        const filename = path.join('..', 'assets', 'dynamic_photos', 'images.json');
        return JSON.parse(filename) as PhotoModel[];
    },
};
