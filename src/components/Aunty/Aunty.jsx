import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div>
           <h2>Aunty</h2> 
           <section>
              <Cousin>Abir</Cousin>
                <Cousin>Abira</Cousin>
                <Cousin hasFriend={true} ring={ring}>Abirah</Cousin>
           </section>
        </div>
    );
};

export default Aunty;<h1>Aunty</h1>