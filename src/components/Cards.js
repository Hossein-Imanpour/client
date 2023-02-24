import React from 'react';
// import 'bootstrap'
import {useState , useEffect} from 'react';

const Cards = ({theme , setTheme}) => {
    const [names , setNames] = useState(null);

    useEffect(()=> {
        fetch('/data.json')
        .then((res) => {
            return res.json()
        })
        .then((data)=> {
            setNames(data)
        
        })
    },[])
   
   return ( <>
      

    <div className='container patent-cards'>
        <section className='d-flex row justify-content-between card-section '>
            {names?.map((items , i)=>(
                <div className='card-body col-2 body-cards '>
                    <img className='card-img-top imgs ' alt='#country-flags' src={items.flags.png}/>
                   <div className='content'>
                   <h5 className='title' key={i}>{items.name}</h5>
                   {/* <h5 key={index}>{item.name}</h5> */}
                  <p key={i}>population : {items.population}</p>
                  <p key={i}>Region : {items.region}</p>
                  <p key={i}>Capital : {items.capital}</p>
                   </div>
                </div>
            ))}
        </section>
    </div>
            



    </> );
}
 
export default Cards;