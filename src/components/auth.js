import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css'
import seekPic from './Telecommuting-pana (1).png';
import searchPic from './Vision statement-pana.png'

const Auth = () => {
    

    const [name, setName] = useState("jobseeker") // to change when clicked on radio input
    const navigate = useNavigate(); // function to navigate to login page when clicked on login button
    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div>


            <div className="signUPFormMain py-2 ">


                <div className='container p-4'>
                    <div className="row innerContainer">

                        <div className="col-md-6 formDetails p-4 m-4">
                            <div className="text-center ">
                                <h3 className="createHeading p-0">Create an account</h3>
                                <span className="heaadingText ">It only takes a couple of minutes to get started!</span>
                            </div>

                            <div className="row     p-4 align-items-center justify-content-center">

                                {/* login and signup buttons */}
                                <div className="col-md-6 changingButton">
                                    <button onClick={handleButtonClick} className="w-100 p-2 d-flex switchRoleRecruiter align-items-center ">
                                        <div id="loginText">Login</div>

                                    </button>
                                </div>
                                <div className="col-md-6 changingButton align-items-center text-center justify-content-center">
                                    <button className="w-100 switchRole d-flex p-2 align-items-center " >
                                        <div></div>
                                        <div id="signUpText">Sign up</div>
                                        <i className="fa-solid fa-check icon-item checkDetailsIcon" id="iconSymbol"></i>
                                    </button>
                                </div>

                                {/* jobseeker and recruiter buttons */}
                                <div className="col-md-12 changingButton align-items-center m-2" id="btn2">
                                    <button className="w-100 buttonContainer d-flex p-2 align-items-center text-center ">
                                        <span className="labe" id="label1">Job Seeker</span>
                                        <input type='radio' value="jobseeker" onChange={((e) => setName(e.target.value))} name='type'></input> <span className="betweenElement">|</span>
                                        <span className="labe " id="label2">Recruiter</span>
                                        <input type='radio' value="recruiter" onChange={((e) => setName(e.target.value))} name='type'></input>
                                    </button>

                                    {/* ternary operator function to change from jobseekers forms to recruiters forms - sign up */}
                                    {name === "jobseeker" ?
                                        (
                                            // jobseekers sign up forms
                                            <form action="" className="d-flex flex-column col-lg-12 ">
                                                <label for="" className="m-1" id="fullName">Full Name</label>
                                                <input type="text" className="m-1 p-2 inputElements form-control" id="fullNameInput"
                                                    placeholder="Enter your full name" />
                                                <label for="" className="m-1">Email ID</label>
                                                <input type="email" className="m-1 p-2 inputElements form-control"
                                                    placeholder="Enter your email ID" />
                                                <label for="" className="m-1">Password</label>
                                                <input type="password" className="m-1 p-2 inputElements form-control"
                                                    placeholder="Minimum 6 characters" />
                                                <label for="" className="m-1">Mobile Number</label>
                                                <div class="d-flex">


                                                    <div className="m-1">
                                                        <button className="num-item dropdown-toggle" data-bs-toggle="dropdown">+91</button>
                                                    </div>
                                                    <input type="text" className="m-1 p-2 inputElements form-control"
                                                        placeholder="Enter mobile number" />

                                                </div>
                                                <label for="" className="m-1" id="gender">Gender</label>

                                                <div className=" d-flex" id="genderOptions">
                                                    <div className=" p-2" id="genderOptionsDisappear1">
                                                        <input type="radio" name="answer" className="inputEle" id="answer1" />
                                                        <label for="answer1">Male</label>
                                                    </div>

                                                    <div className=" p-2  " id="genderOptionsDisappear2">
                                                        <input type="radio" name="answer" id="answer2" />
                                                        <label for="answer2">Female</label>
                                                    </div>
                                                    <div className=" p-2 " id="genderOptionsDisappear3">
                                                        <input type="radio" name="answer" id="answer3" />
                                                        <label for="answer3">Prefer Not to say</label>
                                                    </div>
                                                </div>

                                                {/* <!-- checkbox for whatsapp --> */}
                                                <div className="m-2">
                                                    <i className="fa-solid fa-check icon-item p-1 checkIcon"></i>
                                                    <span>I would like to get latest job updates on whatsapp</span>
                                                </div>
                                                {/* <!-- declaration --> */}
                                                <div className="m-2">
                                                    <p className="declarationText">By clicking Register, you agree to the terms and conditions &
                                                        privacy
                                                        policy of Pabjobs.com</p>
                                                    <button className="p-2 registerButton">Register Now</button>
                                                </div>
                                            </form>
                                        ) :
                                        (
                                            // recruiters sign up
                                            <form action="" className="d-flex flex-column col-lg-12 ">
                                                <label for="" className="m-1" id="fullName">Company Name</label>
                                                <input type="text" className="m-1 p-2 inputElements form-control" id="fullNameInput"
                                                    placeholder="Enter your company name" />
                                                <label for="" className="m-1">Email ID</label>
                                                <input type="email" className="m-1 p-2 inputElements form-control"
                                                    placeholder="Enter your email ID" />
                                                <label for="" className="m-1">Password</label>
                                                <input type="password" className="m-1 p-2 inputElements form-control"
                                                    placeholder="Minimum 6 characters" />
                                                <label for="" className="m-1">Mobile Number</label>
                                                <div className="d-flex">


                                                    <div className="m-1">
                                                        <button className="num-item dropdown-toggle" data-bs-toggle="dropdown">+91</button>
                                                    </div>
                                                    <input type="text" className="m-1 p-2 inputElements form-control"
                                                        placeholder="Enter mobile number" />

                                                </div>


                                                {/* <!-- checkbox for whatsapp --> */}
                                                <div className="m-2">
                                                    <i className="fa-solid fa-check icon-item p-1 checkIcon"></i>
                                                    <span>I would like to get latest job updates on whatsapp</span>
                                                </div>
                                                {/* <!-- declaration --> */}
                                                <div className="m-2">
                                                    <p className="declarationText">By clicking Register, you agree to the terms and conditions &
                                                        privacy
                                                        policy of Pabjobs.com</p>
                                                    <button className="p-2  btn registerButton">Register Now</button>
                                                </div>
                                            </form>
                                        )}
                                </div>


                            </div>

                        </div>

                        {/* right side container which have image */}
                        <div className="detailsContainer d-none d-md-block
                    col-md-4">

                            {/* ternary operator function to change from jobseekers image to recruiters image */}

                            {name === "jobseeker" ?
                                (
                                    // jobseekers image
                                    <div>
                                        <div className="mt-4">
                                            <img src={searchPic} alt="" className=" detailsImage"
                                                id="changeImage" />

                                        </div>

                                        <div className=''>
                                            <i className="fa-solid fa-check icon-item mt-5 checkDetailsIcon "></i>
                                            <span className=" span-item m-4">Build your profile and let recruiters find you</span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-check icon-item mt-4 checkDetailsIcon "></i>
                                            <span className=" span-item m-4">Get job postings delivered right to your email</span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-check icon-item mt-4 checkDetailsIcon "></i>
                                            <span className=" span-item m-4">Find a job and grow your career</span>
                                        </div>
                                    </div>
                                ) :
                                (
                                    // recruites image
                                    <div>
                                        <div className="mt-4">
                                            <img src={seekPic} alt="" className=" detailsImage"
                                                id="changeImage" />

                                        </div>

                                        <div>
                                            <i className="fa-solid fa-check icon-item mt-5 checkDetailsIcon "></i>
                                            <span className=" span-item m-4">Build your business profile and find candidates</span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-check icon-item mt-4 checkDetailsIcon "></i>
                                            <span className=" span-item m-4">Get updates about your job postings</span>
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-check icon-item mt-4 checkDetailsIcon "></i>
                                            <span className=" span-item m-4">Find candidates and and easy your recruiting</span>
                                        </div></div>
                                )}


                        </div>












                    </div>
                </div>

            </div>









        </div>
    )
}

export default Auth;