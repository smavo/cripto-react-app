import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Roboto Condensed', sans-serif;
    color: #fff;
    font-weight: bold;
    font-size: 28px;
    margin: 10px 0 ;
    display: block;
`;

const Select = styled.select`
    font-family: 'Jura', sans-serif;
    font-size: 18px;
    text-transform: uppercase;
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;

    @media (max-width:900px) {
        font-size:16px;
    }

    @media (max-width:600px) {
        font-size:14px;
    }
`;

const Forms = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 10px;
`

function useCriptos(label, stateInicial, criptomendas) {

    //console.log(criptomendas);

    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Forms>
            <Label>{label}</Label>
            <Select
                onChange={ e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">Seleccione...</option>
                {criptomendas.map(criptomoneda => (
                    <option key={criptomoneda.CoinInfo.Id} value={criptomoneda.CoinInfo.Name}>{criptomoneda.CoinInfo.FullName}</option>
                ))}
            </Select>
            </Forms>
        </Fragment>
    );

    // Retornar state, interfaz y fn que modifica el state
    return [state, SelectCripto, actualizarState];
}

export default useCriptos;
