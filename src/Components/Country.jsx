import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const Country = ({pais}) => {

    const [ country, setCountry ] = useState()
  //https://restcountries.com/v3.1/name/mexico

  //2.-Creamos la funcion que hara la peticion
  const getInfoCountry = () => {
    axios.get(`https://restcountries.com/v3.1/name/${pais}`)
    .then((res) => setCountry(res.data[0]))
    .catch((err) => console.log(err))
  }

  //1.-Creamos un useEffect para que por ese medio se carge cuando se renderia la app.
  useEffect( () => {
    getInfoCountry()
  }, [])
  
  return (
    <article className='cardCountry'>
        <div>
            <h1 className='cardCountry__title'>Paises de LATAM</h1>
        </div>
        <div className='cardCountry__img'>
            <img  src={country?.flags.svg} alt="flags-country" />
        </div>
        <div className='countryInfo__card'>
            <ul className='cardCountry__list'>
                <li><b>Poblacion:</b>{country?.population}</li>
                <li><b>Capital:</b>{country?.capital[0]}</li>
                <li><b>Region:</b>{country?.region}</li>
            </ul>
        </div>
    </article>
  )
}

export default Country