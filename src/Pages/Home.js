
import FilterData from "../components/FilterData";
import Cards from "../components/Cards";
// import { Route } from "react-router-dom";
import {useState , useEffect} from 'react'

const Home = ({ theme, setTheme }) => {

    const [names, setNames] = useState(null);
    const [copy , setCopy] = useState(null);

    useEffect(() => {
      fetch("/data.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setNames(data);
          setCopy(data)
        });
    }, []);


  return (
    <>
    
      
      <FilterData setCopy={setCopy} theme={theme} setTheme={setTheme} names={names} />
      <Cards names={copy} />
    </>
  );
};

export default Home;
