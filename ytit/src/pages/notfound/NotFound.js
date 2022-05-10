import React from 'react';
import './notfound.scss';

const NotFound = () => {
    return (
        <div className='nopage'>
            <h1 className='no404'>4<span><i className="fas fa-ghost"></i></span>04</h1>
            <h2 className='errortex'>Error: 404 page not found</h2>
            <p className='errortexp'>Sorry, the page you're looking for cannot be accessed</p>
        </div>
    );
};

export default NotFound;
