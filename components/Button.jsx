import React from 'react';

const Button = ({text}) => {
    return (
        <button className="btn btn-primary" onClick={event => event.target.value = 'Yo!'}>
            {text}
        </button>
    );
};

export default Button;
