import { useState } from "react";
import "./App.css";
import CurrencyInput from "./component/CurrencyInput";

function App() {
  const exchageRate = 1353;
  const [currency, setCurrency] = useState({
    krw: "",
    usd: "",
  });

  const changeMoney = (currency, value) => {
    if (currency === "KRW") {
      setCurrency({ krw: value, usd: (value / exchageRate).toFixed(2) });
    } else {
      setCurrency({ krw: value * exchageRate, usd: value });
    }
  };

  return (
    <section>
      <div>
        <h1>환율 변환기</h1>
        <span>KRW - USD</span>
      </div>
      <CurrencyInput
        currency="KRW"
        value={currency.krw}
        changeMoney={changeMoney}
      />
      <CurrencyInput
        currency="USD"
        value={currency.usd}
        changeMoney={changeMoney}
      />
    </section>
  );
}

export default App;
