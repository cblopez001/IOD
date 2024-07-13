import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Vite App
        </Typography>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/bitcoin-rates" style={{ textDecoration: 'none' }}>
          <Button color="inherit">Bitcoin Rates</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
