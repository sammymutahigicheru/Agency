import React, {Component} from 'react';
import {withFormik} from 'formik';
import Field from '../common/Field';
import * as Yup from 'yup';

const field = [
    {name: 'email',elementName: 'input',type:'email',placeholder: 'Your Email'},
    {name: 'password',elementName: 'input',type: 'password',placeholder: 'Your Password'}
]

class Login extends Component{
    render(){
        return(
            <h1>Login</h1>
        )
    }
}
export default  withFormik({
    mapPropsToValues: () =>({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is invalid').required('You need to log in with email address'),
        password: Yup.string().required('You need to enter your password')
    }),
    handleSubmit: (values, {setSubmitting}) =>{
        console.log('Login attemp',values);
    }
})(Login);