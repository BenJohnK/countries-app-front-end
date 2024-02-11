import React from 'react'
import "../css/Country.css"
import { useNavigate } from 'react-router-dom'

const Country = (country = country) => {
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`/country/${country.country.name.common}`)
  }
  return (
    <div class="card shadow-md" style={{"width": "21rem"}} onClick={handleClick}>
        <img class="card-img-top" src={country.country.flags.png} alt="Country Flag" />
        <div class="card-body">
            <h6>{country.country.name.common}</h6>
        </div>
    </div>
  )
}

export default Country
