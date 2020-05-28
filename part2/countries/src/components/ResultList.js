import React from 'react';
import CountryInfo from './CountryInfo'

const ResultList = ({searchTerm, countryData}) => {
    const filteredData = countryData.filter(country => country.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    console.log(filteredData)

    if (filteredData.length > 10) {
        return(
            <p>Too many matches, specify another filter</p>
        )
    } else if (filteredData.length === 0) {
        return(
            <p>No matches</p>
        )
    } else if (filteredData.length === 1) {
        return(
            <CountryInfo countryData={filteredData[0]} />
        )
    } else {
        return(
            <ul>
                {filteredData.map(country => <li key={country.name}>{country.name}</li>)}
            </ul>
        )
    }
}
 
export default ResultList;