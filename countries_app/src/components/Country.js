import React from 'react'
import "../css/Country.css"

const Country = (country = country) => {
  return (
    <div class="card shadow-md" style={{"width": "21rem"}}>
        <img class="card-img-top" src={country.country.flags.png} alt="Country Flag" />
        <div class="card-body">
            <h6>{country.country.name.common}</h6>
        </div>
    </div>
  )
}

export default Country
