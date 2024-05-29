import {Link, useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseApp from "../firebaseConfig";
import {useState } from 'react';

function Register(){

    const [firstname, setFirstname] = useState ('');
    const [lastname, setLastname] = useState ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let navigate = useNavigate ();

    const handleRegistration =() => {

        if (firstname !== '' && lastname !== '' && email !== '' && password !== '' && confirmPassword !== '' && password == confirmPassword){
          const auth = getAuth(firebaseApp);
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed up 
          const user = userCredential.user;

            updateProfile(auth.currentUser, {
            displayName: firstname + " " + lastname
          });
          navigate("/");

      })
      .catch((error) => {
        alert("error");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    }else {
        alert("Missing Credentials")
    }
  }

    return (

     <div className= "container boarder p-5 rounded shadow mt-4">
        <h1 className="fw-bold">Registration</h1>
        <p>Please create your account here.</p>

          <div className="row mb-3">
            <div className="col-md-5">
              <label htmlFor="firstname">First Name</label>
              <input type="firstname" id="firstname" className= "form-control " 
              onChange={(e) => 
              setFirstname(e.target.value)} value={firstname}/>
            </div>

            <div className="col-md-5">
              <label htmlFor="lastname">Last Name</label>
              <input type="lastname" id="lastname" className= "form-control "
              onChange={(e) => 
              setLastname(e.target.value)} value={lastname} />
            </div>

          </div>

       
        <label htmlFor="email">Email</label>
        <input type="email" id="email" className= "form-control " 
        onChange={(e) => 
        setEmail(e.target.value)} value={email} />
        <br />

        <label htmlFor="password">Password</label>
        <input type="password" id="Password" className= "form-control" 
        onChange={(e) => 
        setPassword(e.target.value)} 
        value={password}/>
<br />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" className= "form-control" 
        onChange={(e) => 
        setConfirmPassword(e.target.value)} 
        value={confirmPassword}/>

        <button className="btn btn-warning mt-3" onClick={() => handleRegistration()} >Login</button>
        <hr></hr>
        <Link to="/login"> Already have an an account? Login here. </Link>

     </div>
     
    )
}

export default Register; 