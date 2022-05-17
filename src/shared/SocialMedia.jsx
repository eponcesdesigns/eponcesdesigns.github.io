import React from 'react';
import 'primeicons/primeicons.css';
import { Link } from 'react-router-dom';
export default class SocialMedia extends React.Component{
    
    render()
    { return(<>
        <div className='socialBox'>
            <a target="_blank" rel="noreferrer" 
            href="https://www.facebook.com/eponcecode/"><i className='socialText facebook nav-link pi pi-facebook '/></a>
            <a target="_blank" rel="noreferrer" href="https://wa.me/+5212228554212"><i className='socialText whatsapp nav-link pi pi-whatsapp'/></a>
            <Link className='socialText correo nav-link pi pi-envelope' to="/informacion"/>
            </div>
        </>)

    }
}