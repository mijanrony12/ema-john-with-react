import React from 'react';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const { user, signInUsingGoogle } = useAuth()
    const location = useLocation()
    const history= useHistory()
    const redirect_url = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
            history.push(redirect_url)
        })
    }
    return (
          
        <div className="contact-area">
            <div className="contact-overlay">
                <div className="container">
                          <div className="title-section">
                              <h1>Login Ema-jhon</h1>
                              <p>we ensure quality support</p>
                          </div>
                        <div className="fulll-form">
                                <div className="row  justify-content-center">
                                    <div className="col-md-6">
                                        <form onSubmit="">
                                            <div className="mb-3">
                                                <input type="text" placeholder="Full Name" className="form-control"/>
                                            </div>
                                            <div className="mb-3">
                                                <input type="email" placeholder="Email Address" className="form-control"/>
                                            </div>
                                            <div className="mb-3">
                                               <input type="password" name="password" id="" placeholder="Your Password" className="form-control" />
                                            </div>
                                            <div className="btn-area">
                                                <div className="sub">
                                                    <input type="checkbox"/>
                                                   <label for="sub">Subscribe Newsletter</label>
                                                </div>
                                                <div classNameName="btn-color">
                                                    <input  classNameName="btn-color" type="submit" value="Log In" />
                                                </div>
                                            </div>
                                    </form>
                                            <div>
                                                  <p>new to ema-jhon <Link to="/register">Create Account</Link></p>
                                                    <button className="btn-color" onClick={handleGoogleLogin}>Google Sign In</button>
                                             </div>
                                           
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
      
    );
};

export default Login;