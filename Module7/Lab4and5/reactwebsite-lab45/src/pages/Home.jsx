import Navbar from '../components/Navbar';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Page!
        </Typography>
        <Typography>
          Explore the world of cryptocurrencies.
        </Typography>
      </Container>
    </>
  );
};

export default Home;
