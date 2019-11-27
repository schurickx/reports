import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './GeneralStatisticsAll.module.css'
import { generalStatAllAction } from '../../../redux/reducers/general-statistic-all-reducer'
import Spinner from '../../common/Spinner/index';
import GeneralStatisticsAllTable from './GeneralStatisticsAllTable/GeneralStatisticsAllTable';
import GeneralStatisticsAllForm from './GeneralStatisticsAllForm/GeneralStatisticsAllForm';
import { organizationList } from '../../../redux/reducers/organization-list-reducer';
import { setCurrentDate } from './../../../redux/reducers/initialize-values-in-form';
import { startSubmit } from 'redux-form';


const GeneralStatisticsAll = ({ auth, data, generalStatisticsAllStart, 
    isLoading, orgList, organizationListStart, setCurrentDate, startSubmit }) => {

    useEffect(() => {
        if (orgList !== undefined && orgList.length === 0) {
            organizationListStart(auth)
        }
    }, [organizationListStart, auth])

    const onSubmit = ({ date }) => {
        // startSubmit('generalStatAll') // для блокировки кнопки во время загрузки
        setCurrentDate(date)
        generalStatisticsAllStart({ ...auth, date })
    }

    const table = data && data.length > 0 ? <GeneralStatisticsAllTable data={data} /> : null

    return (
        <div className="main">
            <GeneralStatisticsAllForm onSubmit={onSubmit} />
            {isLoading && <Spinner />}
            {!isLoading && table}
        </div>
    );
};

const mapState = state => ({
    auth: state.auth.data,
    data: state.reports.generalAll.data,
    isLoading: state.reports.generalAll.isLoading,
    orgList: state.reports.orgList.data,
})

export default connect(mapState, {
    generalStatisticsAllStart: generalStatAllAction.generalStatisticsAllRequestStart,
    organizationListStart: organizationList.organizationListRequestStart,
    setCurrentDate: setCurrentDate,
    startSubmit
})(GeneralStatisticsAll);