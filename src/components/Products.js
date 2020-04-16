import React from 'react';

import { ProductsContext } from '../contexts';
// Components
import Product from './Product';

const Products = (props) => {
    return (
        <div className="products-container">
            <ProductsContext.Consumer>
                {(item) => {
                    return console.log(item);
                }}
            </ProductsContext.Consumer>

            {/* {props.products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    addItem={props.addItem}
                />
            ))} */}
        </div>
    );
};

export default Products;
