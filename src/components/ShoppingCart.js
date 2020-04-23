import React from 'react';

// Components
import Item from './ShoppingCartItem';
// Context

const ShoppingCart = (props) => {
    const getCartTotal = () => {
        return props.cart
            .reduce((acc, value) => {
                return acc + value.price;
            }, 0)
            .toFixed(2);
    };

    console.log('these are the props in Shopping cart: ', props);

    return (
        <div className="shopping-cart">
            {props.cart.map((item) => (
                <Item key={item.id} {...item} />
            ))}

            <div className="shopping-cart__checkout">
                <p>Total: ${getCartTotal()}</p>
                <button>Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
