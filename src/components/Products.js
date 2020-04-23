import React from 'react';

// Components
import Product from './Product';

const Products = (props) => {
    console.log('From Products.js: ', props);
    return (
        <div className="products-container">
            {/* {props.products.map(product => (
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
