import React from 'react';
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import style from './../../common/FormsControls/FormsControls.module.css'

const Login = ({login, isAuth}) => {
        const onSubmit = (formData) => {
            login(formData.email, formData.password, formData.rememberMe)
        }

        if (isAuth) {
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

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {CreateField("Email", "email", [required], Input, {}, "")}
                {CreateField("Password", "password", [required], Input, {type: "password"}, "")}
                {CreateField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}
            </div>
            {error && <div className={style.formSummuryError}>
                {error}
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
