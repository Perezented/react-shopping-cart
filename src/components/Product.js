import React from 'react';

const Product = (props) => {
    console.log(props);
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
                    props.addItem(e.target.value);
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Product;
//props.addItem(props.product)
