import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationContext } from '../contexts';

const Navigation = (props) => {
    return (
        <div className="navigation">
            <NavigationContext.Consumer>
                ((item)=>{console.log(item)})
            </NavigationContext.Consumer>
            {/* <NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{props.cart.length}</span>
			</NavLink> */}
        </div>
    );
};

export default Navigation;
