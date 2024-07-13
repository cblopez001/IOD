import Navbar from '../components/Navbar';
import { Container, Typography } from '@mui/material';

const BitcoinRates = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" gutterBottom>
          Current Bitcoin Rates
        </Typography>
        <Typography>
          Bitcoin (BTC) Price: $40,000 (example)
        </Typography>
      </Container>
    </>
  );
};

export default BitcoinRates;
