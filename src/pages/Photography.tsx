import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import useImages from '../components/useImages';

export enum PhotoCategory {
    Photography,
    Architecture,
    Art,
}

export const Photography = () => {
    const [images] = useImages();

    return (
        <div>
            <h1>Photography</h1>
            {/*<ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={200}>*/}
            {/*    {images.map((photo: photoModel) => (*/}
            {/*        <ImageListItem key={photo.uri}>*/}
            {/*            <img src={`${photo.uri}`} srcSet={`${photo.uri}`} alt={photo.title} loading="lazy" />*/}
            {/*        </ImageListItem>*/}
            {/*    ))}*/}
            {/*</ImageList>*/}
        </div>
    );
};
