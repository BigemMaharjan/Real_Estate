import './App.css';
import React, {useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/HeroSliderData';
import GlobalStyle from './globalStyle';
import InfoSection from './components/InfoSection';
import {InfoData} from './data/InfoData';

function App() {
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <GlobalStyle />
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData}/>
    <InfoSection {...InfoData}/>
    </>
  );
}

export default App;
