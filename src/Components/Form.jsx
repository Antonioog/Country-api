import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
  const [nameCountry, setNameCountry] = useState("mexico");
  const [country, setCountry] = useState();
  //https://restcountries.com/v3.1/name/mexico

  const getInfoCountry = () => {
    const url = `https://restcountries.com/v3.1/name/${nameCountry}`;
    axios
      .get(url)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameCountry(e.target.nameCountry.value);
  };

  useEffect(() => {
    getInfoCountry();
  }, [nameCountry]);

  return (
    <section>
      <form className="form" onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="nameCountry">Country:</label>
          <input id="nameCountry" type="text" placeholder="Ingresa el Pais" />
        </div>
        <button>Search</button>
      </form>
      <article className="cardCountry">
        <div>
          <h1 className="cardCountry__title">Paises de LATAM</h1>
        </div>
        <div className="cardCountry__img">
          <img src={country?.flags.svg} alt="flags-country" />
        </div>
        <div className="countryInfo__card">
          <ul className="cardCountry__list">
            <li>
              <b>Poblacion:</b>
              {country?.population}
            </li>
            <li>
              <b>Capital:</b>
              {country?.capital[0]}
            </li>
            <li>
              <b>Region:</b>
              {country?.region}
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Form;
