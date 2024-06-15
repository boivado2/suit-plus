"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {FaGoogle} from "react-icons/fa";
import google from "../components/assets/google.jpg";
import Image from "next/image";
// import auth from '@/firebaseconfig';
// import auth from '../firebaseconfig';
// import
// import {auth, provider} from "../firebaseconfig";
import { auth,provider } from "@/firebaseconfig";
import {signInWithPopup,createUserWithEmailAndPassword,signOut} from "firebase/auth";
import Trends from "./trends";
import { useRouter } from 'next/router';


function Signup() {
	const [value, setValue] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const router = useRouter();

	const handleClick = (e) => {
        e.preventDefault();
		signInWithPopup(auth, provider).then((data) => {
			setValue(data.user.email);
			localStorage.setItem("email", data.user.email);
		});

        // router.push("/trends");


	};

    const createacc = (e) => {
          e.preventDefault();
          createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setEmail("");
                setPassword("");

                if(user){
                    router.push("/login");

                }
          });


    }

    // if(handleClick){
    //     router.push("/trends");
    // }else if(createacc){
    //     router.push("/login");
    // }

	useEffect(() => {
		setValue(localStorage.getItem("email"));
	});

	return (
        // <div>{value ? <Trends/> : 
        <div className='login container-fluid'>
			<div className='form w-100 h-100'>
				<form className='text-center' onSubmit={createacc}>
					<h2 className='text text-center mb-5'>Sign Up</h2>
					<input type='email' value={email} name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' />
					<br />
					<input type='password' value={password} name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>
					<br />
					<button className='butn' type="submit">Sign Up</button>
					<p className='mt-5'>
						Already have an account? <Link href='/login'>Log In</Link>
					</p>
                    <h3>Or</h3>
                    <button
						className='google flex align-middle justify-center'
						onClick={handleClick}
					>
						<Image className='img' src={google} alt='' />
						<span className='mt-2'>Continue with google</span>
					</button>

					
				</form>
			</div>
		</div>
        // }</div>
        
		
     
	);
}

export default Signup;
