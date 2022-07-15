import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import useImages, { ImageModel } from '../components/useImages';
import { PhotoCategory } from '../scripts/generateJson';

export const Photography = () => {
    const [images] = useImages();

    console.log(images);

    const photographyImages = images ? images?.filter((i) => i.page === PhotoCategory.Photography) : [];

    return (
        <div>
            <h1>Photography</h1>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={200}>
                {photographyImages.map((photo: ImageModel) => (
                    <ImageListItem key={photo.uri}>
                        <img src={`${photo.uri}`} srcSet={`${photo.uri}`} alt={photo.title} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};
