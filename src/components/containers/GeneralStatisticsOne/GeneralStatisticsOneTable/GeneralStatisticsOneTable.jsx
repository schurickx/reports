import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { headerStyle, cellStyle } from '../../../../utils/configTable';
import styles from './GeneralStatisticsOneTable.module.css'
import { CaptionTable } from './../../../common/CaptionTable/CaptionTable'



const GeneralStatisticsOneTable = (props) => {

    const footerTotal = (columnData) => columnData.reduce((acc, item) => acc + Number(item), 0)
    const formatCell = (fiels) => (cell, row) => row[fiels] != 0 ? cell : null
    const fontWeight = (cell, row) => row.is_header == 1 ? { fontWeight: '800' } : null

    const columns = [{
        dataField: 'num',
        text: '№ показателя',
        headerStyle: headerStyle(9),
        style: cellStyle(),
        footer: '',
        formatter: formatCell('num'),
    }, {
        dataField: 'unit_text',
        text: 'Показатель',
        headerStyle: headerStyle(50),
        footer: () => (<strong>ИТОГОВЫЙ РЕЗУЛЬТАТ</strong>),
        footerAlign: 'center',
        style: fontWeight,
    }, {
        dataField: 'unit_type',
        text: 'Единица измерения',
        headerStyle: headerStyle(),
        style: cellStyle(),
        formatter: formatCell('coef'),
        footer: '',
    }, {
        dataField: 'source_value',
        text: 'Значение',
        headerStyle: headerStyle(),
        style: cellStyle(),
        formatter: formatCell('num'),
        footer: ''
    }, {
        dataField: 'coef',
        text: 'Коэф',
        headerStyle: headerStyle(),
        style: cellStyle(),
        formatter: formatCell('num'),
        footer: ''
    }, {
        dataField: 'value',
        text: 'Результат',
        headerStyle: headerStyle(),
        style: cellStyle(),
        formatter: formatCell('num'),
        footer: footerTotal,
        footerAlign: 'center'
    }];

    return <BootstrapTable keyField='sortnum' data={props.data} columns={columns} footerClasses={styles.footer}
        caption={<CaptionTable>Показатели оценки довузовских общеобразовательных организаций Минобороны России</CaptionTable>}
        bootstrap4
        striped condensed />
};

export default GeneralStatisticsOneTable;