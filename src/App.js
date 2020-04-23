import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import {
    ProductsContext,
    NavigationContext,
    ShoppingCartContext,
} from './contexts';

function App() {
    const [products] = useState(data);
    const [cart = [], setCart] = useState([]);
    console.log(products);
    const addItem = (target) => {
        // add the given item to the cart
        setCart([
            ...cart,
            {
                id: target.id,
                title: target.title,
                price: target.price,
                image: target.image,
            },
        ]);
    };
    const getCartTotal = () => {
        return cart
            .reduce((acc, value) => {
                return acc + value.price;
            }, 0)
            .toFixed(2);
    };

    return (
        <div className="App">
            <NavigationContext.Provider value={{ cart }}>
                <Navigation />
            </NavigationContext.Provider>

            {/* Routes */}
            <Route exact path="/">
                <ProductsContext.Provider value={{ products, addItem }}>
                    <Products />
                </ProductsContext.Provider>
            </Route>

            <Route path="/cart">
                <ShoppingCartContext.Provider value={{ cart, getCartTotal }}>
                    {cart && <ShoppingCart />}
                </ShoppingCartContext.Provider>
            </Route>
        </div>
    );
}

export default App;
