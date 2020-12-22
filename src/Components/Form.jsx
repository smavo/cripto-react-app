import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import useMonedas from '../hooks/useMonedas';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Forms = styled.form`
    margin: 0 20px;
`

function Form() {
    
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'PEN', nombre: 'Soles Peruanos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];
    
    // Utilizar useMoneda
    const [ moneda, SelectMonedas ] = useMonedas('Elige tu Moneda', '', MONEDAS);

    return (
        <Fragment>
            <Forms>
                <SelectMonedas />

                <Boton
                    type="submit"
                    value="Calcular"
                />
            </Forms>
        </Fragment>
    )
}

export default Form;
