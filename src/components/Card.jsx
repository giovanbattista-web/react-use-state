import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
            </div>
        </div>
    )
};

export default Card;