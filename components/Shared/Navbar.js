import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {FaSearch, FaUser,FaArrowUp} from "react-icons/fa";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseconfig";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const profileRef = useRef(null);
	const detailsRef = useRef();

	useEffect(() => {
		const curr = profileRef.current;
		curr.addEventListener("mouseover" ,() => {
			detailsRef.current.style.display = "block";
		
  		});
		curr.addEventListener("mouseout" ,() => {
			detailsRef.current.style.display = "none";
		
  		});
	},[]);



	const router = useRouter();
	const Logout = () => {
		  signOut(auth).then((userCredential) => {
			   toast.success("Signed out");
               router.push("/login");
			   console.log(userCredential);
		  });

		//   onAuthStateChanged(auth, (user) => {
		// 	setCurrentUser(user);
		// 	console.log(user);
		//   });
	}

	return (
		<nav className='bg-white nav p-2 fixed-top flex align-middle justify-between shadow'>
			<div className='md:hidden'>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='text-dark focus:outline-none mt-2'
				>
					<svg
						className='h-6 w-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
						></path>
					</svg>
				</button>
			</div>

           
			<div className='text-dark text-2xl font-bold sm:ml-0 ml-28 text-center'>SuitPlus</div>

			<div className='container w-25 ml-30 md:flex mx-auto md:justify-between md:items-center'>
				<div
					className={`md:flex md:mx-auto md:items-center ${isOpen ? "block" : "hidden"}`}
				>
					<Link href='/' className='text-dark px-2 py-1 block text-decoration-none'>
						Home
					</Link>
					<Link href='/trends' className='text-dark px-2 py-1 block text-decoration-none'>
						Trends
					</Link>
					<Link href='/login' className='text-dark px-2 py-1 block text-decoration-none'>
						Login
					</Link>
					<Link href='#' className='text-dark px-2 py-1 block text-decoration-none'>
						Contact
					</Link>
				</div>
			</div>

			<div className='icons flex align-middle justify-between mt-2'>
				<FaSearch color="black" size={"20px"} className="mx-3"/>
				<div ref={profileRef}>
			    	<Link href="#"><FaUser color="black" size={"20px"} className="profile mx-0 font-weight-lighter"/></Link>
					<div className="details" ref={detailsRef}>
						<Link className="profile-links text-dark no-underline " href="#">Profile</Link><br/>
						<Link onClick={Logout} className="profile-links text-dark no-underline flex align-middle mt-2" href="">
							<FaArrowUp className="mr-2" size={"20px"}/>
							Log Out
						</Link>
					</div>
				</div>
			</div>

			<ToastContainer/>
		</nav>
	);
};

export default Navbar;
