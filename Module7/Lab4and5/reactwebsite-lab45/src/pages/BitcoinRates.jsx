import { useReducer, useEffect } from "react";
import Navbar from '../components/Navbar';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';

const initialState = {
    price: null,
    loading: true,
    error: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_INIT":
            return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
            return { price: action.payload, loading: false, error: null };
        case "FETCH_FAILURE":
            return { ...state, loading: false, error: action.payload };
        default:
            throw new Error();
    }
}

export function useBitcoinPrice(currency) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
            dispatch({ type: "FETCH_INIT" });
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
                const data = await response.json();
                dispatch({ type: "FETCH_SUCCESS", payload: data.bitcoin[currency] });
            } catch (error) {
                dispatch({ type: "FETCH_FAILURE", payload: error.message });
            }
        };

        fetchBitcoinPrice();
    }, [currency]);

    return state; // { price, loading, error }
}

const BitcoinRates = () => {
    const { price, loading, error } = useBitcoinPrice('usd'); // You can change 'usd' to any other currency

    return (
        <>
            <Navbar />
            <Container>
                <Typography variant="h4" gutterBottom>
                    Current Bitcoin Rates
                </Typography>
                {loading && <CircularProgress />}
                {error && <Alert severity="error">{error}</Alert>}
                {price && (
                    <Typography variant="h6">
                        Bitcoin (BTC) Price: ${price}
                    </Typography>
                )}
            </Container>
        </>
    );
};

export default BitcoinRates;
