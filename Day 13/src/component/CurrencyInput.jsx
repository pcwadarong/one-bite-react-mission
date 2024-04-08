function CurrencyInput({ currency, value, changeMoney }) {
  return (
    <div>
      <label for={currency}>{currency}</label>
      <input
        type="number"
        id={currency}
        value={value}
        onChange={(e) => {
          changeMoney(currency, e.target.value);
        }}
      />
    </div>
  );
}

export default CurrencyInput;
