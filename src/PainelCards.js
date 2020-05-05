import React from "react"
import "./PainelCards.css" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faUsers, faBook, faStar, faCodeBranch} from "@fortawesome/free-solid-svg-icons"
import {Container, Row, Col, Card} from 'react-bootstrap'
import Cards from './Cards'



export default class PainelCards extends React.Component{
    state = {
        reposInfo: null,
        cont : 0
    }
     callApi = async (repos_url) =>{
       const response = await fetch(repos_url)
       const body = response.json()
       if (response.status !== 200) throw Error(body.message);
       return body;

    }
    componentDidMount(props) {
         this.callApi(this.props.githubinfo.repos_url)
        // .then(res=> console.log(res))
        .then(res => this.setState({reposInfo: res}))
        .catch(err => console.log(err));
    }
    componentDidUpdate(prevProps){
        if (this.props.githubinfo.repos_url !== prevProps.githubinfo.repos_url){
            this.callApi(this.props.githubinfo.repos_url)
            // .then(res=> console.log(res))
            .then(res => this.setState({reposInfo: res}))
            .catch(err => console.log(err));
        }
   }

    render() {
        const iconImage = this.props.githubinfo.avatar_url
        let lastProjects = null
        this.state.reposInfo ? lastProjects = this.state.reposInfo.slice(0, 4) : lastProjects = null
        console.log(lastProjects)
        return(
            <div className="PainelCards">
     
                    <Row>
                        <Col lg={12}>
                            <Row>    
                                <Col md={3}>
                                    <Row>    
                                        <img style={{width:200,height:200}} src={iconImage}></img>
                                    </Row>    

                                    <Row className="texts">
                                        <FontAwesomeIcon icon={faGithub} size={"lg"} style={{marginRight: "10px"}}></FontAwesomeIcon> 
                                        <p>{this.props.githubinfo.login}</p>
                                    </Row>
                                    <Row >
                                        <FontAwesomeIcon icon={faUsers} size={"lg"} style={{marginRight: "10px"}}></FontAwesomeIcon> 
                                        <p>{this.props.githubinfo.followers} followers</p>
                                    </Row>
                                    <Row >
                                        <FontAwesomeIcon icon={faBook} size={"lg"} style={{marginRight: "10px"}}></FontAwesomeIcon> 
                                        <p>{this.props.githubinfo.public_repos} repos</p>
                                    </Row>                             
                                </Col>
                                    <Col md={7}>
                                        <Row>
                                            {lastProjects? lastProjects.map((project)=> {
                                                return (
                                                   <Cards project={project}></Cards>
                                                )
                                            }):null} 

                                        </Row>

                                    </Col>



                                    {/* {lastProjects?lastProjects.map(function(project){
                                        return( 
                                        <Col md={6}>
                                            <h1>A</h1>
                                        </Col>)
                                    }): null} */}
                            </Row>
                        </Col>
                        
                    </Row>
            </div>
        )
    }
}
