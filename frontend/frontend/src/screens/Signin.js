import React, {useState} from 'react';
import '../styles/Signin.css';
import img from '../images/signin.jpeg'
import { connect } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';
import { GoogleLogin} from 'react-google-login'

function SignIn(props){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [submit, setSubmit] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        let loginRequest = {
            // username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
            
        }
        
        axios.post('http://localhost:5000/api/signin', loginRequest)
            .then(res => { //console.log(res.data)
                console.log(res.data.name);
                // alert(res.data.message)
                window.location = '/home'
            })
            .catch(err => console.log(err))
                
            // window.location = '/home'
    }
    
    const googleSuccess = async (res) => {
        console.log(res);
    }

    const googleFailure = (error) => {
        console.log(error);
        console.log("Google Signin was unsuccessful. Try Again later");
    }
    
    const history = useHistory();
    const signupHandler = () =>{ 
        let path = `/signup`; 
        history.push(path);
    }
    return(
        <div className="container">
            <img id="image" src={img} alt="image"/>
        <form method="POST" onSubmit={submitHandler}>
            <div className="form-container">
        
            <p>Not a member?<a id="member" onClick={signupHandler}> Sign up</a></p>
            <h1>Sign in to Dribble</h1>
            <GoogleLogin 
                    clientId = "1051195399308-qeup3297q34iq6h4b8j026hbn5uh0jji.apps.googleusercontent.com"
                    render = {(renderProps) => (
                        <button className="google-button google-login-button" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">Sign up with Google</button>
                    )}
                    onSuccess= {googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy = "single_host_origin"
                    
                />
            <p className="or">--------Or  check how to do this--------</p>
    
            <div>
                <label className="username-password" >Email</label>
                <input className="username" id="email" type="text" value={email} name="email" required id="email"  
                onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div> 
            <div>
            
                <label className="username-password">Password</label>
                <input className="username" id="password" type="password" value={password} name="password"  required id="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>
            <div>
                <button type="submit" value="Submit" className="signin-click" type="submit">Sign in</button>
            </div>
            </div>
            
        </form>
        </div>
    )
}


// export default SignIn;
const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
return{
    setUserName: (value) => dispatch({type: 'SET_USERNAME', value}),
    // setEmail: (value) => dispatch({type: 'SET_EMAIL', value}),
    setPassword: (value) => dispatch({type: 'SET_PASSWORD', value}),
        
}
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)