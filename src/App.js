import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';

function App() {
    useEffect(() =>{
     const location = axios.get('http://api.weatherapi.com/v1/current.json?key=b9279c17a4d649bda08153522211812&q=London&aqi=no')
     .then(data => {
       console.log(data);
     })
     .catch(error => console.log(error))
    },[]);
    return (
      
    <div className="App">
     <Header />
    </div>
  );
}

export default App;
