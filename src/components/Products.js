import React from 'react';

import { ProductsContext } from '../contexts';
// Components
import Product from './Product';

const Products = () => {
    return (
        <div className="products-container">
            <ProductsContext.Consumer>
                {(item) => {
                    console.log('Item from products.js: ', item);
                    return item.products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            addItem={item.addItem}
                            cart={item.cart}
                        />
                    ));
                }}
            </ProductsContext.Consumer>
        </div>
    );
};

export default Products;
