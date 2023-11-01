import React, { useState } from 'react'
import './Loginsinupcss.css' 
import User_Email from '../Assets/email.png';
import User_Password from '../Assets/password.png';
import User_person from '../Assets/person.png';


const  LoginSinup = () => {

    const[Action,SetAction]=useState("Sign Up");
  return (
     <div className="container">
        <div className="header">
            <div className="text">{Action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {
                Action==="Login"?<div></div>:
                <div className="input">
                <img src={User_person} alt=""></img>
                <input type="text" placeholder='Name'></input>
            </div>
            }

            <div className="input">
                <img src={User_Email} alt=""></img>
                <input type="email" placeholder='Email'></input>
            </div>
            <div className="input">
                <img src={User_Password} alt=""></img>
                <input type="password" placeholder='Password'></input>
            </div>
        </div>

            { 
                Action==="Login"?
                <div className="forget-password">Lost Password?<span>Click hear!</span></div>:
                <div></div>
            }   
        <div className="submit-container">
            <div className={Action==="Login"?"submit gray":"submit"} onClick={()=>SetAction("Login")}>Sign Up</div>
            <div className={Action==="Sign Up"?"submit gray":"submit"} onClick={()=>SetAction("Sign Up")}>Login</div>
        </div>
     </div>
  )
}
export default LoginSinup;
