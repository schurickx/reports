import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { headerStyle, cellStyle } from '../../../../utils/configTable';

const OrganizationListTable = ({ data }) => {


    const formatCell = (cell, row) => {
        return cell == 1 ? '✔' : ''
    }

    const columns = [{
        dataField: 'id',
        text: '',
        headerStyle: headerStyle(5),
        style: cellStyle(),
        formatter: (cell, row, rowIndex) => rowIndex + 1
    }, {
        dataField: 'orgName',
        text: 'Образовательные организации',
        headerStyle: headerStyle(),
    }, {
        dataField: 'isSchool',
        text: 'Школа',
        headerStyle: headerStyle(10),
        style: cellStyle(),
        formatter: formatCell
    }];


    return (
        <BootstrapTable keyField='orgName' data={data} columns={columns} striped bootstrap4 />
    )
};

export default OrganizationListTable