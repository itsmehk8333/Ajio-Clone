import React, { useEffect, useState } from "react";
import './Authentication.css'
// import {firebaseConfig} from '../src/Components/';
// import { app } from "../src/Components/Firebaseconfig";
import { getAuth, onAuthStateChanged ,signInWithEmailAndPassword , signOut} from "firebase/auth";
import firebaseConfig from '../Components/FirebaseConfig'


function Authentications() {
const auth = getAuth();
const[email, SetUserId] = useState("");
const[password, SetPassword] = useState("");
const user = auth.currentUser;
const[login ,SetLogin] = useState(false);;
const[userEmail , SetUseremail] = useState("") 

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if(user != null){
        const email = user.email;
        SetUseremail(email);
      } 
    SetLogin(true) 
    
    } else {
  
    }
  });
},[login])
console.log(login)
  return (
    <div  className="login-div">
{
login == false ?     
<div  className="login-divs">
<h3 className="tag">Email</h3>
<input type="text"  className="inputs"  onChange={(e)=>{SetUserId(e.target.value)}}/><br/>
<span  className="span" style={{color:'red'}}> </span>
<h3 className="tag">Password</h3>
<input type="password" onChange={(e)=>{SetPassword(e.target.value)}}  className="inputs" /><br/><br/>
<button 
onClick={
  ()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => { 
  const user = userCredential.user;


  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  document.querySelector(".span").innerHTML = "please enter valid details";
  });
  }
  }

    className="btn btn-secondary" id="signin-button">Signin</button>
</div> 
:
 <div>
<h4  >
UserEmail
</h4>
<h2>
{userEmail}
</h2>
<button
onClick={()=>{
  signOut(auth).then(() => {
  // Sign-out successful.

  SetLogin(false)
  }).catch((error) => {
  });
  }}
>Logout</button>
</div>
}   </div>
  )
}
export default Authentications



// <input type="text"  onChange={(e)=>{SetUserId(e.target.value)}}    />
// <input type="password" onChange={(e)=>{SetPassword(e.target.value)}}  />
// <button 
// onClick={
// ()=>{
// signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
// // Signed in 
// const user = userCredential.user;
// window.alert("login sucessfull")
// // ...

// })
// .catch((error) => {
// const errorCode = error.code;
// const errorMessage = error.message;
// console.log("error" +  errorMessage);
// window.alert("invalid credentials" + errorMessage)
// });
// }
// }
// >Login</button>
// <button
// onClick={()=>{
// signOut(auth).then(() => {
// // Sign-out successful.
// window.alert('signout sucessful');
// SetLogin(false)
// }).catch((error) => {
// // An error happened.
// });
// }}
// >
// Logout
// </button>