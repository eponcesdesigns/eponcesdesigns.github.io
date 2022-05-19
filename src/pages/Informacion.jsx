import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import SocialMedia from "../shared/SocialMedia";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { BsMessenger,BsFacebook,BsWhatsapp } from 'react-icons/bs'
export default class Informacion extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nombre: '',
            asunto: '',
            numero: '',
            correo: '',
            mensaje: '',
            showMin: false
        }
        this.validaciones={
            nombreCompuesto:  RegExp('([A-ZÁÉÍÓÚÜ]{1})([a-záéíóúü]+) ([A-ZÁÉÍÓÚÜ]{1})([a-záéíóúü]+)(( [A-ZÁÉÍÓÚÜa-záéíóúü]+)*)(( ([A-ZÁÉÍÓÚÜ]{1})([a-záéíóúü]+))*)(( ([A-ZÁÉÍÓÚÜ]{1})([a-záéíóúü]+))*)'),
            email: RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
            number:  RegExp("^[0-9]{10}$"),
        }
        this.emailJS_ENV={
            publicKey:"bi-_2CProMaSDmKYP",
            templateID:"template_4ofroei",
            serviceID:"eponcesdesign",
            }
        this.status=true
    }
    validarFormulario(){
        if(!this.validaciones.nombreCompuesto.test(this.state.nombre)){
            alert('Ingrese un nombre real');
            return false
        }
        if(!this.validaciones.number.test(this.state.numero)){
            alert('Ingrese un numero válido');
            return false
        }
        if(!this.validaciones.email.test(this.state.correo)){
            alert('Ingrese un correo real');
            return false
        }
        return true;
    }
    setStatus(){
        this.status=false
    }
    getStatus(){
        return this.status
    }
    setNombre(valor){
        this.setState({nombre: valor})
    }
    setAsunto(valor){
        this.setState({asunto: valor})
    }
    setNumero(valor){
        this.setState({numero: valor})
    }
    setCorreo(valor){
        this.setState({correo: valor})
    }
    setMensaje(valor){
        this.setState({mensaje: valor})
    }
    render(){
        const eventoSubmit=(e)=>{
            e.preventDefault()
            if (this.validarFormulario()) {
                this.getStatus() ? emailjs.send(this.emailJS_ENV.serviceID, this.emailJS_ENV.templateID, this.state, this.emailJS_ENV.publicKey).then(({ text }) => {
                    if(text === "OK"){
                        alert("Mensaje Enviado")
                        this.setStatus();
                    }else{
                        alert("Hubo un problema, favor de intentar más tarde")
                    }
                }) : alert("Tu mensaje ya se intentó enviar una vez")
                
            }
        }
        return(
        <>
        <Header />
        <SocialMedia/>
            <div className='contentBox'>
            <div align="center" className="mt-5">
            <h3 >Mas información</h3>
            <br/>
            </div>
            <Container className={this.showMin?'contactContainerMin':'contactContainerMax'} align="justify">
            <p>¿Tienes preguntas específicas que hacerme?</p>
            <p>Utiliza el siguiente formulario para contactar conmigo y yo responderé todas tus dudas!</p>
            </Container>
            <Container className={this.showMin?'contactContainerMin':'contactContainerMax'}>
                <Form onSubmit={eventoSubmit} >
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre <span className="asterisco">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Tu nombre"
                        value={this.state.nombre}
                        onChange={(e)=>this.setNombre(e.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Asunto <span className="asterisco">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Asunto del mensaje"
                        value={this.state.asunto}
                        onChange={(e)=>this.setAsunto(e.target.value)}  maxLength="20" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Número de contacto <span className="asterisco">*</span></Form.Label>
                        <Form.Control type="text" placeholder="Tu número de teléfono" 
                        value={this.state.numero}
                        onChange={(e)=>this.setNumero(e.target.value)} minLength='10' maxLength='10'
                        required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo <span className="asterisco">*</span></Form.Label>
                        <Form.Control type="email" placeholder="Tu correo"
                        value={this.state.correo}
                        onChange={(e)=>this.setCorreo(e.target.value)}
                        required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mensaje <span className="asterisco">*</span></Form.Label>
                        <FormControl as="textarea" placeholder="Tu mensaje va aquí"
                        value={this.state.mensaje}
                        onChange={(e)=>this.setMensaje(e.target.value)}
                        required />
                        <Form.Text>
                        <p className="text-muted">Tus datos no se compartirán con nadie.<br/>
                        Los campos <span className="asterisco">(*)</span> son obligatorios.</p>     
                    </Form.Text>
                    </Form.Group>
                    <Container align="center" className="d-grid">
                    <Button variant="secondary" type="submit">
                        Enviar Mensaje
                    </Button>
                    </Container>
                    </Form>
                    </Container>
                     <Container>
                    <Container className={this.showMin?'contactContainerMin p-2':'contactContainerMax p-2'} align="justify">
                    <br/><p>O puedes contactarme a través de mis redes sociales...</p>
                    </Container>
                    <Container align="center">
                        <h3><a href='https://www.facebook.com/eponcecode/' target="_blank" rel="noreferrer" className="facebooki"><BsFacebook/></a>
                        <a href='https://m.me/eponcecode/' target="_blank" rel="noreferrer" className="messengeri m-3"><BsMessenger/></a>
                        <a href='https://wa.me/+5212228554212/' target="_blank" rel="noreferrer" className="whatsappi"><BsWhatsapp/></a> </h3>
                    </Container>
                </Container>
            </div>
            <Footer/>
        </>
        )
    }
}