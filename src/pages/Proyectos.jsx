import React from "react";
import { Container, Image } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import SocialMedia from "../shared/SocialMedia";
export default class Proyectos extends React.Component{
    render(){
        return(<>
         <Header/>
         <SocialMedia/>
            <div className="contentBox">
            <div align="center" className="mt-5"><h2>Proyectos</h2></div>
                <Container align="center" className="mt-5">
                <p>Estos son algunas de las páginas web que he creado...</p>
                </Container>
                <div align="center">
                <p>
                <Container>
                <a className="link" target="_blank" rel="noreferrer" href="https://latialita-v2.netlify.app">
                    <h3 >LA TÍA LITA</h3>
                    </a>
                    
                    <p><b>Sitio para una fotógrafa</b><br />
                    Contiene elementos básicos para muestra y envío de información con toda la seguridad que esto conlleva.
                    <br/>Contiene galería de imágenes personalizada.</p>
                    </Container>   
                </p>
                </div>
                <div align="center">                    
                <a target="_blank" rel="noreferrer" href="https://latialita-v2.netlify.app">
                    <Image className="imagen" src="img/latialita.png"></Image></a>
                </div>
                
            </div>
            <Footer/>
        </>)
    }
}