import React from "react"
import {Container, Row, Col, Card} from 'react-bootstrap'
import {faUsers, faBook, faStar, faCodeBranch} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Card.css" 

export default class Cards extends React.Component{
    
    render(){
        return(
                
            <Col md={6}>
                <Card style={{ width: '18rem', height:"8rem", marginBottom: "20px" }} bg={"light"} text={"dark"}>
                <Card.Header > <a href={this.props.project.html_url}><b>{this.props.project.name} </b></a></Card.Header>

                    <Card.Body style={{paddingLeft: "15px", paddingTop:"5px"}}>
                        <Card.Text style={{fontSize: "13px"}}>
                            <Row>
                                <Col md={4}>
                                    <Row>

                                        <FontAwesomeIcon icon={faStar} size={"lg"} style={{marginLeft: "10px", marginRight: "10px", color: "yellow"}}></FontAwesomeIcon> {this.props.project.stargazers_count} 

                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <FontAwesomeIcon icon={faCodeBranch} size={"lg"} style={{marginRight: "10px", color: "yellow"}}></FontAwesomeIcon> {this.props.project.forks} 
                                    
                                </Col>
                            </Row>
                            {this.props.project.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    )
    }
}