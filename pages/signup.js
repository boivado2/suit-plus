"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {FaGoogle} from "react-icons/fa";
import {auth, provider} from "@/firebaseconfig";
import {
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth";
import Trends from "./trends";
import {useRouter} from "next/router";
import Layout from "@/components/Layout";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userName = "";

function Signup() {
	const [value, setValue] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const router = useRouter();
    let user;
	const createacc = (e) => {
		try {
			e.preventDefault();
			createUserWithEmailAndPassword(auth, email, password).then(
				(userCredential) => {
					user = userCredential.user;
					console.log(user);
					setName("");
					setEmail("");
					setPassword("");

					updateProfile(user, {
						displayName: name,
					});

					if (user) {
						toast.success("Account created");
						setTimeout(() => {
							sendEmailVerification(user).then(() => {
								toast.success("A verification email has been sent to you");
								if (toast.success) {
									setTimeout(() => {
										router.push("/login");
									}, 2000);
								}
							});
						}, 1000);
					}

                    if(user.email === setEmail){
                        toast.error("User already exists");''
                    }
				}
			);
		} catch (error) {
			toast.error("an error occurred");
		}
	};

	useEffect(() => {
		setValue(localStorage.getItem("email"));
	}, []);

	return (
		<Layout>
			<div className='login container-fluid mt-5'>
				<div className='form w-100 h-100'>
					<form className='text-center' onSubmit={createacc}>
						<h2 className='text text-center mb-5'>Sign Up</h2>
						<input
							type='text'
							value={name}
							name='name'
							onChange={(e) => {
								setName(e.target.value);
							}}
							placeholder='Name'
                            required

						/>
						<br />
						<input
							type='email'
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
							type='password'
							value={password}
							name='password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							placeholder='Password'
						/>
						<br />
						<button className='butn' type='submit'>
							Sign Up
						</button>
						<p className='mt-5'>
							Already have an account? <Link href='/login'>Log In</Link>
						</p>
					
					</form>
				</div>
				<ToastContainer />
			</div>
		</Layout>
	);
}

export default Signup;
