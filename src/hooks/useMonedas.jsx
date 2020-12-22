import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Roboto Condensed', sans-serif;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 28px;
    margin: 10px 0 ;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 20px;
`

function useMonedas() {
    // State de nuestro custom hook
    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <Fragment>
            <Label>Monedas</Label>
            <Select>
                <option value="PEN"> Soles Peruanos </option>
            </Select>
        </Fragment>
    );

     // Retornar state, interfaz y fn que modifica el state
    return [state, Seleccionar, actualizarState];

}

export default useMonedas;
