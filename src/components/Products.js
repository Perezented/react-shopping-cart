import React, { useContext } from 'react';

// Components
import Product from './Product';
import { StoreContext } from '../contexts';

const Products = () => {
    const { products, addItem } = useContext(StoreContext);
    return (
        <div className="products-container">
            {products.map((product) => (
                <Product key={product.id} product={product} addItem={addItem} />
            ))}
        </div>
    );
};

export default Products;
