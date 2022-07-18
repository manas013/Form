import React from 'react'
import "./App.css";
import Form from './Form';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <Routes >
      <Route  path="/"  element={<Home/>}/>
      <Route path="Form" element={<Form/>}/>
      <Route path="Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App