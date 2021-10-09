import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
          <div className="contact-area">
            <div className="contact-overlay">
                <div className="container">
                          <div className="title-section">
                              <h1>Stay with us</h1>
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
                                            <div className="mb-3">
                                               <input type="password" name="password" id="" placeholder="Re-Enter Password" className="form-control" />
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
                                                  <p>Already have an Account ? <Link to="/login">Log In</Link></p>
                                                    <button className="btn-color">Google Sign In</button>
                                             </div>
                                           
                                    </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Register;