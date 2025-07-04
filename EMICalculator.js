import React, { useState } from 'react';

function EMICalculator() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [months, setMonths] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const p = parseFloat(amount);
    const r = parseFloat(interest) / 12 / 100;
    const n = parseFloat(months);
    const e = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(e.toFixed(2));
  };

  return (
    <div>
      <h4>EMI Calculator</h4>
      <input placeholder="Loan Amount" onChange={(e) => setAmount(e.target.value)} />
      <input placeholder="Interest Rate (%)" onChange={(e) => setInterest(e.target.value)} />
      <input placeholder="Tenure (months)" onChange={(e) => setMonths(e.target.value)} />
      <button onClick={calculateEMI}>Calculate</button>
      {emi && <p>Monthly EMI: ₹{emi}</p>}
    </div>
  );
}

export default EMICalculator;
