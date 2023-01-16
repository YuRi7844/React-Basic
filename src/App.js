import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 여기서 useState 초기값 세팅을 안하면 coins.length가 undefined로 나올수 있겠지
  const [principal, setPrincipal] = useState(0);
  const [exc, setExc] = useState("");
  const onChange = (event) => {
    setPrincipal(event.target.value);
  };
  const fnOptionChanged = (event) => {
    console.log(event.target.value);
    setExc(principal * event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div>
        <h1>The Coins! ({coins.length})</h1>
        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <select onChange={fnOptionChanged}>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        <input
          onChange={onChange}
          value={principal}
          placeholder="환전할 금액($)을 입력하세요.."
        />
      </div>
      <h3>환전 예상결과: {exc}</h3>
    </div>
  );
}

export default App;
