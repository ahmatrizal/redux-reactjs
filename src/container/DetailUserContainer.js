import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BackComponent from '../component/BackComponent'
import { connect } from 'react-redux'
import { getUserDetail } from '../actions/userAction';
import DetailUserComponent from '../component/DetailUserComponent';

 class DetailUserContainer extends Component {
     componentDidMount() {
        this.props.dispatch(getUserDetail(this.props.match.params.id));
     }
    render() {
        return (
            <div>
                <Container>
                    <BackComponent />
                    <h1 className="text-center">Detail User</h1>
                    <hr />
                    <DetailUserComponent />
                </Container>
            </div>
        )
    }
}

export default connect() (DetailUserContainer);