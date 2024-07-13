import { useState, useEffect } from "react";
import './BitcoinRates.css'; // Ensure you have this file for specific styles

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
            } finally {
                setLoading(false);
            }
        };

        fetchBitcoinPrice();
        return () => {
            setPrice(null);
        };
    }, [currency]);

    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <p>
                    Current Price: {price !== null ? `${price} ${currency}` : "N/A"}
                </p>
            )}
        </div>
    );
}

export default BitcoinRates;


