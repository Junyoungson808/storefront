import AppBar  from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {

  return (
    <>

    <AppBar position="static" >
      <ToolBar>
        <Typography variant='h4' className='header' sx={{ flexGrow: 1}} >
          Our Store
        </Typography>
        <Typography variant='h4' >
          cart
        </Typography>
      </ToolBar>
    </AppBar>

    </>
  )
}

export default Header;