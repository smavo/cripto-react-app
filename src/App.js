import React from 'react';
import Header from './Components/Header';
import styled from '@emotion/styled';
import Form from './Components/Form';

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
  return (
    <Contenedor>
      <Header titulo="🏦 CriptoApp 2020 💱"/>
      <Seccion>
        <Form />
        {/*<div>
          <h2>Demo</h2>
        </div>*/}
      </Seccion>
      
    </Contenedor>
  );
}

export default App;
