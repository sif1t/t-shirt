import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


import './Home.css';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(ts => ts._id !== id);
        setCart(remainingCart);
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
                {
                    tShirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};
export default Home;



