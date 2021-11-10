import React from 'react'
import {
    useState
} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import jwt_decode from 'jwt-decode'
import { axiosPost } from '@utils/axios'

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export const PageLogin = props => {

    const [login, setLogin] = useState('login@gmail.com');
    const [password, setPassword] = useState('password');

    console.log(login)

    // return (


    //     <Router>
    //         <Redirect push to="/dashboard/else" />
    //     </Router>


    // )

    const handlerLogin = async (event) => {
        event.preventDefault();
        const response = await axiosPost('dashboard/login', {
            login,
            password
        })

        console.log(response)
        if (response.status) {
            const payload = jwt_decode(response.data.session)
            console.log('Payload', payload)
            localStorage.setItem('access', response.data.session)
        }

        // console.log(verify(response.session, process.env.JWT_ACCESS_SECRET_KEY))

        // console.log(process.env.JWT_ACCESS_SECRET_KEY)
        // console.log(result)
    }

    return (
        <div className="login-box">
            <div className="login-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
            </div>

            {/* /.login-logo */}
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" 
                                value={login} onChange={(event) => setLogin(event.target.value)} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password"
                                value={password} onChange={(event) => setPassword(event.target.value)} />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            {/* /.col */}
                            <div className="col-4">
                                <button type="button" className="btn btn-primary btn-block" onClick={handlerLogin}>Sign In</button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>
                    <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                        </a>
                    </div>

                    {/* /.social-auth-links */}
                    <p className="mb-1">
                        <a href="forgot-password.html">I forgot my password</a>
                    </p>
                    <p className="mb-0">
                        <a href="register.html" className="text-center">Register a new membership</a>
                    </p>
                </div>

                {/* /.login-card-body */}
            </div>
        </div>
    )
}