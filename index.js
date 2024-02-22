import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import App from './App';
import Login from './Login';
import Page2 from './Page2';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='Home' element={<App/>} />
      <Route path='Login' element={<Login/>} />
      <Route path='Kingdom' element={<Page2/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);
