import React from 'react';

const Cart = ({cart, handleRemoveToCart}) => {

    let massage;
    if(cart.length === 0){
        massage= <p>Please Add Some Products</p>
    }
    else{
        massage = <div>
            <h3>Boroloxxxx</h3>
            <p><small>Thanks for wasting your money</small></p>
        </div>
    } // just for learning with fun

    return (
        <div>
            <h2 className={cart.length === 1 ? "red" : "blue" }>Order Summary: {cart.length}</h2>
            <p className={`bold border ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {cart.length > 2 ? <span className='orange'>Aro kino</span> : <span>Fokira</span>}
            {massage}
            {
                cart.map(tShit => <p 
                    key={tShit._id}
                    >
                        {tShit.name}
                        <button 
                        onClick={() => handleRemoveToCart(tShit._id)}> X </button>
                    </p>
                )
            }
            {
                cart.length === 2 && <p>Double Bonanza!!!</p>
            }
            {
                cart.length === 3 || <h3>Tintato holo na!!!</h3>
            }
        </div>
    );
};

export default Cart;