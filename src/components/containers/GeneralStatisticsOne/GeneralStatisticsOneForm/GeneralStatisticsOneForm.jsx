import React, { useEffect } from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../../../common/Button/index';
import { Select } from '../../../common/FormsControls/FormsControls';
import InputDate from './../../../common/Date/Date';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCurrentOrganization } from '../../../../redux/reducers/initialize-values-in-form';
import { compose } from 'redux';


let GeneralStatisticsOneForm = 
({ error, handleSubmit, orgList,
    setCurrentOrganization, id }) => {
    
    const orgListForSelect = orgList.map(i => ({ id: i.idOrganization, value: i.orgName }))

    useEffect(() => {
        setCurrentOrganization(id)
    }, [setCurrentOrganization, id])

    return (
        <form onSubmit={handleSubmit} >
            <Row>
                <Col md={8}>
                    <Field name='organization'
                        component={Select}
                        data={orgListForSelect}
                        type='select'
                        label='Выберите образовательную организацию'
                    />
                </Col>
                <Col >
                    <Field name='date'
                        component={InputDate}
                        type='date'
                    />
                </Col>
                <Col>
                    <Button type='submit' label={"Составить"}></Button>
                </Col>
                {error && <span>{error}</span>}
            </Row>
        </form>
    );
};



export default compose(
    connect(state => ({ initialValues: state.initForm.data }),
        { setCurrentOrganization }),
    reduxForm({ form: 'generalStatOne', enableReinitialize: true }),
)(GeneralStatisticsOneForm)