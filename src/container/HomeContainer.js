import React, { Component } from 'react'
import TableComponent from '../component/TableComponent'

export default class HomeContainer extends Component {
    render() {
        return (
            <div>
                <TableComponent users={this.props.users} />
            </div>
        )
    }
}
