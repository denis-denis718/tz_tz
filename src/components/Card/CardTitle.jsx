import React from 'react';

const CardTitle = ({text, color}) => {
    return (
        <div className="card__title" style={{color}}>
            <span>{text}</span>
        </div>
    );
};

export default CardTitle;