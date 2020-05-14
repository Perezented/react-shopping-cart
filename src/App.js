import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { StoreContext, CartContext } from './contexts';

function App() {
    const [products] = useState(data);
    const [cart, setCart] = useState([
        {
            id: 1,
            title: 'The Art Of War',
            price: 10.11,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg',
        },
        {
            id: 2,
            title: 'Civilization and Its Discontents',
            price: 14.29,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/51Jj12iMZnL._SX331_BO1,204,203,200_.jpg',
        },
    ]);

    console.log(cart);
    const addItem = (item) => setCart([...cart, item]);
    // add the given item to the cart

    console.log('this is the cart from App.js', cart);

    const removeItem = (item) => {
        // console.log(item);
        // console.log(cart);
        setCart([
            ...cart.filter((v, i, a) => {
                return v.id !== item.id;
            }),
        ]);
    };

    return (
        <div className="App">
            <CartContext.Provider value={{ cart }}>
                <Navigation cart={cart} />
            </CartContext.Provider>

            <StoreContext.Provider value={{ products, addItem }}>
                {/* Routes */}
                <Route exact path="/">
                    <Products />
                </Route>
            </StoreContext.Provider>
            <CartContext.Provider value={{ cart, removeItem }}>
                <Route path="/cart">
                    <ShoppingCart />
                </Route>
            </CartContext.Provider>
        </div>
    );
}

export default App;
