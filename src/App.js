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
    const [cart, setCart] = useState([]);

    console.log(cart);
    const addItem = (item) => {
        // add the given item to the cart
        setCart([...cart, item]);
    };

    return (
        <div className="App">
            <CartContext.Provider value={{ cart }}>
                <Navigation cart={cart} />

                <StoreContext.Provider value={{ products, addItem }}>
                    {/* Routes */}
                    <Route exact path="/">
                        <Products />
                    </Route>
                </StoreContext.Provider>

                <Route path="/cart">
                    <ShoppingCart cart={cart} />
                </Route>
            </CartContext.Provider>
        </div>
    );
}

export default App;
