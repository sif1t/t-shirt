import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa/Grandpa';

const Special = ({ring}) => {
    const anti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring:{anti}</small></p>
        </div>
    );
};

export default Special;