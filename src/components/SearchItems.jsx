import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  UseDebounce  from './UseDebounce';

const SearchItems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Use the custom hook here
  const debouncedSearchTerm = UseDebounce(searchTerm, 500);

  // 1. Initial Data Fetch
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setAllItems(data);
        setFilteredItems(data);
      } catch (err) {
        console.error("Fetch failed", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // 2. Trigger filtering ONLY when debouncedSearchTerm changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      const results = allItems.filter((item) =>
        item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      // If search is cleared, show all items
      setFilteredItems(allItems);
    }
  }, [debouncedSearchTerm, allItems]);

  const handleSelectText = (selectedText) => {
    setSearchTerm(selectedText);
  };
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h3>Reusable Debounce Search</h3>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ marginTop: '20px' }}>
          {filteredItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '8px' }} onClick={() => handleSelectText(item.title)}>
              <strong>{item.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchItems;