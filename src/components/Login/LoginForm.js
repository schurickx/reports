import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls';
import { required } from './../../utils/validators-form';
import Button from './../common/Button/index';
import FailedLogin from './FailedLogin';


let LoginForm = (props) => {

    const {error, handleSubmit, submitting} = props
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field name='username' component={Input} type='text'
                    validate={[required]}
                    placeholder='Логин' />
            </div>
            <div>
                <Field name='password' component={Input} type='password'
                    validate={[required]}
                    placeholder='Пароль' />
            </div>            
            <div>
                <Button type='submit' label={"Войти"} submitting={submitting}></Button>
            </div>
            {error && <FailedLogin message={error} />}
        </form>
    );
};

export default reduxForm({
    form: 'login'
})(LoginForm)