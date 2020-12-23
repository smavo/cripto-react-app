import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Resultado = styled.div`
    background-color: #f5f5f5;
    color:#0D2235;
    padding: 20px 0;
    margin: 0 20px ;
    border-radius: 5px;
`

const Card = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    margin: 0 20px;

    @media (max-width:900px) {
        grid-template-columns: 1fr;
    }

    @media (max-width:600px) {
        grid-template-columns:  1fr;
        margin: 0;
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    margin: 0 20px;

    @media (max-width:900px) {
        grid-template-columns: 1fr;
    }

    @media (max-width:600px) {
        grid-template-columns:  1fr;
        margin: 0;
    }
`

const Precio = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    margin: 10px 20px 10px 20px;
    line-height: 2px;
    padding: 10px 0;

    span {
        font-family: 'Jura', sans-serif;
        font-weight:bold;
        font-size: 26px;
        margin: 10px 0 10px 0;
    }

    @media (max-width:900px) {
        font-size: 25px;

        span{
            font-size: 25px;
        }
    }

    @media (max-width:600px) {
        font-size: 20px;

        span{
            font-size: 20px;
        }
    }
`

const Info = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 26px;
    /*text-transform: uppercase;*/
    margin: 10px 20px 10px 20px;

    span {
        font-family: 'Jura', sans-serif;
        font-weight:bold;
        font-size: 25px;
        margin: 10px 0 10px 0;
    }

    @media (max-width:900px) {
        font-size: 23px;

        span{
            font-size: 23px;
        }
    }
    @media (max-width:600px) {
        font-size: 17px;

        span{
            font-size: 17px;
        }
    }
`;


function Cotizador({ resultado }) {
    if (Object.keys(resultado).length === 0) return null;
    //console.log(resultado)

    return (
        <Resultado>
            <Card>
                <Precio>El precio es: <span>{resultado.PRICE}</span> </Precio>
            </Card>
            <Content>
                <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
                <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
                <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
                <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span></Info>
                {/*<Info>Valor de Moneda en Dolar: <span>{resultado.CHANGEPCT24HOUR}</span> </Info>*/}
            </Content>
        </Resultado>
    )
}

Cotizador.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Cotizador;
