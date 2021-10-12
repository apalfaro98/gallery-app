import React, { useEffect, useState } from 'react'
import { getResults } from '../helpers/getResults';
import PictureGridItem from './PictureGridItem';

const PictureGrid = ({ category }) => {

    const apiKey = '8800O5782N5enkrU598WG87oQ76XrjGMnSpFDNakcQc';

    const [images, setImages] = useState([]);

    useEffect(() => {
        getResults(apiKey, category)
            .then(setImages);
    }, [category]);

    return (
        <>
            {images.map(img =>
                <PictureGridItem
                    key={img.id}
                    {...img}
                />
            )}
        </>
    )
}

export default PictureGrid
