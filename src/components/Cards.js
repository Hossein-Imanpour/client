import React from "react";
// import 'bootstrap'
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const Cards = ({ theme, setTheme , names}) => {
 

  return (
    <>
      <div className="container patent-cards">
        <section className="d-flex row justify-content-between card-section ">
          {names?.map((items) => (
            <div className="card-body col-2 body-cards " key={items.cioc}>
              <Link to={`/country/${items.name.split(' ').join('-')}`}>
              
              <img
                className="card-img-top imgs "
                alt="#country-flags"
                src={items.flags.png}
              />
              </Link>
              <div className="content">
                <h5 className="title">
                  {items.name}
                </h5>
                {/* <h5 key={index}>{item.name}</h5> */}
                <p >population : {items.population}</p>
                <p >Region : {items.region}</p>
                <p >Capital : {items.capital}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Cards;
