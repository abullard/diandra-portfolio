const fs = require('fs');
import path from 'path';
import { ImageModel } from '../components/useImages';

export const fileSystemService = {
    readdirAsync: (path: string) => {
        return new Promise((resolve, reject) => {
            resolve(null);
            //         fs.readdir(path, (err: any, results: string[]) => {
            //             if (err) {
            //                 reject(err);
            //             } else {
            //                 resolve(results);
            //             }
            //         });
        });
    },
};
