import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Menu extends React.Component{
    
    render()
    { return(<>
        <Navbar variant="dark" expand="lg" style={{ background: 'transparent' }}>
            <Navbar.Toggle className='navbar_toogle' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Link className='nav-item nav-link link' to='/acerca_de'>Acerca de</Link>
                    <Link className='nav-item nav-link link' to='/proyectos'>Proyectos</Link>
                    <Link className='nav-item nav-link link' to='/informacion'>Más información</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>)

    }
}