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
    const [cart, setCart] = useState([]);

    const addItem = () => {
        // add the given item to the cart
        const setCart = () => [
            ...cart,
            {
                value: products,
                id: cart.length,
            },
        ];
    };
    return (
        <div className="App">
            <NavigationContext value={{ cart }}>
                <Navigation />
            </NavigationContext>

            {/* Routes */}
            <Route exact path="/">
                <ProductsContext value={{ products, addItem }}>
                    <Products />
                </ProductsContext>
            </Route>

            <Route path="/cart">
                <ShoppingCartContext value={cart}>
                    <ShoppingCart />
                </ShoppingCartContext>
            </Route>
        </div>
    );
}

export default App;
