import fs from "fs";

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
};
