import Converter from "./components/Converter";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App2() {
    const [loading, setLoading] = useState(true);
    const [selectedCoinId, setSelectedCoinId] = useState("");
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((data) => {
                setCoins(data);
                setLoading(false);
            });
    }, []);

    const onChange = (e) => {
        setSelectedCoinId(e.target.value);
    };

    const selectedCoin = coins.find(coin => coin.id === selectedCoinId);

    return (
        <div>
            <h1>The Coins!</h1>
            <hr />
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <>
                    <select onChange={onChange} value={selectedCoinId}>
                        <option value="">Select a coin</option>
                        {coins.map((coin) => (
                            <option key={coin.id} value={coin.id}>
                                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                            </option>
                        ))}
                    </select>
                    {selectedCoin && (
                        <Converter
                            name={selectedCoin.name}
                            price={selectedCoin.quotes.USD.price}
                        />
                    )}
                </>
            )}
        </div>
    );
}

export default App2;