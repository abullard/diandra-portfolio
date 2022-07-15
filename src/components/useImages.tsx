import { useEffect, useState } from 'react';
import { PhotoCategory } from '../scripts/generateJson';
import imageJson from '../assets/images.json';

export interface ImageModel {
    uri: string;
    title?: string;
    category: string;
    page: PhotoCategory;
}

const useImages = (): [ImageModel[] | undefined] => {
    const [images, setImages] = useState<ImageModel[] | undefined>(undefined);

    useEffect(() => {
        setImages(imageJson);
        console.log(images);
    }, []);

    return [images];
};

export default useImages;
