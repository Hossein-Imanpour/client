import {useState} from 'react'
import Cards from './components/Cards';
import FilterData from './components/FilterData';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

function App() {

const [theme , setTheme ] = useState('light')

  return (
    <div className={`parent ${theme === "light" ? "light" : "dark"}`}>
      
      <NavBar  theme={theme} setTheme={setTheme}/>
      <FilterData theme={theme} setTheme={setTheme}/>
      <Cards/>


    </div>
  );
}

export default App;
