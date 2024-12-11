import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
const [currency, setCurrency] = useState(currencies[0]);
const [bitcoinPrice, setBitcoinPrice] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchBitcoinPrice = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin price.');
        }
        const data = await response.json();
        setBitcoinPrice(data.bitcoin[currency.toLowerCase()]); // Extract price for the selected currency
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, [currency]);



const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select
                    value={currency}
                    onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {loading && <p>Loading price...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
            {!loading && !error && bitcoinPrice !== null && (
                <p>The current price of 1 Bitcoin in <strong>{currency}</strong> is <strong>{bitcoinPrice}</strong> {currency}.</p>
            )}
        </div>
    );
}

export default BitcoinRates;