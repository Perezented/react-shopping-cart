import React from 'react';
import { useDispatch } from 'react-redux';

const Product = (props) => {
    const dispatch = useDispatch();
    console.log('these are the props in Product.js:', props);
    return (
        <div className="product">
            <img
                src={props.product.image}
                alt={`${props.product.title} book`}
            />

            <h1 className="title">{props.product.title}</h1>

            <p className="price">${props.product.price}</p>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(props.product);
                    dispatch({
                        type: 'ADD_TO_CART',
                        payload: props.product,
                    });
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Product;
