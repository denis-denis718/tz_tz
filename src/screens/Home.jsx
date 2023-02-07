import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>HOME</h1>
            <Link to={'/variables'}>
                <button>About</button>
            </Link>
        </div>
    );
};

export default Home;
