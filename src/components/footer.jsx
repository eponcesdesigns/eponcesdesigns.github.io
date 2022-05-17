import React from "react";
import { Card, Container } from "react-bootstrap";

export default class Footer extends React.Component{
    render(){
        return(<>
             <Card bg="dark" text="light" >
            <Card.Footer className="footerBox">
                <Container align="center">
                    © Copyright by eponce
                </Container>
            </Card.Footer>
</Card>
        </>)
    }
}