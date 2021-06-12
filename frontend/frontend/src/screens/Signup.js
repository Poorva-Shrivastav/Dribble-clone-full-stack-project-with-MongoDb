import React, {useState} from 'react';
import '../styles/Signup.css'
import { connect } from 'react-redux';
import axios from 'axios';
import image from '../images/signup.jpg'

function Signup(props){
    const {name, userName, email, password} = props;
    const {setName, setUserName, setEmail, setPassword} = props;
    
    const [submit, setSubmit] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault();
        let request = {
            name: document.getElementById('name').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password:document.getElementById('password').value
        }
        
        axios.post('http://localhost:3000/login', request)
            .then(res => {
                alert(res.data.message)
            })
            .catch(err => console.log(err))
    }

    return(
        <div id="container">
           <img id="image" src={image} alt="image"/>
            <form onSubmit={submitHandler}>
            <div class="form">
            
                <p>Already a member? <a id="member" href="./login.html"> Sign in</a></p>
                <h2>Sign Up to Dribble</h2>
                <button class="google-button"><a class="google-login-button"
                                href="https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Sign
                                up with Google </a></button>
                <p class="or">--------Or  check how to do this--------</p>
                <div className="name-username-container">
                    <label class="username-password">Name</label>
                    <input class="name-username" id="name" type="text" value={name} name="name" 
                    onChange={(e)=>{setName(e.target.value)}}/>

                    <label class="username-password">Username</label>
                    <input class="name-username" id="username" type="text" value={userName} name="userName" 
                    onChange={(e)=>{setUserName(e.target.value)}}
                    />  
                </div>
                <div>
                    <label class="username-password">Email</label>
                    <input class="email-password" id="email" type="text" value={email} name="email"  
                    onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
                <div>
                    <label class="username-password">Password</label>
                    <input class="email-password" id="password" type="password" value={password} name="password" placeholder="6+ characters"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div>
                    <button type="submit" value="Submit" class="signup-click">Create Account</button>
                </div>
            </div>

         </form>
        </div>
    )
}

    
const mapStateToProps = (state) => {
        return state;
}

const mapDispatchToProps = (dispatch) => {
    return{
        setName: (value) => dispatch({type: 'SET_NAME', value}),
        setUserName: (value) => dispatch({type: 'SET_USERNAME', value}),
        setEmail: (value) => dispatch({type: 'SET_EMAIL', value}),
        setPassword: (value) => dispatch({type: 'SET_PASSWORD', value}),
            
    }
        
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)