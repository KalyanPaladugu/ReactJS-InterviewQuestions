import React, { useState } from "react";

const locationData = [
  {
    country: "USA",
    states: ["California", "Texas", "Florida", "New York"]
  },
  {
    country: "India",
    states: ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi"]
  },
  {
    country: "Canada",
    states: ["Ontario", "Quebec", "Alberta", "British Columbia"]
  }
];

export default function CountryStateSelector() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [availableStates, setAvailableStates] = useState([]);

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    setSelectedCountry(countryName);

    // Find the object that matches the selected country
    const countryObj = locationData.find((c) => c.country === countryName);
    
    // Update the states list (or clear it if no country is selected)
    setAvailableStates(countryObj ? countryObj.states : []);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Select Location</h3>

      {/* Country Dropdown */}
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Select Country --</option>
        {locationData.map((item) => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      <br /><br />

      {/* State Dropdown */}
      <select disabled={!selectedCountry}>
        <option value="">-- Select State --</option>
        {availableStates.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}