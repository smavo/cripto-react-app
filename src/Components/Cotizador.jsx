import React from 'react'
import styled from '@emotion/styled';

const Resultado = styled.div`
    color: #FFF;
`
const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;

    span {
        font-weight:bold;
    }
`


function Cotizador({resultado}) {
    if(Object.keys(resultado).length === 0) return null;
    //console.log(resultado)

    return (
        <Resultado>
            <Precio>El precio es: <span>{resultado.PRICE}</span> </Precio>
            {/*<Info>Valor de Moneda en Dolar: <span>{resultado.CHANGEPCTDAY}</span> </Info>*/}
            <Info>Precio más alto del día: <span>{resultado.HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span> </Info>
        </Resultado>
    )
}

export default Cotizador;
