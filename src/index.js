import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/styles.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, Contact, Pricing } from "./pages";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='pricing' element={<Pricing/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


