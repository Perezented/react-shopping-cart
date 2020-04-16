import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationContext } from '../contexts';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavigationContext.Consumer>
                {(item) => {
                    return (
                        <>
                            <NavLink to="/">Products</NavLink>
                            <NavLink to="/cart">
                                Cart <span>{item.cart.length}</span>
                            </NavLink>
                        </>
                    );
                }}
            </NavigationContext.Consumer>
        </div>
    );
};

export default Navigation;
