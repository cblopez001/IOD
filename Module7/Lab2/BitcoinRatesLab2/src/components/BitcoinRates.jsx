import { useState } from "react";
import { useBitcoinPrice } from "./useBitcoinPrice"; // Ensure the path is correct

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const { price, loading, error } = useBitcoinPrice(currency);
    const [amount, setAmount] = useState(0);
    
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    // Calculate the value based on the current price
    const calculateValue = () => {
        return amount * (price || 0);
    };

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
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <p>
                    Current Price: {price !== null ? `${price} ${currency}` : "N/A"}
                </p>
            )}
            <label>
                Amount of Bitcoin:
                <input
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter amount"
                />
            </label>
            <p>
                Equivalent Value: {amount > 0 ? `${calculateValue().toFixed(2)} ${currency}` : "N/A"}
            </p>
        </div>
    );
}

export default BitcoinRates;

