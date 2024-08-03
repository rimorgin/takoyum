//import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import appCss from '@styles/App.module.css';
import { selectColorScheme, toggleColorScheme } from './Redux/ColorSchemeSlice';
import useHotkeys from './Hooks/UseHotkeys';
import Home from './Pages/Home';


import logo from '@images/takoyum.png'


function App() {
  const theme = useSelector(selectColorScheme);
  const dispatch = useDispatch();

  const handleToggleColorScheme = () => {
    dispatch(toggleColorScheme());
  };

  useHotkeys(['control', 'j'], handleToggleColorScheme);

  return (
    <>
      <div className={appCss.main} data-theme={theme}>
        <div className={appCss.header}>
          <img src={logo} alt="Logo" style={{width:'50px', height:'50px'}} />
          <div>
            <a href='#about' className={appCss.headerNavLinks}>About</a>
            <a href='#menu' className={appCss.headerNavLinks}>Menu</a>
            <a href='#contact' className={appCss.headerNavLinks}>Contact</a>
          </div>
          <button>Order now</button>
        </div>
        <Home/>
      </div>
    </>
  )
}

export default App
