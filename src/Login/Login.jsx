import { AiOutlineGoogle } from "react-icons/ai";
import { ImAppleinc } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";


import './Login.scss'
function Login()
{
    return(
        <div>
            <div class="root-container">
                <div class="login-box">
                    <div className='box-top'>
                        <span className='title'>Login</span>
                    </div>
                    <div className='box-bottom'>
                        <div className='bottom-input-field'>
                            <input className='input-field' placeholder='Username' type='text'></input>
                            <input className='input-field' placeholder='Password' type='password'></input>
                            <button className='input-submit' type='submit'>Login</button>
                            <div className='signup-box'>
                                <p>Don't have an account?</p>
                                <button className='input-submit' type='submit'>Sign Up</button>
                            </div>
                        </div>
                        <div className='bottom-socials'>
                            <div className='icon-box'>
                                <ImAppleinc className="icons"/>
                                <FaFacebookF className="icons"/>
                                <AiOutlineGoogle className="icons"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;