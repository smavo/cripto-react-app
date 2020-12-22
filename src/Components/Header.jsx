import React, { Fragment } from 'react'
import styled from '@emotion/styled';

const Encabezado = styled.div`
    color: white;
    text-align:center;
   
    text-transform:uppercase;
    background-color: #17181C;
    padding: 10px 10px ;

    h2{
        font-size:36px;
        margin: 10px
    }

    @media (max-width:900px) {
        h2{
            font-size: 30px;
        }
    }

    @media (max-width:600px) {
        h2{
            font-size: 24px;
        }
    }
`

function Header({titulo}) {
    return (
        <Fragment>
            <Encabezado>
                <h2>{titulo}</h2>
            </Encabezado>
        </Fragment>
    )
}

export default Header;
