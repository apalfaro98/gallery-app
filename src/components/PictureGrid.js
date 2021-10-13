import React from 'react';
import { useFetch } from '../hooks/useFetch';
import PictureGridItem from './PictureGridItem';

const PictureGrid = ({ category }) => {

    const { data: images, loading } = useFetch(category);

    return (
        <>
            {loading && <p>Loading...</p>}
            <ol className="picture-grid">
                {images.map(img =>
                    <PictureGridItem
                        key={img.id}
                        {...img}
                    />
                )}
            </ol>
        </>
    )
}

export default PictureGrid
