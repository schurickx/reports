import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import styles from './Login.module.css'
import { authRequestStart } from '../../redux/reducers/auth-reducer';
import LoginForm from './LoginForm';
import { SubmissionError, startSubmit } from 'redux-form';




const Login = ({authData, error, authRequestStart, startSubmit}) => {

    const onSubmit = ({ username, password}) => {
        startSubmit('login')
        authRequestStart(username, password)
    }

    let history = useHistory()

    useEffect(() => {
        if (authData) history.push('/')
    }, [authData, history])

    return (
        <div className={styles.container}>
            <Row noGutters>
                <Col md={{ span: 6, offset: 3 }}>
                    <div className={styles.label}>
                        Пожалуйста, авторизуйтесь                        
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.userIcon} />
                    </div>
                    <div className={styles.inputContainer}>
                    <LoginForm onSubmit={onSubmit} />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

const mapStateToProps = ({auth}) => ({
    authData: auth.data,
    error: auth.error
})


export default connect(mapStateToProps, {
    authRequestStart,
    startSubmit
})(Login);