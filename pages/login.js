"use client";

import Link from 'next/link'
import React,{useState} from 'react'
import { auth,provider } from "@/firebaseconfig";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useRouter } from 'next/router';

function Login() {
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const router = useRouter();

  const Login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password).then((data) => {
              console.log(data.user.email);

              if(data.user.email){
                  router.push('/trends');
              }
        });

        
  }


  return (
    <div className="login container-fluid">
         <div className='form w-100 h-100'>
           
          <form className='' onSubmit={Login}>
               <h2 className='text text-center mb-5'>Log In</h2>

               <input type="email form-control" value={email} name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"/>
               <br/>
               <input type="password form-control" value={password} name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password"/>
               <br/>
               <button className='butn' type="submit">Log In</button>
        
               <p className='mt-5'>Don't have an account? <Link href="/signup">Sign Up</Link></p>

         </form>

        </div>
         
    </div>
  )
}

export default Login