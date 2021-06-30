import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Steak', description: '10oz Ribeye', price: '$20' },
    { id: 2, name: 'Ice Cream', description: 'Cookie and Cream', price: '$5' }
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={products.id} xs={12} sm={6} m={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}

            </Grid>
        </main>
    )
}

export default Products;
