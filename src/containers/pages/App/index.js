import logo from '../../../assests/img/logo/logo.svg';
import './App.css';

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from '../Dashboard/index';
import Login from '../Login/index';
import Register from '../Register/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
