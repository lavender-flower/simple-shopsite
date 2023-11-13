import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    const[displayProducts,setDisplayProducts]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{setProducts(data);
        setDisplayProducts(data);
        });
        
    },[]);

    useEffect(()=>{
        if(products.length){
            const savdCart=getStoredCart();
            const storedCart=[];
        for(const key in savdCart){
            
            const addedProduct=products.find(product=>product.key===key);
            if(addedProduct){
                const quantity=savdCart[key]
            addedProduct.quantity=quantity;
            storedCart.push(addedProduct);
        }}
        setCart(storedCart);
        }
    },[products]);

    const handleAddToCart=(product)=>{
        const newCart=[...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }
    const handleSearch=event=>{
        const searchText=event.target.value;
        const matchedProducts=products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        
         <div>
               <div className='search-container'>
                <input type='text' 
                placeholder='Search Product'
                onChange={handleSearch}
                ></input>

            </div>
            <div className='shop-container'>
            <div className='product-container'>
                
                {
                    displayProducts.map(product=><Product
                    key={product.key}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Product>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
         </div>
        
    );
};

export default Shop;