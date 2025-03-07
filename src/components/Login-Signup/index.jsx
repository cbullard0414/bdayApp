import './index.css'
import { useState } from 'react';


function LoginSignup(){
//const BACKEND_URL = process.env.BACKEND_URL;
console.log(import.meta.env.VITE_BACKEND_URL)

const [loginusername, setloginusername] = useState();
const [loginpassword, setloginpassword] = useState();
const [signupusername, setsignupusername] = useState();
const [signuppassword, setsignuppassword] = useState();
const [passwordconfirm, setpasswordconfirm] = useState();

function submitLogin(loginusername, loginpassword){
    const data = {
        'username': loginusername,
        'password': loginpassword
    }
    const respones = fetch(`${BACKEND_URL}`,
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        }
    )
.then(response => response.json)
.then(data => {
    if(data.ok){
        console.log('frog');
    }
    else{
        console.log('error');
    }
}
)
}



    return(
        <div>
            <div id='Headers'>
                <h1 id='Login'>
                    Log In
                </h1>
                <h1 id='Signup'>
                    Sign Up
                </h1>
            </div>

            <div id='Body'>
                <div id='AccountBody'>
                    <div id='UsernameFieldLogin'>
                        <label htmlFor='username'id='usernameLabel'>Username</label> <br/>
                        <input type='text' name='username' id='userfieldlogin' value={loginusername} onChange={(e)=>setloginusername(e.target.value)} maxLength='12'/>
                    </div>
                    <div id='PasswordFieldLogin' >
                        <label htmlFor='password'id='passwordLabel'>Password</label> <br/>
                        <input type='password' name='password' id='passfieldlogin' value={loginpassword} onChange={(e)=>setloginpassword(e.target.value)} maxLength='12'/>
                    </div>

                    <div id = 'loginsubmit'>
                    <button id='loginbutton' onClick={()=>submitLogin(loginusername, loginpassword)}>
                        Submit
                    </button>
                    </div>

                    <div id='UsernameFieldSignup'>
                        <label htmlFor='username'id='usernameLabel'>Username</label> <br/>
                        <input type='text' name='username' id='userfieldsignup' value={signupusername} onChange={(e)=>setsignupusername(e.target.value)} maxLength='12'/>
                    </div>
                    <div id='PasswordFieldSignup'>
                        <label htmlFor='password'id='passwordLabel'>Password</label> <br/>
                        <input type='password' name='password' id='passfieldsignup' value={signuppassword} onChange={(e)=>setsignuppassword(e.target.value)} maxLength='12'/>
                    </div>
                    <div id='ConfirmPassword'>
                        <label htmlFor='confirm' id='confirmLabel'>Confirm Password</label><br/>
                        <input type='password' name='confirm' id='passconfirmfield' value={passwordconfirm} onChange={(e)=>setpasswordconfirm(e.target.value)}/>
                    </div>

                    <div id = 'signupsubmit'>
                    <button id='signupbutton'>
                        Submit
                    </button>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default LoginSignup;