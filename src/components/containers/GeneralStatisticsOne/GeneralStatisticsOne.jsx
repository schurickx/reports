import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { generalStatOneAction } from '../../../redux/reducers/general-statistic-one-reducer'
import Spinner from '../../common/Spinner';
import { organizationList } from '../../../redux/reducers/organization-list-reducer';
import GeneralStatisticsOneTable from './GeneralStatisticsOneTable/GeneralStatisticsOneTable';
import GeneralStatisticsOneForm from './GeneralStatisticsOneForm/GeneralStatisticsOneForm';
import {useParams, useHistory} from 'react-router-dom'
import { setCurrentDate } from './../../../redux/reducers/initialize-values-in-form';



const GeneralStatisticsOne = ({
    auth, data, orgList, isLoadingTable, isLoadingList, setCurrentDate,
    generalStatisticsOneStart, organizationListStart, currentDate
}) => {

    const {id} = useParams()
    let history = useHistory();

    useEffect(() => {        
        if (orgList !== undefined && orgList.length === 0) {
            organizationListStart(auth)
        } 
    }, [organizationListStart, auth])

    useEffect(() => {
        if (id) generalStatisticsOneStart({ ...auth, id, date: currentDate })        
    }, [generalStatisticsOneStart, auth, id, currentDate])

    const onSubmit = ({ organization, date }) => {
        setCurrentDate(date)
        history.push(organization)
    }
    
    const list = orgList && orgList.length > 0 ? <GeneralStatisticsOneForm id={id} onSubmit={onSubmit} orgList={orgList} /> : null
    const table = data && data.length > 0 ? <GeneralStatisticsOneTable data={data} /> : null
    
    return (
        <div className="main">
            {isLoadingList && <Spinner />}
            {list}
            {!isLoadingTable && table}
            {isLoadingTable && <Spinner />}
        </div>
    );
};

const mapState = state => ({
    auth: state.auth.data,
    data: state.reports.generalOne.data,
    orgList: state.reports.orgList.data,
    isLoadingTable: state.reports.generalOne.isLoading,
    isLoadingList: state.reports.orgList.isLoading,
    currentDate: state.initForm.data.date
})

export default connect(mapState, {
    generalStatisticsOneStart: generalStatOneAction.generalStatisticsOneRequestStart,
    organizationListStart: organizationList.organizationListRequestStart,
    setCurrentDate: setCurrentDate
})(GeneralStatisticsOne);