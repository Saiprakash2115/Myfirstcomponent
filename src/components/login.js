import React from "react";
import './login.css'
import { useNavigate } from 'react-router-dom';
import google from './g-logo.png';
import loginPhoto from './login-page-photo.png'

function Login()
{
    const navigate = useNavigate();
    const signUpNavigate = () => {
        navigate('/signup');
      };
    return(
        <div>

<div className  ="signUPFormMain py-2 p-2 ">
        <div className="container p-4 ">
            <div className="row innerContainer">

                {/* <!-- container 1 - login form --> */}
                <div className="col-md-6 formDetails p-4 ">
                    <div className="text-center">
                        <h3 className="createHeading p-0">Login</h3>
                            <span className="heaadingText ">It only takes a couple of minutes to get started!</span>
                    </div>

                    {/* <!-- form --> */}

                <div className="p-4">
                     
                    <form action="" className="d-flex flex-column ">

                        <label for="" className="m-1 formLabels ">Email ID</label>
                        <div className="eye p-1">
                            <input type="email" className=" inputElements form-control"
                            placeholder="Enter your email ID" id="userInput" />
                        </div>
                       




                        <label for="" className="m-1 formLabels">Password</label>
                        <div class="eye p-1 align-items-center">

                      
                        <input type="password" className=" inputElements form-control"
                            placeholder="Minimum 6 characters" id="passwordInput" />
                            <i className="fa-solid fa-eye-slash eyeIcon"></i>  </div>


                        <a className="forgot-password p-1" href="#"> Forgot password ?</a>
                        <button className="p-2 m-2 registerButton">Login</button>
                        <a className="loginOTP p-3 m-2" href="#"> Login Via OTP</a>

                        <div className="emailLoginContainer p-1 "> <a href="#" className="emailLogin p-1"><img
                                    src={google} width="40" alt="" className="p-1" /> sign in with google</a>
                        
                    </div>
                    </form>
                    <div className="text-center align-items-center justify-content-center">
                      <button className="p-2 mt-4 w-50 imgRegisterButton d-md-none justify-content-center" onClick={signUpNavigate}>Register for free</button> 
                    </div>
                    
                </div>

                </div>

                {/* <!-- container 2 - details container--> */}
                <div className="detailsContainer d-none d-md-block
             col-md-5">
                    <div className="card-container detailsImageContainer text-center w-75 p-4 ">
                        <span className="login-image-container ">New to Pabjobs?</span>
                        <img src={loginPhoto} alt="" className="w-100 detailsImage" id="changeImage" /> 

                    </div>

                    <div className="image-text-container">
                        <i className="fa-solid fa-check icon-item mt-5 checkDetailsIcon "></i>
                        <span className=" span-item m-3">One click apply using pabjibs profile.</span>
                    </div>
                    <div className="image-text-container">
                        <i className="fa-solid fa-check icon-item mt-3 checkDetailsIcon "></i>
                        <span className=" span-item m-3">Get relevant job recommendations</span>
                    </div>
                    <div className="image-text-container">
                        <i className="fa-solid fa-check icon-item mt-3 checkDetailsIcon "></i>
                        <span className=" span-item m-3">Show case profile to top companies and consultants</span>
                    </div>
                    <div className="image-text-container">
                        <i className="fa-solid fa-check icon-item mt-3 checkDetailsIcon "></i>
                        <span className=" span-item m-3">Know application status on applied jobs</span>
                    </div>
                   <button className="p-2 mt-4 w-50 imgRegisterButton " onClick={signUpNavigate}>Register for free</button>

                </div>




            </div>
        </div>
    </div>



        </div>
    );

}
export default Login