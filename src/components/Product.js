import React from 'react';

const Product = (props) => {
    // console.log('these are the props in Product.js:', props);
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
                    // console.log(props, props.product);
                    props.addItem(props.product);
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Product;
