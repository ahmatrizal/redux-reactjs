import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
/* {
    dataField: 'umur',
    text: 'Umur'
}, {
    dataField: 'nohp',
    text: 'No Hp'
}, */ {
    dataField: 'link',
    text: 'Action',
    formatter: (rowContent, row) => {
        return (
            <div>
                <Button className="mr-2" variant="outline-dark">
                    <FontAwesomeIcon icon={faInfo} />Detail
                    </Button>
                <Button className="mr-2" variant="outline-dark">
                    <FontAwesomeIcon icon={faEdit} />Edit
                    </Button>
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


const TableComponent = (props) => {
    return (
        <Container>
            <ToolkitProvider
                keyField="id"
                data={props.users}
                columns={columns}
                search
                defaultSorted={defaultSorted}
            >
                {
                    props => (
                        <div>
                            <div className="float-right">
                            <SearchBar {...props.searchProps} />

                            </div>
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={ paginationFactory() }
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
           

        </Container>
    )
}

export default TableComponent
