import { useState } from "react";
import { useBitcoinPrice } from "./useBitcoinPrice"; // Adjust the path as necessary

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const { price, loading, error } = useBitcoinPrice(currency);

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
        </div>
    );
}

export default BitcoinRates;
