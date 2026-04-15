import React, { useState } from 'react';
import axios from 'axios';

// Debounce function utility
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// Example usage in a React component

const SearchItemsFromApi = () => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setItems(data);
      setFilteredItems(data);
    } catch (err) {
      setError(err.message || 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadItems();
  }, []);

  const doSearch = (value) => {
    const searchVal = value.toLowerCase();

    const result = items.filter((item) => {
      const target = item.title.toLowerCase();
      return target.includes(searchVal);
    });

    setFilteredItems(result);
  };

  const handleSearch = debounce((value) => {
    doSearch(value);
  }, 500);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    handleSearch(value);
  };



  return (
    <div>
      <h3>Posts Search (jsonplaceholder)</h3>

      <div style={{ marginBottom: '8px' }}>
        <input
          type="text"
          placeholder="Search titles..."
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}><strong>{item.title}</strong><br />{item.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchItemsFromApi;