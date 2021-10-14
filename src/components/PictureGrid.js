import React from 'react';
import { useFetch } from '../hooks/useFetch';
import PictureGridItem from './PictureGridItem';

const PictureGrid = ({ category }) => {

    const {
        data: images,
        loading,
        unableToConnect,
        notFound
    } = useFetch(category);

    return (
        <>
            {loading && <div className="problem-container--center">
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>}
            {unableToConnect && <div className="problem-container--center">
                <div>
                    <div className="connection__image"></div>
                    <p>Cannot connect to database</p>
                </div>
            </div>}
            {notFound && <div className="problem-container--center">
                <div>
                    <div className="found__image"></div>
                    <p>There is no images for this category</p>
                </div>
            </div>}

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
