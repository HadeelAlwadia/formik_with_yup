import React from 'react'
import { Route ,Routes } from "react-router-dom";
import './App.css';
import FirstForm from './Screens/FirstForm';
import SecondForm from './Screens/SecondForm';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstForm />} />
      <Route path="nextform" element={<SecondForm />} />
      </Routes>
    </div>
  )
}

