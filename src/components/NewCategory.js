import React, { useState } from 'react'
import PropTypes from 'prop-types';

const NewCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleValueChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim()) setCategories(values => [inputValue, ...values]);

        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="input__container">
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
    setCategories: PropTypes.func.isRequired
}

export default NewCategory;



