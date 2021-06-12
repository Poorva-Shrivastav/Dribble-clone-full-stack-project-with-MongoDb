import React, {useState} from 'react';
import '../styles/Signin.css';
import img from '../images/signin.jpeg'
import { connect } from 'react-redux';
import axios from 'axios';

function SignIn(props){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [submit, setSubmit] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault();
        let request = {
            username: document.getElementById('username').value,
            // email: document.getElementById('email').value,
            password:document.getElementById('password').value
        }
        
        axios.post('http://localhost:3000/login', request)
            .then(res => {
                alert(res.data.message)
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <img id="image" src={img} alt="image"/>
        <form onSubmit={submitHandler}>
            <div className="form-container">
        
            <p>Not a member?<a id="member" href="./login.html"> Sign in</a></p>
            <h1>Sign in to Dribble</h1>
            <button className="google-button"><a className="google-login-button"
                            href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Sign
                            up with Google </a></button>
            <p className="or">--------Or  check how to do this--------</p>
    
            <div>
                <label className="username-password" >Username</label>
                <input className="username" id="username" type="text" value={username} name="username" required id="username"  
                onChange={(e)=>{setUsername(e.target.value)}}
                />
            </div> 
            <div>
            
                <label className="username-password">Password</label>
                <input className="username" id="password" type="password" value={password} name="password"  required id="pwd"
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