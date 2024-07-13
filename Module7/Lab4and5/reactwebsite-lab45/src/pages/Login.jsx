import Navbar from '../components/Navbar';
import { Container, Typography, TextField, Button } from '@mui/material';

const Login = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Login Page
        </Typography>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Container>
    </>
  );
};

export default Login;
