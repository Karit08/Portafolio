// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Skill from './components/Skills';
import Vocational from './components/Vocational';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/About' element= {<About />}/>
        <Route path='/Skill' element= {<Skill/>}/>
        <Route path='/Vocational' element= {<Vocational/>}/>
        <Route path='/Projects' element= {<Projects/>}/>
        <Route path='/Contact' element= {<Contact/>}/>
        {/* <Route path='*' element= {<NoPage/>}/> */}
      </Routes>
    </>
  )
}

export default App;
