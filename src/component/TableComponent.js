import React from 'react'
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle: () => {
        return { width: "5%" };
    },
    sort: true
}, {
    dataField: 'nama',
    text: 'Name',
    sort: true
}, {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true
},
{
    dataField: 'link',
    text: 'Action',
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"detail/" + row.id}>
                    <Button className="mr-2" variant="outline-dark">
                        <FontAwesomeIcon icon={faInfo} />Detail
                    </Button>
                </Link>
                <Link to={"edit/" + row.id}>
                    <Button className="mr-2" variant="outline-dark">
                        <FontAwesomeIcon icon={faEdit} />Edit
                    </Button>
                </Link>
                <Button className="mr-2" variant="outline-danger">
                    <FontAwesomeIcon icon={faTrash} />Delete
                    </Button>
            </div>
        )
    }

}];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

const mapStateToProps = (state) => {
    return {
        getUsersList: state.users.getUsersList,
        error: state.users.error
    }
}

const TableComponent = (props) => {
    return (
        <Container>
            { props.getUsersList ? <ToolkitProvider
                keyField="id"
                data={props.getUsersList}
                columns={columns}
                search
                defaultSorted={defaultSorted}
            >
                {
                    props => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to={"/tambah"}>
                                        <Button className="mr-2" variant="outline-dark">
                                            <FontAwesomeIcon icon={faUserPlus} />Add User
                                        </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <div className="float-right">
                                        <SearchBar {...props.searchProps} />

                                    </div>

                                </Col>
                            </Row>
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider> : <div className="text-center">
                { props.error ? <h4>{props.error}</h4> : <Spinner animation="grow" /> }
                
                </div>}



        </Container>
    )
}

export default connect(mapStateToProps, null)(TableComponent)
