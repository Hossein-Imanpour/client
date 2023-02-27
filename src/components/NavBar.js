import { useState } from "react";
import { Container } from "react-bootstrap";

const NavBar = ({ theme, setTheme }) => {

const [titleDarkMode , setTitleDarkMode] = useState('Dark Mode')
  const handleTheme = () => {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    //   setNavIcon(<ion-icon name="moon-outline"></ion-icon>)
      setTitleDarkMode((prev) => (prev === "Dark Mode" ? "Light Mode" : "Dark Mode"))
      
  };

  return (
    <>
      <header className={`header ${theme === "light" ? "light" : "dark"} ${theme === 'light' ? 'Light Mode' : 'Dark Mode'}  ${theme==="light" ?<ion-icon name="sunny-outline"></ion-icon>: <ion-icon name="moon-outline"></ion-icon>}`}>
        <Container className="">
          <nav className="nav  ">
            <h1 className="nav-title">Where in the world?</h1>

            <p className="darkMode" onClick={handleTheme } >
         
              {/* Dark Mode */}
              {titleDarkMode}
            </p>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default NavBar;
