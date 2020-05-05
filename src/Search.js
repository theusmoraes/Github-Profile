import React from "react"
import "./Search.css"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Row, Col} from 'react-bootstrap'


export default class Search extends React.Component{
    state = {
        username: ""
    }
    handleChange = (event) =>{
            this.setState({username: event.target.value})
    }
    clickHandle = () =>{
        this.props.clickHandle(this.state.username)
    }
    render(){
        return (
            <div >
                <Col md={12}>
                <input className="search" type="text" placeholder="username" onChange={this.handleChange} />
                <button className="searchButton" onClick={this.clickHandle}><FontAwesomeIcon icon={faSearch} size={"lg"} /></button> 
                </Col>
            </div>
            )
    }
}