import React, { useState, useEffect } from "react";
import "../css/CountriesListingPage.css"
import Country from "../components/Country";


const CountriesListingPage = () => {
    let [countries, setCountries] = useState([]);
    const [error, setError] = useState(null);
    let getCountries = async (name) => {
        let apiUrl = ""
        if(name === ""){
            apiUrl = "https://restcountries.com/v3.1/all"
        }
        else{
            apiUrl = `https://restcountries.com/v3.1/name/${name}`
        }
        try {
            let response = await fetch(apiUrl);
      
            if (!response.ok) {
              throw new Error(`HTTP error Status: ${response.status}`);
            }
            let data = await response.json();
            setCountries(data);
            setError(null)
          } catch (error) {
            setError(error)
        }
    };
    useEffect(() => {
        getCountries("");
      }, []);
    
    return (
        <>  
            <div class="main form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" onInput={(e) => getCountries(e.target.value)}/>
            </div>
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
                    {error?
                    (<div className="no-results">No country present with that name. Try with another name.</div>):
                    (countries.map((country, index) => (
                        <Country key={index} country={country} />
                    )))
                    }  
                </div>
            </div>
        </>
    )
}

export default CountriesListingPage
