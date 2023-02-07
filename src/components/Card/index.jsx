import React from 'react';

import CardTitle from "./CardTitle";
import { Link } from 'react-router-dom';
import VariableID from '../../screens/VariableID';

const Card = ({product}) => {

    const onClick = () => {
    };

    return (
        <div className="card">
            <div className="card__content">
                <p>{product.Value}</p>
                <div className="card__text">
                    <p>{String(product.Variable)}</p>
                </div>
            </div>
                <Link to={String(product.VariableId)}>
                    <button>About</button>
                </Link>

        </div>
    );
};

export default Card;