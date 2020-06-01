import React, { useState, useEffect } from 'react';
import Search from './components/Search'
import ResultList from './components/ResultList'
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('sw')
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    console.log('Getting country data...')
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log("Country data received.")
        setCountryData(response.data)
      })
  }, [])

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="App">
      <Search searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange}/>
      <ResultList searchTerm={searchTerm} setSearchTerm={setSearchTerm} countryData={countryData} />
    </div>
  );
}

export default App;
