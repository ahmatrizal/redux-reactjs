import React, { Component } from 'react'
import TableComponent from '../component/TableComponent'
import { connect } from 'react-redux'
import { delUserDetail, getUsersList } from '../actions/userAction'

class HomeContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getUsersList());
        this.props.dispatch(delUserDetail());
    }

    render() {
        return (
            <div>
                <TableComponent />
            </div>
        )
    }
}

export default connect()(HomeContainer)