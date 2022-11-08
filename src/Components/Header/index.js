import AppBar  from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Header = () => {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#ffff',
      },
      secondary: {
        contrastText: '#000',
      },
    },
  });


  return (
    <>
    <ThemeProvider theme={theme}>
    <AppBar position="static" theme={theme}>
      <ToolBar>
        <Typography variant='h4' className='header' >
          Our Store
        </Typography>
        {/* <Typography variant='h4' className='header'>
          cart
        </Typography> */}
      </ToolBar>
    </AppBar>
    </ThemeProvider>
    </>
  )
}

export default Header;