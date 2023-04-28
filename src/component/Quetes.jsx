import { useEffect, useState } from 'react';
import './quote.css';

const Quetes = () => {
  const [quotes, setQuote] = useState([]);
  const fetchQuotes = async () => {
    try {
      const quotes = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=happiness',
        {
          method: 'GET',
          headers: {
            'X-Api-Key': 'Nv2iOXI6aWZd1dBx4vlATQ==sq6kS5PjURuPp6WV',
          },
        }
      );
      if (!quotes.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await quotes.json();
      setQuote(data[0].quote);
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);
  return (
    <div>
      <button type="button" onClick={fetchQuotes} className="btn_quote">
        click me to see quotes
      </button>
      {!quotes.length ? 'Loading...' : quotes}
    </div>
  );
};

export default Quetes;
