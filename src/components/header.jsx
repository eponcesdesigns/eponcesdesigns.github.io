import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../shared/menu';
export default class Header extends React.Component{
    render(){
        return(<>
        
            <div className='headerBox'>
            <Menu/>
            <Link className='navbar-brand link' to="/"><h1>eponce's</h1> <h4>Designs</h4></Link>
            </div>
        </>)
    }
}