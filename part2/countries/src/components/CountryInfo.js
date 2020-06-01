import React from 'react';
import Weather from './Weather'

const CountryInfo = ({countryData}) => {
    console.log(countryData)
    return (
        <div>
            <h2>{countryData.name}</h2>
            <p>Capital: {countryData.capital}</p>
            <p>Population: {countryData.population}</p>
            <h3>Languages</h3>
            <ul>
                {countryData.languages.map(language => 
                    <li key={language.iso639_1}>
                        {language.name}
                    </li> 
                )}
            </ul>
            <img src={countryData.flag} alt={`{countryData.name} flag`} width='50%'/>
            <Weather city={countryData.capital} cc={countryData.alpha2Code} />
        </div>
    );
}
 
export default CountryInfo;