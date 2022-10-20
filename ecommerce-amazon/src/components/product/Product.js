import React, { Fragment } from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {title, price, size} = props.dumyProduct;
    return (
        <Fragment>
           <div className='productElement'>
                    <h2>Name: {title}</h2>
                    <h3>Price: ${price}</h3>
                    <h4>Size: {size}</h4>
                    <div className='btnC'>
                        <button onClick={() => props.handlAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
                    </div>
           </div>
        </Fragment>
    );
};

export default Product;