import { useEffect, useState } from 'react';
import { chance } from '../utils/setup-chance';
import { fileSystemService } from '../scripts/fileSystemService';

export interface PhotoModel {
    uri: string;
    title?: string;
    category: string;
    page: string;
}

const useImages = (): [PhotoModel[] | undefined] => {
    const [images, setImages] = useState<PhotoModel[] | undefined>(undefined);

    useEffect(() => {
        setImages(fileSystemService.readImageFile());
    }, []);

    return [images];
};

export default useImages;
