import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackComponent from '../component/BackComponent'

export default class DetailUserContainer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <BackComponent />
                    <h1>Detail</h1>
                </Container>
            </div>
        )
    }
}
