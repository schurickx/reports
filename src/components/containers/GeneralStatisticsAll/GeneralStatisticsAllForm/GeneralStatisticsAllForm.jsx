import React, {useEffect} from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../../../common/Button/index';
import Date from './../../../common/Date/Date';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';

const GeneralStatisticsAllForm = (props) => {

    const { handleSubmit, submitting } = props

    return (
        <form onSubmit={handleSubmit} >
            <Row>
                <Col md="auto">
                    <Field name='date'
                        component={Date}
                        type='date'
                    />
                </Col>
                <Col md="auto">
                    <Button type='submit' label={"Составить"} submitting={submitting}></Button>
                </Col>
            </Row>
        </form>
    );
};

export default compose(
    connect(state => ({ initialValues: state.initForm.data })),
    reduxForm({ form: 'generalStatAll' }),
)(GeneralStatisticsAllForm)