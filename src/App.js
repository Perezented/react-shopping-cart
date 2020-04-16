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
                <ShoppingCartContext.Provider value={cart}>
                    <ShoppingCart />
                </ShoppingCartContext.Provider>
            </Route>
        </div>
    );
}

export default App;
