import { useState } from "react";
import UseCustomHook from "../Hooks/CustomHook";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('pkr');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const CurrencyValue = UseCustomHook(from);

  const options = Object.keys(CurrencyValue);

  const handleConvert = (e) => {
    e.preventDefault();
    if (CurrencyValue[to] && !isNaN(amount)) {
      const result = amount * CurrencyValue[to];
      setConvertedAmount(result.toFixed(2)); // Round to 2 decimal places
    } else {
      alert("Please enter a valid amount.");
    }
  };

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount || 0);
    setConvertedAmount(amount);
  };

  return (
    <div className="container bg-slate-100 p-7 rounded-md max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-5">Currency Converter</h1>
      <form onSubmit={handleConvert} className="flex flex-col">
        <label htmlFor="amount" className="mb-2 font-medium">Enter Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter amount"
        />
        <div className="select flex justify-between my-5">
          <div className="From">
            <h2 className="mb-2 font-medium">From</h2>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {options.map((name) => (
                <option key={name} value={name}>
                  {name.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={handleSwap}
            className="self-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <i className="fa-solid fa-right-left"></i>
          </button>
          <div className="To">
            <h2 className="mb-2 font-medium">To</h2>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {options.map((name) => (
                <option key={name} value={name}>
                  {name.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h3 className="my-5 text-center text-lg">
          {amount} {from.toUpperCase()} = {convertedAmount} {to.toUpperCase()}
        </h3>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Convert
        </button>
      </form>
    </div>
  );
}

export default CurrencyConverter;