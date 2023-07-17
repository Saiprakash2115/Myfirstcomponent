import React from "react";
import './loginsignupheader.css'
import pabLogo from './pabjobs-logo.png';



function SignupLoginHeader() {
    return (
        <div>
            {/* Header logo container */}
            <div className="container">
                <div className="signUpHeaderContainer d-flex align-items-center container text-center row ">
                    <div className="text-center align-items-center col-3">
                        <img src={pabLogo} alt="" className="pabLogo m-2" />
                    </div>
                    <div className="col-8">
                    <div></div>
                    </div>
                </div>
            </div>
            {/*  second main container*/}
        </div>
    );
}

export default SignupLoginHeader;

