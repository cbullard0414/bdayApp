import './index.css'

function LoginSignup(){
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
                        <input type='text' name='username' id='userfieldlogin' maxLength='12'/>
                    </div>
                    <div id='PasswordFieldLogin' >
                        <label htmlFor='password'id='passwordLabel'>Password</label> <br/>
                        <input type='password' name='password' id='passfieldlogin' maxLength='12'/>
                    </div>

                    <div id = 'loginsubmit'>
                    <button id='loginbutton'>
                        Submit
                    </button>
                    </div>

                    <div id='UsernameFieldSignup'>
                        <label htmlFor='username'id='usernameLabel'>Username</label> <br/>
                        <input type='text' name='username' id='userfieldsignup' maxLength='12'/>
                    </div>
                    <div id='PasswordFieldSignup'>
                        <label htmlFor='password'id='passwordLabel'>Password</label> <br/>
                        <input type='password' name='password' id='passfieldsignup' maxLength='12'/>
                    </div>
                    <div id='ConfirmPassword'>
                        <label htmlFor='confirm' id='confirmLabel'>Confirm Password</label><br/>
                        <input type='password' name='confirm' id='passconfirmfield'/>
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