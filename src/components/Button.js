import React from 'react';

function Button(props) {
    const {name, value, children, onClick} = props

    return (
        <button
            type="button"
            name={name}
            value={value}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;