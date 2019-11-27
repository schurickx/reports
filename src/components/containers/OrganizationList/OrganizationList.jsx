import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { organizationList } from './../../../redux/reducers/organization-list-reducer';
import Spinner from '../../common/Spinner';
import OrganizationListTable from './OrganizationListTable/OrganizationListTable';

const OrganizationList = ({ auth, orgList, organizationListStart, isLoading }) => {

    useEffect(() => {
        if (orgList !== undefined && orgList.length === 0) {
            organizationListStart(auth)
        }
    }, [organizationListStart, auth])

    return (
        <div className="main">
            {isLoading && <Spinner />}
            {!isLoading && <OrganizationListTable data={orgList} />}
        </div>
    );
};

const mapState = state => ({
    orgList: state.reports.orgList.data,
    isLoading: state.reports.orgList.isLoading,
    auth: state.auth.data,

})

export default connect(mapState, {
    organizationListStart: organizationList.organizationListRequestStart
})(OrganizationList);