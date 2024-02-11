import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../css/CountryDetailPage.css"


const CountryDetailPage = () => {
    const { name } = useParams();
    let [countryDetails, setCountryDetails] = useState(null)
    const [error, setError] = useState(null);
    let getCountryDetails = async (name) => {
        let apiUrl = `https://restcountries.com/v3.1/name/${name}?fullText=true`
        try {
            let response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error Status: ${response.status}`);
            }
            let data = await response.json();
            console.log(data)
            setCountryDetails(data[0]);
            console.log(countryDetails)
            setError(null)
        } 
        catch (error) {
            setError(error)
        }
    };
    useEffect(() => {
        if(name){
            getCountryDetails(name);
        }
    }, [name]);

    return (
        <>
            {
                error ? 
                (
                    <div className='no-details'>No details available for this Country</div>
                ): 
                (   
                    <div className="main">
                        <div className="card" style={{"width": "70%"}}>
                            <div className="card-body">
                                {countryDetails && countryDetails.name && (
                                        <h1>{countryDetails.name.common}</h1>
                                )}
                                <img className="card-img-top flag" style={{"width": "30%", "margin-bottom": "10px"}} src={countryDetails && countryDetails.flags && (countryDetails.flags.png)} alt="Country Flag" />
                                <p>Independent: {countryDetails && countryDetails.independent ? (<span><b>Yes</b></span>):(<span><b>No</b></span>)}</p>
                                <p>Capital: <b>{countryDetails && countryDetails.capital[0]}</b></p>
                                <p>
                                    Currency:{' '}
                                    {countryDetails &&
                                    countryDetails.currencies &&
                                    Object.keys(countryDetails.currencies).map((currencyCode, index) => (
                                        <span key={index}>
                                        <b>{countryDetails.currencies[currencyCode].name}</b> (
                                        {countryDetails.currencies[currencyCode].symbol})
                                        {index < Object.keys(countryDetails.currencies).length - 1 && ', '}
                                        </span>
                                    ))}
                                </p>
                                <p>
                                    Languages:{' '}
                                    {countryDetails &&
                                    countryDetails.languages &&
                                    Object.keys(countryDetails.languages).map((langCode, index) => (
                                        <span key={index}>
                                        <b>{countryDetails.languages[langCode]}</b>
                                        {index < Object.keys(countryDetails.languages).length - 1 && ', '}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CountryDetailPage
