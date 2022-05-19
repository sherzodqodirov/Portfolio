import React from 'react';

const SquareComponet = ({state,onClick}) => {
    return (
        <div className='stylesqur' onClick={onClick} >
            {state}
        </div>
    );
};

export default SquareComponet;
