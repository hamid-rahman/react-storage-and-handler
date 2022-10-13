import React, { useEffect } from 'react';
import Cosmetics from '../cosmetics/Cosmetics';

const Cosmetic = (props) => {
    const {id, name, price} = props.cosmetic;

  
    const addToCart = (name)=>{
        console.log(name, id, price)
        localStorage.setItem(name,id)
    }



    return (
        <div style={{color: 'green', border: '1px solid blue', margin: '10px', padding: '5px'}}>
            <h2>Buy this: {name}</h2>
            <p>Price: {price}</p>
            <p>Product id: {id}</p>
            <button onClick={()=> addToCart(name,price)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;