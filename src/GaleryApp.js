import React, { useState } from 'react';
import NewCategory from './components/NewCategory';
import PictureGrid from './components/PictureGrid';

const GaleryApp = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <div className="container">
            <h2 className="title">Gallery</h2>
            <NewCategory setCategories={setCategories} />

            <ol className="picture-grid">
                {
                    categories.map(category =>
                        <PictureGrid
                            category={category}
                            key={category} />
                    )
                }
            </ol>
        </div>
    )
}

export default GaleryApp



