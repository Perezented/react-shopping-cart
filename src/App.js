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
    const addItem = (item) => {
        // add the given item to the cart
        setCart([...cart, item]);
    };
    const removeItem = (item) => {
        console.log(
            'hhheeeeeyyyy',
            ...cart.filter((value) => {
                if (value.id !== item.id) {
                    console.log('it worked');
                }
            })
        );
    };
    return (
        <div className="App">
            <CartContext.Provider value={{ cart, removeItem }}>
                <Navigation cart={cart} />

                <StoreContext.Provider value={{ products, addItem }}>
                    {/* Routes */}
                    <Route exact path="/">
                        <Products />
                    </Route>
                </StoreContext.Provider>

                <Route path="/cart">
                    <ShoppingCart />
                </Route>
            </CartContext.Provider>
        </div>
    );
}

export default App;
