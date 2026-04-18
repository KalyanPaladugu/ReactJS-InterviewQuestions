import React, { useState } from 'react';

const ProductApp = () => {
  // 1. Data Source
  const products = [
    { id: 1, name: "Solar Headphones", price: "$299", desc: "Noise-canceling headphones powered by ambient light.", specs: "40hr battery, Bluetooth 5.2, Carbon Neutral." },
    { id: 2, name: "E-Ink Notebook", price: "$450", desc: "A paper-like tablet for focused sketching and writing.", specs: "10.3 inch display, 3-week battery, Wi-Fi sync." }
  ];

  // 2. State to track the active product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 3. Detail View UI
  if (selectedProduct) {
    return (
      <div style={styles.detailContainer}>
        <button onClick={() => setSelectedProduct(null)} style={styles.backBtn}>← Back to Products</button>
        <div style={styles.detailContent}>
          <h1>{selectedProduct.name}</h1>
          <p style={styles.priceTag}>{selectedProduct.price}</p>
          <p>{selectedProduct.desc}</p>
          <div style={styles.specsBox}>
            <strong>Technical Specs:</strong>
            <p>{selectedProduct.specs}</p>
          </div>
        </div>
      </div>
    );
  }

  // 4. Master (Gallery) View UI
  return (
    <div style={styles.gallery}>
      {products.map(product => (
        <div 
          key={product.id} 
          style={styles.card} 
          onClick={() => setSelectedProduct(product)}
        >
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <small>Click to view details</small>
        </div>
      ))}
    </div>
  );
};

// Simple Styles
const styles = {
  gallery: { display: 'flex', gap: '20px', padding: '40px', fontFamily: 'sans-serif' },
  card: { 
    border: '1px solid #ddd', 
    borderRadius: '12px', 
    padding: '20px', 
    cursor: 'pointer', 
    width: '200px',
    transition: 'transform 0.2s',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  detailContainer: { padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px' },
  detailContent: { marginTop: '20px', lineHeight: '1.6' },
  priceTag: { fontSize: '1.5rem', color: '#2ecc71', fontWeight: 'bold' },
  specsBox: { background: '#f4f4f4', padding: '15px', borderRadius: '8px', marginTop: '20px' },
  backBtn: { padding: '8px 16px', cursor: 'pointer', borderRadius: '5px', border: '1px solid #333' }
};

export default ProductApp;