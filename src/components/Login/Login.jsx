import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from './../../common/FormsControls/FormsControls.module.css'

const Login = (props) => {
        const onSubmit = (formData) => {
            props.login(formData.email, formData.password, formData.rememberMe)
        }

        if (props.isAuth) {
            return <Navigate to={"/profile"}/>
        }

        return (
            <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        );
    }
;

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    component={"input"}
                    name={"rememberMe"}
                    type="checkbox"
                /> Remember me
            </div>
            {props.error && <div className={style.formSummuryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export const LoginContainer = connect(mapStateToProps, {login})(Login)
