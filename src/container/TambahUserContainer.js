import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackComponent from '../component/BackComponent'
import FormComponent from '../component/FormComponent'
import { connect } from 'react-redux'
import { postAddUser } from '../actions/userAction'


class TambahUserContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(postAddUser(data))
    }

    render() {
        return (
            <div>
                <Container>
                    <BackComponent />
                    <h1 className="text-center">Add User</h1>
                    <hr />
                    <FormComponent onSubmit= {(data) => this.handleSubmit(data)} />
                </Container>
            </div>
        )
    }
}


export default connect() (TambahUserContainer);