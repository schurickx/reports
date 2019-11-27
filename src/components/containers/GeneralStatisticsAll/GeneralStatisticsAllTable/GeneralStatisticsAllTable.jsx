import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { headerStyle, cellStyle } from '../../../../utils/configTable';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const GeneralStatisticsAllTable = ({ data }) => {

    const formatisSchool = (cell, row) => {
        return cell == 1 ? '✔' : ''
    }
    const formatSumm = (cell, row) => {
        return <Link to={`/reports/general_statistic_one/${row.id}`}>{cell}</Link>
    }

    const NumberSorted = (a, b, order, dataField) => order === 'asc' ? b - a : a - b

    const columns = [{
        dataField: 'id',
        text: '',
        headerStyle: headerStyle(5),
        style: cellStyle(),
        formatter: (cell, row, rowIndex) => rowIndex + 1
    }, {
        dataField: 'name',
        text: 'Учебное заведение',
        headerStyle: headerStyle(65),
        sort: true,
    }, {
        dataField: 'isSchool',
        text: 'Школа',
        headerStyle: headerStyle(10),
        style: cellStyle(),
        sort: true,
        formatter: formatisSchool
    }, {
        dataField: 'summ',
        text: 'Суммарный балл',
        headerStyle: headerStyle(),
        style: cellStyle(),
        formatter: formatSumm,
        sort: true,
        sortFunc: NumberSorted
    }];

    return (
        <BootstrapTable keyField='id' data={data} columns={columns}
            striped bootstrap4 />
    );
};

export default withRouter(GeneralStatisticsAllTable);