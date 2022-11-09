import { connect } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { addProduct } from '../../Store/actions';

import Box from '@mui/material/Box';

const Products = (props) => {
  console.log(props);

  const products = props.products.filter(product => product.category === props.activeCategory);
console.log(products);
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '25px' }}>
        {
          products.map((product, index) => (
            <Card key={`product-${index}`} >
              <CardContent>
                <Typography gutterBottom variant='h5' fontSize={25}>
                  {product.name}
                </Typography>
                <Typography gutterBottom variant='h5' fontSize={18}>
                  $ {product.price}
                </Typography>
                <Typography gutterBottom variant='h5' fontSize={18}>
                  inStock: {product.inStock}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => props.addProduct(product.name)} color="secondary" size="small">ADD TO CART</Button>
                <Button color="secondary" size="small">VIEW DETAILS</Button>
              </CardActions>
            </Card>
          ))
        }
      </Box>

    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.products,
    activeCategory: state.categories.activeCategory,
  }
};

const mapDispatchToProps = {
  addProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);