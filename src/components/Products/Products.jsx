import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
const products = [
    { id: 1, name: 'Steak', description: '10oz Ribeye', price: '$20', image: 'https://embed.widencdn.net/img/beef/ng96sbyljl/800x600px/Ribeye%20Steak_Lip-on.psd?keep=c&u=7fueml' },
    { id: 2, name: 'Ice Cream', description: 'Cookie and Cream', price: '$5', image: 'https://domesticallyblissful.com/wp-content/uploads/2020/07/Double-Stuffed-Oreo-Ice-Cream.jpg' }
]



const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
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
