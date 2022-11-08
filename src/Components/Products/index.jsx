import { connect } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';

const Products = (props) => {
  console.log(props);

  // const products = props.list.products.filter(product => product.category === props.list.activeCategory);

  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '25px'}}>
        {
          props.products.map((products, index) => (
            <Card key={`products-${index}`} >
              <CardContent>
                <Typography gutterBottom variant='h5' fontSize={25}>
                  {products.name}
                </Typography>
                <Typography gutterBottom variant='h5' fontSize={18}>
                  $ {products.price}
                </Typography>
                <Typography gutterBottom variant='h5' fontSize={18}>
                  inStock: {products.inStock}
                </Typography>
              </CardContent>
              <CardActions>
                    <Button color="secondary" size="small">ADD TO CART</Button>
                    <Button color="secondary" size="small">VIEW DETAILS</Button>
              </CardActions>
            </Card>
          ))
        }
      </Box>

    </>
  )
}

// adds redux state to the component prop chain
const mapStateToProps = ({ productReducer }) => {
  return {
    products: productReducer,
  }
};

// adds dispatch actions to the component prop chain
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
// export default Categories;