import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background-color: #ff2e63;
    margin: 20px 0 0 0;
    padding: 10px;
    color: #FFF;
    border-radius: 10px;

`;

function Error({mensaje}) {
    return (
        <Mensaje>
            {mensaje}
        </Mensaje>
    )
}

Error.prototype = {
    mensaje: PropTypes.string.isRequired
}

export default Error;
