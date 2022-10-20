import React, { useState } from 'react';
import Product from '../product/Product';
import './shop.css';


const Shop = () => {
    const dumyData =[
        {
            id:1,
            title:"Mobile",
            price:100,
            size:"10px"
        },{
            id:2,
            title:"Laptop",
            price:1000,
            size:"20px"
        },{
            id:3,
            title:"Dextop",
            price:2000,
            size:"30px"
        },{
            id:4,
            title:"Meek",
            price:3000,
            size:"25px"
        }
    ];
    const sliceData = dumyData.slice(0,3);
    const [products, setProducts] = useState(sliceData);
    const [cart, setCart] = useState([]);

    const handlAddProduct = (product) => {
        console.log("product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <>
           <div className='productElement'>
                {
                    products.map((data) => (
                        <Product key={data.id} dumyProduct={data} handlAddProduct={handlAddProduct}></Product>
                    ))
                }
           </div>
            <div className='cart-sumary'>
                <h5>Cart Sumary</h5>
                <h5>Order sumary: {cart.length}</h5>
            </div>
        </>
    );
};

export default Shop;