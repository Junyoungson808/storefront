import AppBar  from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';

const Header = () => {
  let productsInCart = useSelector(state => state.cart.productsInCart)

  return (
    <>

    <AppBar position="static" >
      <ToolBar>
        <Typography variant='h4' className='header' sx={{ flexGrow: 1}} >
          Our Store
        </Typography>
          <Button color='inherit'>
          Cart({productsInCart.length})
          </Button>
      </ToolBar>
    </AppBar>

    </>
  )
}

export default Header;