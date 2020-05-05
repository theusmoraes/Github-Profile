import React from "react"
import Search from "./Search"
import PainelCards from "./PainelCards"
import "./App.css"
import {Container, Row, Col} from 'react-bootstrap'


export default class App extends React.Component{
    state = {
        githubInfo: null
    }
      callApi = async (username) =>{
        const response =  await fetch("https://api.github.com/users/" + username);
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message);
        return body;
    }
    handleclick = async (username) =>{
         await this.callApi(username)
         .then(res =>this.setState({githubInfo: res})
             )
         .catch(err => console.log(err));
        //  console.log(this.state.githubInfo)
    }
    render(){
        return (
                <div className="component-app">
                <Row>
                    <Search clickHandle={this.handleclick}></Search>
                </Row>
                <Row>
                    <Col md={12}>
                        {this.state.githubInfo? <PainelCards githubinfo={this.state.githubInfo}></PainelCards> : null}

                    </Col>
                </Row>
            </div>

        )
    }
}