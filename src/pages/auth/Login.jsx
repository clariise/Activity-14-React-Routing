import {Link} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import {useState } from 'react';

function Login (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =() => {

        if (email !== '' && password !== ''){
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signed In");
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert("error");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    }else {
        alert("Missing Credentials");

    }}

    return (

     <div className= "container">
        <h1 className="fw-bold">Login</h1>
        <p>Please enter your email and password to Login</p>

       
        <label htmlFor="email">Email</label>
        
        <input type="email" id="email" className= "form-control" 
        onChange={(e) => 
        setEmail(e.target.value)} value={email} />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" className= "form-control" 
        onChange={(e) => 
        setPassword(e.target.value)} 
        value={password}/>

        <button className="btn btn-warning mt-3" onClick={()=> handleLogin()} >Login</button>
        <hr></hr>
        <Link to="login"> Don't have an account? Register here. </Link>

     </div>
     
    )
}

export default Login; 