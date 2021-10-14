import React, { useState } from 'react'
import PropTypes from 'prop-types';

const NewCategory = ({ setCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleValueChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim()) setCategory(inputValue);

        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="input__container">
            <div className="search-icon"></div>
            <input
                type="text"
                placeholder="Search"
                autoFocus={true}
                value={inputValue}
                onChange={handleValueChange}
            />
        </form>
    )
}

NewCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default NewCategory;



