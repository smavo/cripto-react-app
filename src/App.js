import React from 'react';
import Header from './Components/Header';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 1200px;
  margin: 0 10px;
  

  @media (max-width:900px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
  }

`;

function App() {
  return (
    <Contenedor>
      <Header titulo="🏦 CriptoApp 2020 💱"/>
      <div><p>Demo</p></div>
    </Contenedor>
  );
}

export default App;
