import { connect } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const List = (props) => {
  console.log(props);

  const products = props.list.products.filter(product => product.category === props.list.activeCategory);

  return (
    <>
      {
        products.map((products, index) => (
          <Card sx={{ maxWidth: 345 }} key={`products-${index}`} >

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
              <Box>
              <Stack direction="row" spacing={3}>
                <Button size="small">ADD TO CART</Button>
                <Button size="small">VIEW DETAILS</Button>
              </Stack>
              </Box>
            </CardActions>
          </Card>
        ))
      }


    </>
  )
}

// adds redux state to the component prop chain
const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer,
  }
};

// adds dispatch actions to the component prop chain
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default Catagories;