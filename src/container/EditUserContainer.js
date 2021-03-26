import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackComponent from '../component/BackComponent'


export default class EditUserContainer extends Component {
    render() {
        return (
            <div>
            <Container>
                <BackComponent />
                <h1>Edit</h1>
            </Container>
        </div>
        )
    }
}
