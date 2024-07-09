import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa/Grandpa';

const Uncle = () => {
    const[ money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>grandpa Money {money}</small></p>
            <button onClick={()=>setMoney(money + 300)}>Send Money</button>
            <section className='flex'>
                <Cousin> Nadia</Cousin>
                <Cousin> Anil</Cousin>
                <Cousin> Nubia</Cousin>
            </section>
        </div>
    );
};

export default Uncle;