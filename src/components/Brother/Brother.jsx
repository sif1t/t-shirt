import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Brother</h2>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Brother;<h1>Brother</h1>