"use client";

import Link from "next/link";
import React, {useState} from "react";
import {auth, provider} from "@/firebaseconfig";
import {signInWithEmailAndPassword,signInWithPopup,sendPasswordResetEmail} from "firebase/auth";
import {useRouter} from "next/router";
import Layout from "@/components/Layout";
import Signout from "./signout";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../components/assets/google.jpg";
import Image from "next/image";
import { AuthProvider } from "./AuthProvider";


function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [currentUser, setCurrentUser] = useState("");
	const [message, setMessage] = useState("");

	const router = useRouter();


	const Login = (e) => {
    try {
      e.preventDefault();
		  signInWithEmailAndPassword(auth, email, password).then((data) => {
          console.log(data.user);

          if (data.user.emailVerified) {
            toast.success("Log in successful");
            setTimeout(() => {
              const push = router.push("/trends");
              if(setEmail("") && setPassword("")){
                   !push;
              }else if(push){
                  setTimeout(() => {
                    toast.success(`Welcome ${data.user.displayName}`);
                  }, 2000);
              }else{
                return push;
              }
              
            },2000);
          } else {
            toast.error("Email not verified");
          }

     
		});
    } catch (error) {
              toast.error(error);
              console.log(error)
    }
		

	};

  const handleClick = (e) => {
		try {
			e.preventDefault();
			signInWithPopup(auth, provider).then((data) => {
				// setValue(data.user.email);
       
				localStorage.setItem("email", data.user.email);
			});

			if (signInWithPopup && data.user) {
				  router.push("/trends");
			}
		} catch (error) {
			   toast.error("an error occurred");
		}
	};

	return (
		<Layout>
			{/* {Login ? <Signout/> : */}
			<div className='login container-fluid mt-5'>
				<div className='form w-100 h-100'>
					<form className='' onSubmit={Login}>
						<h2 className='text text-center mb-5'>Log In</h2>

						<input
							type='email form-control'
							value={email}
							name='email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							placeholder='Email'
              required
						/>
						<br />
						<input
							type='password form-control'
							value={password}
							name='password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder='Password'
              className="mb-4"
              required

						/>
						<br />
            <Link href="/passwordReset">Forgotten Password</Link>
						<button className='butn' type='submit'>
							Log In
						</button>
						<h3 className="text-center mt-3">Or</h3>

            <button
							className='google flex align-middle justify-center'
							onClick={handleClick}
						>
							<Image className='img' src={google} alt='' />
							<span className='mt-2'>Continue with google</span>
						</button>

						<p className='mt-5'>
							Don't have an account? <Link href='/signup'>Sign Up</Link>
						</p>
					</form>
				</div>
				<p>{message}</p>
			</div>
			{/* }  */}
      <ToastContainer/>
		</Layout>
	);
}

export default Login;
