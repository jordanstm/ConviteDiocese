import React from 'react';
import logo from './Convite.jpeg';
import './App.css';
import { useParams } from 'react-router-dom';
function Ini(){
    
        let { Nome } = useParams();
        return (
            <div className="App">              
            <header className="App-header"> 
            <h5>{Nome}</h5>               
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>

        )
        
    }

export default Ini;