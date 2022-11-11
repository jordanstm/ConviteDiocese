import React from 'react';
//import { useParams } from 'react-router-dom';
import logo from './Convite.png';
function Nomeado(props) {
   let N = props.match.params.Nome;
    //let { Nome } = useParams();    
    return (
        <div className="App">              
        <header className="App-header">            
        <h5>{N}</h5>               
          <img src={logo} className="App-logo" alt="Convite de participação" />
        </header>
      </div>

    )
}

export default Nomeado;