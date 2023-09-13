

import  { useState } from 'react';
import './App.css';

function App() {
  const [amount1, setAmount1] = useState('');
  const [currency1, setCurrency1] = useState('rial');
  const [amount2, setAmount2] = useState('');
  const [currency2, setCurrency2] = useState('dollar');


  const [exchangeRateMatrix] = useState({
    dollar: { dollar: 1, rial: 520000, dirham: 3.67, yuan: 6.45, euro: 0.85 },
    rial: { dollar: 0.000024, rial: 1, dirham: 0.000087, yuan: 0.000154, euro: 0.000020 },
    dirham: { dollar: 0.27, rial: 11491, dirham: 1, yuan: 1.76, euro: 0.23 },
    yuan: { dollar: 0.15, rial: 6451, dirham: 0.57, yuan: 1, euro: 0.13 },
    euro: { dollar: 1.18, rial: 49632, dirham: 4.31, yuan: 7.68, euro: 1 },
  });

  const handleCurrencyConversion = () => {
    if (!amount1 || isNaN(amount1)) {
      alert('Please enter a valid amount for the first currency.');
      return;
    }

    const convertedAmount = amount1 * exchangeRateMatrix[currency1][currency2];
    setAmount2(convertedAmount);
  };

  return (
    <div className="content">
      <div className="main">
        <div className="title">Currency Calculator</div>
        <div className="constant-rate">
          1{currency1} = {exchangeRateMatrix[currency1][currency2]} {currency2} </div>
        <div className="update">
          <span className="date1">Currency quote day: </span>
          <span className="date2">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="inputs">
          <input
            type="number"
            value={amount1}
            onChange={(e) => setAmount1(e.target.value)}
          />
          <select 
          value={currency1} 
          onChange={(e) => setCurrency1(e.target.value)}
          >
            <option value="dollar">US Dollar</option>
            <option value="rial">Rial</option>
            <option value="dirham">Dirham</option>
            <option value="yuan">Yuan</option>
            <option value="euro">Euro</option>
          </select>
          <input
            type="number"
            value={amount2}
            onChange={(e) => setAmount2(e.target.value)}
            readOnly
          />
          <select 
          value={currency2} 
          onChange={(e) => setCurrency2(e.target.value)}
          >
            <option value="dollar">US Dollar</option>
            <option value="rial">Rial</option>
            <option value="dirham">Dirham</option>
            <option value="yuan">Yuan</option>
            <option value="euro">Euro</option>
          </select>
          <button className='convert' onClick={handleCurrencyConversion}>Convert</button>
        </div>
      </div>
    </div>
  );
}

export default App;
