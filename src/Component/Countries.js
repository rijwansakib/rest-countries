import React, { useEffect, useState } from 'react';
import Country from './Country';
import'./Countries.css'

const Countries = () => {
    const[countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data));
    },[])
    return (
        <div >
            <h1>countries{countries.length}</h1>
        <div className='countries'>
                {
                countries.map(country=><Country
                    country={country}
                    key={country.name.common}
                ></Country>)
             }
        </div>

        </div>
    );
};

export default Countries;