import React from 'react'

const PictureGridItem = ({ title, url }) => {
    return (
        <div>
            <img src={url} alt={title} className="image" />
        </div>
    )
}

export default PictureGridItem;
