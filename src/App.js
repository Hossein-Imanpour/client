import {useState} from 'react'

import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Detail from './Pages/Detail';

function App() {

const [theme , setTheme ] = useState('light')

  return (
    <div className={`parent ${theme === "light" ? "light" : "dark"}`}>
      
      {/* <NavBar  theme={theme} setTheme={setTheme}/>
      <FilterData theme={theme} setTheme={setTheme}/>
      <Cards/>
       */}
         <NavBar theme={theme} setTheme={setTheme} />
       <Routes>
        <Route path='/' element={<Home theme={theme} setTheme={setTheme} />}  />
        <Route path='/country/:name' element={<Detail/>} />
       </Routes>

    </div>
  );
}

export default App;
