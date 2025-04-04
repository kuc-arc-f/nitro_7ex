

import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Page1 from './client/page1';

function Home(){
  return (
    <div>Home
      <hr />
      <a href="/about">[ about ]</a>
      <hr />
      <span>home!!!</span>
    </div>
  )
}
function About(){
  return (
    <div>About
      <hr />
      <a href="/">[ home ]</a>
      <hr />
      <span>About123</span>
    </div>
  )
}

export default function App(){
  return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/page1" element={<Page1 />} />
    </Routes>
  </BrowserRouter>
  )
}
