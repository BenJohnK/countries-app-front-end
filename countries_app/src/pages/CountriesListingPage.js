import React, { useState, useEffect } from "react";
import "../css/CountriesListingPage.css"
import Country from "../components/Country";

const CountriesListingPage = () => {
    let [countries, setCountries] = useState([]);
    let getCountries = async () => {
        let apiUrl = "https://restcountries.com/v3.1/all"
        let response = await fetch(apiUrl);
        let data = await response.json();
        setCountries(data)
        console.log(countries)
    };
    useEffect(() => {
        getCountries();
      }, []);

    return (
        <>
            <div className="heading">
            <h1><b>All Countries</b></h1>
            </div>
            <div className='container'>
                <div
                style={{
                    "display": "flex",
                    "flexWrap": "wrap",
                    "justifyContent": "space-around",
                }}
                >
                {countries.map((country, index) => (
                    <Country key={index} country={country} />
                ))}
                </div>
            </div>
        </>
    )
}

export default CountriesListingPage
