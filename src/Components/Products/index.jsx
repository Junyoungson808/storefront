import * as React from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../Store/actions';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = (props) => {
  console.log(props);

  const products = props.products.filter(product => product.category === props.activeCategory);

  return (
    <>
      <Container align='center' sx={{ mt: 30, }}>
        {/* {
          products.map((product, index) => (
            <Typography gutterBottom variant='h3' key={`product-${index}`} sx={{ m: 5 }} align='center'>
              {props.products.filter}
            </Typography>
          ))
        } */}
        <Box sx={{ display: 'flex', flexDirection: 'row', }}>
          {
            products.map((product, index) => (


              <Card key={`product-${index}`} sx={{ m: 5 }} align='center'>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
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
                <CardActions sx={{ m: 'auto', }}>
                  <Button onClick={() => props.addProduct(product.name)} color="secondary" size="small">ADD TO CART</Button>
                  <Button color="secondary" size="small">VIEW DETAILS</Button>
                </CardActions>
              </Card>
            ))
          }
        </Box>
      </Container>

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