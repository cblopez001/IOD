import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import { Container, Typography, CircularProgress } from '@mui/material';

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
                const data = await response.json();
                setPrice(data.bitcoin[currency]);
            } catch (error) {
                console.error("Error fetching Bitcoin price:", error);
                setPrice(null); // Set price to null on error
            } finally {
                setLoading(false);
            }
        };

        fetchBitcoinPrice();

        return () => {
            setPrice(null); // Clean up on unmount
        };
    }, [currency]);

    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (
        <>
            <Navbar />
            <Container style={{ padding: '20px' }} className="componentBox">
                <Typography variant="h4" gutterBottom>
                    Bitcoin Exchange Rate
                </Typography>
                <label>
                    Choose currency:
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        {options}
                    </select>
                </label>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <Typography variant="h6">
                        Current Price: {price !== null ? `${price} ${currency}` : "N/A"}
                    </Typography>
                )}
            </Container>
        </>
    );
}

export default BitcoinRates;
