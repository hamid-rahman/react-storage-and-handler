import React from 'react';
import { multiply } from '../utilities/calculate';
const Shoes = () => {
    const first = 4;
    const second = 44;
    const total = multiply(first, second)
    return (
        <div>
            <h1>Shows</h1>
            <p>total: {total}</p>
        </div>
    );
};

export default Shoes;