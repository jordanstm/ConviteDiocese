import React from 'react';
import { useParams } from 'react-router-dom';
import logo from './Convite.jpeg';
function Nomeado() {
  
    let { Nome } = useParams();    
    return (
        <div className="App">              
        <header className="App-header">            
        <h5>{Nome}</h5>               
          <img src={logo} className="App-logo" alt="Convite de participação" />
        </header>
      </div>

    )
}

export default Nomeado;