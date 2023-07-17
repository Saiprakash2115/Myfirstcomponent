import React from "react";
import pabBottomLogo from "./pab-bottom-logo.jpg";
import "./footer.css";


function Footer() {
    return (
        <div>

            <div class="footerSection ">
                <div class="container  row  firstFooterContainer ">

                    {/* <!-- FIRST COL --> */}
                    <div class="firstCol m-3 col-md-2 col-10 col-sm-4">

                        <div>


                            <img src={pabBottomLogo} class="pabLogo" id="bottomPabLogo" alt="" />
                            <p class="footerText">we provide a direct access to the walk-in oppurtinites
                                availabe on the site. Result can be filtered on work experience, venue,from location,
                                employer
                                type and date range</p>
                        </div>

                        <div>
                            <p class="m-0">Toll free Number:</p>
                            <i class="fa-solid fa-phone-flip iconphn"></i><span class="text-white"> 1800 833 9448</span>
                        </div>
                    </div>
                    {/* <!-- SECOND COL --> */}
                    <div class="secondCol m-3 col-md-2 col-10 col-sm-4 ">
                        <div class="">
                            <h6>For Candidates</h6>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Candidate Profile</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr "></i><span>My resume</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Applied jobs</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Job Alert</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Change Password</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- third col --> */}
                    <div class="thirdCol m-3 col-md-2 col-10 col-sm-4 ">
                        <div>
                            <h6>Jobs</h6>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>All Jobs</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Company Jobs</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Category Jobs</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Locational Jobs</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Designation Jobs</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Skill Jobs</span>
                            </div>
                        </div>

                    </div>
                    {/* <!-- fourth col --> */}
                    <div class="fourthCol m-3 col-md-2 col-10 col-sm-4 ">
                        <div>
                            <h5>Browse Jobs</h5>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Companies</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Browse Jobs</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Jobs</span>
                            </div>
                        </div>
                        <div class="my-4">
                            <h5>Information</h5>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Terms & conditions</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>privacy policy</span>
                            </div>
                            <div class="">
                                <i class="fa-solid fa-angle-right iconarr"></i><span>Fraud Alert</span>
                            </div>

                        </div>

                    </div>
                    <div class="container thick-horizontal-line my-4 mx-2 "></div>

                </div>





                <div class="container secondFooterContainer row ">
                    <div class="text-white p-2 m-2 col-md-3  col-12">
                        <span>all rights reserved </span><i class="fa-solid fa-copyright"></i> 2022 PABjobs
                    </div>
                    <div class=" text-white p-2 m-2 col-sm-4 col-md-3  col-12">
                        Designed by <a href="https://www.perfextechnologies.com/" target="_blank">@perfex Technologies</a>
                    </div>
                    <div class="p-2 col-md-4 m-2  d-flex flex-row col-12 ">
                        <i class="fa-brands fa-linkedin mx-2 logos" id="linkedIn"></i>
                        <i class="fa-brands fa-instagram mx-2 logos" id="instagram"></i>
                        <i class="fa-brands fa-facebook mx-2 logos" id="facebook"></i>
                        <i class="fa-brands fa-twitter mx-2 logos" id="twitter"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;