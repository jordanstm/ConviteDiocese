import React from 'react';
import { useParams } from 'react-router-dom';
import Ini from './Inicio';

function Nomeado() {
  let { Nome } = useParams();
  return (
    
  <Ini Nome = {Nome} />
  );
}

export default Nomeado;