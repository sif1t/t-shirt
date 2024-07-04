import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';
const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const alreadyInCart = cart.find(ts => ts._id === tshirt._id);
        if (alreadyInCart) {
            toast('This item is already in cart👙😁');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

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




