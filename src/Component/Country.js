import React from 'react';
import'./country.css'
const Country = (props) => {
    console.log(props.country);
    return (
        <div className='country'>
            <img className='flag' src={props.country.flags.png} alt="" />
            <h1>{props.country.name.common}</h1>
            <h3>capital:{props.country.capital}</h3>
            <h3>population:{props.country.population}</h3>
        </div>
    );
};

export default Country;