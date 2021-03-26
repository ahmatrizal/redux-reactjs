import React, { Component } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class BackComponent extends Component {
    render() {
        return (
            
                <Row>
                    <Col>
                    <Link to={"/"}>
                        <Button className="mr-2" variant="outline-dark">
                            <FontAwesomeIcon icon={faArrowLeft} />Back
                        </Button>
                    </Link>
                    
                    </Col>
                </Row>
            
        )
    }
}
