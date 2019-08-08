import React from 'react'

const styFooter = {
    border: '5px solid black',
    width: '100%',
    bottom: '0',
    height: '100px',
    textAlign: 'center',
    background: 'black',
    color: 'white',
  }

function Footer() {

    return (
        <footer style={styFooter}>
            <h1>Ética Social y Profesional: Grupo 2</h1>
            <hr style={{background : '#191616', marginTop : '28px'}}/>
            <p>2019 &copy; Todos los derechos reservados</p>
        </footer>
    );

}

export default Footer;