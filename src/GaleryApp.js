import React, { useState } from 'react';
import NewCategory from './components/NewCategory';
import PictureGrid from './components/PictureGrid';

const GaleryApp = () => {

    const [category, setCategory] = useState('');

    return (
        <div className="container">
            <h2 className="title">Gallery</h2>
            <NewCategory setCategory={setCategory} />

            {
                <PictureGrid
                    category={category}
                    key={category} />
            }

        </div>
    )
}

export default GaleryApp



