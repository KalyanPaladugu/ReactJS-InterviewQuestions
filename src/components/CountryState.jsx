import React from 'react'

export default function CountryState() {

    const [selectedCountry, setSelectedCountry] = React.useState("");  
    const [selectedState, setSelectedState] = React.useState("");
    const [selectedCity, setSelectedCity] = React.useState("");


 const data = {
  USA: {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
  },

  Canada: {
    Ontario: ["Toronto", "Ottawa"],
    Quebec: ["Montreal", "Quebec City"],
  },

  India: {
    Maharashtra: ["Mumbai", "Pune"],
    Gujarat: ["Ahmedabad", "Surat"],
  },
};
console.log("countries",Object.keys(data));
console.log("states",Object.keys(data['Canada']));
console.log("cities",data['Canada']['Ontario']);
console.log("cities",data['Canada']?.['Ontario']);
const states= selectedCountry ? Object.keys(data[selectedCountry]) : [];


  return (
    <>
     <p>Selected Country: {selectedCountry}</p> 
     <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="">Select Country</option>
        {Object.keys(data).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select> 
      <p>Selected State: {selectedState}</p>
        <select value={selectedState} disabled={!selectedCountry} onChange={(e) => setSelectedState(e.target.value)}>   
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state} value={state}>        
            {state}
            </option>
        ))}
      </select> 
      <p>Selected City: {selectedCity}</p>
        <select value={selectedCity} disabled={!selectedState} onChange={(e) => setSelectedCity(e.target.value)}>   
        <option value="">Select City</option>
        {(data[selectedCountry]?.[selectedState] || []).map((city) => (
          <option key={city} value={city}>        
            {city}
            </option>
        ))}
      </select>   
    </>
  )
}
