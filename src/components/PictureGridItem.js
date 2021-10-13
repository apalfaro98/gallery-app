import React from 'react'

const PictureGridItem = ({ title, url }) => {
    return (
        <li>
            <img src={url} alt={title} className="image" />
        </li>
    )
}

export default PictureGridItem;
