import React, { useState, useEffect } from 'react';
import CarCard from './components/CarCard';
import Chatbot from './components/Chatbot';
import EMICalculator from './components/EMICalculator';
import cars from './data/carsData';
import handleLanguage from './utils/languageHandler';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [language, setLanguage] = useState('en');
  const [showEMI, setShowEMI] = useState(false);

  useEffect(() => {
    if (query.trim() !== '') {
      const filtered = cars.filter(car =>
        car.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className={language === 'hi' ? 'hindi' : 'english'}>
      <header>
        <h1>DFC Raised 🚗</h1>
        <button onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}>
          {language === 'en' ? 'Switch to Hindi' : 'अंग्रेज़ी में स्विच करें'}
        </button>
      </header>
      <input
        type="text"
        placeholder={language === 'en' ? 'Search a car...' : 'कार का नाम लिखें...'}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setShowEMI(!showEMI)}>
        {language === 'en' ? 'Toggle EMI Calculator' : 'EMI कैलकुलेटर चालू करें'}
      </button>
      {showEMI && <EMICalculator />}
      {results.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
      <Chatbot language={language} />
    </div>
  );
}

export default App;
