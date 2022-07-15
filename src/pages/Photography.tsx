import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

export interface photoModel {
    uri: string;
    title?: string;
}

const Photography = () => {
    const photo1: photoModel = {
        uri: '',
        title: '',
    };
    const photos: photoModel[] = [photo1];

    return (
        <div>
            <h1>Photography</h1>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={200}>
                {photos.map((photo: photoModel) => (
                    <ImageListItem key={photo.uri}>
                        <img src={`${photo.uri}`} srcSet={`${photo.uri}`} alt={photo.title} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default Photography;
