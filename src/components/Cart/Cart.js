import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart}=props;
    let totalQuantity=0;
    // const{cart}=props;
    // const total=cart.reduce((previous,product)=>previous+product.price,0);
    let total=0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity=1;
        }
        total=total+product.price*product.quantity;
        totalQuantity=totalQuantity+product.quantity;
    }
    const shipping=total>0?15:0;
    const tax=(total+shipping)*0.10;
    const grandTotal=total+tax+shipping;
    return (
        <div>
            <h3>Order Summary
                </h3>
                <h5>Item Ordered: {totalQuantity}</h5>
            
                <p>Total: {total.toFixed(2)}</p>
                <p>shipping: {shipping}</p>
                <p>tax: {tax.toFixed(2)}</p>
                <p className='g-total'>Grand Total: {grandTotal.toFixed
                (2)}</p>

        </div>
    );
};

export default Cart;