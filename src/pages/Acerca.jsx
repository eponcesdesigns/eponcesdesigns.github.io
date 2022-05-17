import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SocialMedia from "../shared/SocialMedia";
export default class Acerca extends React.Component{
    render(){
        return(<>
        <Header/>
        <SocialMedia/>
        <div className="contentBox">
            <div align="center" className="mt-5">
            <h3 >Acerca de</h3>
            </div>
            <div>
                <p>¡Hola! <br /> soy eponce...</p>
            </div>
            <div>
                <p>Recientemente terminé mi carrera en Ciencias de la Computación y ahora tú y yo estamos construyendo juntos este proyecto.</p>
            </div>
            <div>
                <p>El crecer como diseñadora web es uno de mis más grandes sueños y la razón por la cual decidí estudiarlo, <br/>
                y ahora, que tenemos todo listo podemos comenzar este sueño.</p>
            </div>
            <div>
                <p>Seamos realistas, aunque sea un sueño queremos algo real y funcional</p>
            </div>
            <div>
                <p>Por eso mi idea comienza de la siguiente manera:</p>
            </div>
            <div>
                <p>1. La aplicación web se centra en las necesidades de tu negocio.</p>
                <p>2. Se busca ser lo más accesible económicamente.</p>
                <p>3. Tanto la paleta de colores (los colores del sitio web) como los elementos ella (sea visile o no) son a petición del cliente (usted).</p>
                <p>Cabe mencionar que el cliente (usted) podrá ver los avances y realizar ajustes sobre la marcha.</p>
            </div>
            <div>
                <p>Así es básicamente la idea, por ello, si estás interesado te recomiendo seguir los siguientes pasos:</p>
            </div>
            <div>
                <p>1. Comunicarte conmigo, cuéntame acerca de tu negocio y sus necesidades.</p>
                <p>2. Cuéntame como te imaginas tu sitio web (puedes ayudarte de otras paginas o imágenes como referencia).</p>
                <p>3. Ajustamos presupuesto ante la carga de trabajo, se acepta por ambas partes (cliente y programador) y listo!</p>
                <p>¡Comenzamos a trabajar!</p>
            </div>
        </div>
        <Footer/>
        </>)
    }
}