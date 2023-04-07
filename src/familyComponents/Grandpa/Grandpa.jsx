import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import "./Grandpa.css";


export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);

    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <p>Has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <section className='flex'>
                    <RingContext.Provider value='golden ring'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </RingContext.Provider>
                </section>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;
/**
 * 1. Create Context
 * 2. Create a provider and pass a value
 * 3. Use useContext to receive
 */