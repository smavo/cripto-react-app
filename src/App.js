import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import styled from '@emotion/styled';
import Form from './Components/Form';
import Cotizador from './Components/Cotizador';
import axios from 'axios';
import Loading from './Components/Loading';


const Contenedor = styled.div`
  max-width:1200px;
  margin: 0 auto;
  justify-content:center;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;

`;

const Seccion = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
 

  @media (max-width:900px) {
    grid-template-columns: 1fr;
  }

  @media (max-width:600px) {
    grid-template-columns: 1fr;
  }
`

function App() {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect( () => {

    const cotizarCriptomoneda = async () => {

        const API_COTIZADOR = process.env.REACT_APP_API_URL_CONVERSOR;

        // evitamos la ejecución la primera vez
        if(moneda === '') return;

        // consultar la api para obtener la cotizacion
        const url = `${API_COTIZADOR}?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const resultado = await axios.get(url);

        // mostrar el spinner
        guardarCargando(true);

        // ocultar el spinner y mostrar el resultado
        setTimeout(() => {

          // cambiar el estado de cargando
          guardarCargando(false);

          // guardar cotizacion
          guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda] );
        }, 3000);

    }
    cotizarCriptomoneda();
}, [moneda, criptomoneda]);

// Mostrar spinner o resultado
const componente = (cargando) ? <Loading /> :  <Cotizador  resultado={resultado} />

  return (
    <Contenedor>
      <Header titulo="🏦 CriptoApp 2020 💱"/>
      <Seccion>
        <Form 
          guardarMoneda={setMoneda}
          guardarCriptomoneda={setCriptomoneda}
        />
        {componente}
      </Seccion>
      
    </Contenedor>
  );
}

export default App;
