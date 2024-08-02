//import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { selectColorScheme, toggleColorScheme } from './Redux/ColorSchemeSlice';
import useHotkeys from './Hooks/UseHotkeys';


function App() {
  const theme = useSelector(selectColorScheme);
  const dispatch = useDispatch();

  const handleToggleColorScheme = () => {
    dispatch(toggleColorScheme());
  };

  useHotkeys(['control', 'j'], handleToggleColorScheme);

  console.log(theme);
  return (
    <>
      <div className='App' data-theme={theme}>
        
      </div>
    </>
  )
}

export default App
