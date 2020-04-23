import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import { NavigationContext } from '../contexts';

//consume data from the context object rathre than from props
//context hook pattern
//-import context obj
//-call the context hook and pass in the context object

const ShoppingCart = () => {
    const navItems = useContext(NavigationContext);
    console.log({ navItems });
    const getCartTotal = () => {
        return navItems
            .reduce((acc, value) => {
                return acc + value.price;
            }, 0)
            .toFixed(2);
    };

    return (
        <div className="shopping-cart">
            {/* {cart.map((item) => (
                <Item key={item.id} {...item} />
            ))}

            <div className="shopping-cart__checkout">
                <p>Total: ${getCartTotal()}</p>
                <button>Checkout</button>
            </div> */}
        </div>
    );
};

export default ShoppingCart;
