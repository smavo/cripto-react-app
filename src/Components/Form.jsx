import React, { Fragment, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';
import axios from 'axios';

const Boton = styled.input`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-transform:uppercase;
    margin: 20px 0;
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

    @media (max-width:900px) {
    }

    @media (max-width:600px) {
    }
`

const Forms = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    margin: 0 20px;


    @media (max-width:900px) {
    grid-template-columns: 1fr;
    }

    @media (max-width:600px) {
    grid-template-columns: 1fr;
    }
`

function Form() {

    // state del listado de criptomonedas
    const [listacripto, guardarCriptomonedas] = useState([]);



    const monedas = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'PEN', nombre: 'Soles Peruanos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    // Utilizar useMoneda - custon Hook
    const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', monedas);

    // utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCripto('Elige tu Criptomoneda', '', listacripto);

    // Ejecutar llamado a la API
    useEffect(() => {

        const API_URL = process.env.REACT_APP_API_URL;

        const consultarAPI = async () => {
            const url = `${API_URL}?limit=10&tsym=USD`;

            const resultado = await axios.get(url);

            guardarCriptomonedas(resultado.data.Data);
            //console.log(resultado);
            //console.log(resultado.data);
            console.log(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    return (
        <Fragment>
            <Forms>

                <SelectMonedas />

                <SelectCripto />

                <Boton
                    type="submit"
                    value="Calcular"
                />

            </Forms>
        </Fragment>
    )
}

export default Form;
