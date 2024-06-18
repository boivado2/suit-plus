import React from "react";
import {FaFilter, FaStar, FaCopyright} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {DownOutlined} from "@ant-design/icons";


function Footer() {
	return (
		<div className='container-fluid h-100 p-0'>
			<div className='footer p-20 mt-30'>
				<div className='row flex align-middle justify-around p-0'>
					<div className='col-12 col-sm-3 text-white'>
						<h3 className='mb-4'>SuitPlus</h3>
						<p className='text-sm'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus itaque repellat sit ullam cumque voluptate non rem,
							nulla magnam tempora recusandae deleniti perferendis id corrupti
							dolore minus quam qui consectetur.
						</p>
					</div>
					<div className='col-6 col-sm-2 pl-4'>
						<p className='text-lg text-white'>Company</p>
						<a href='#' className='no-underline text-sm text-center text-white'>
							About
						</a>
						<br />
						<a href='#' className='no-underline text-sm text-center text-white'>
							Our Look Book
						</a>
						<br />
						<a href='#' className='no-underline text-sm text-center text-white'>
							Customer Reviews
						</a>
						<br />
					</div>
					<div className='col-6 col-sm-2'>
						<p className='text-lg text-white'>Trends</p>
						<a href='#' className='no-underline text-sm text-center text-white'>
							Suits
						</a>
						<br />
						<a href='#' className='no-underline text-sm text-center text-white'>
							Tuxedos
						</a>
						<br />
						<a href='#' className='no-underline text-sm text-center text-white'>
							Pants
						</a>
						<br />
						<a href='#' className='no-underline text-sm text-center text-white'>
							Brands
						</a>
						<br />
					</div>
					<div className='col-6 col-sm-2'>
						<p className='text-lg text-white'>Support</p>
						<a href='#' className='no-underline text-sm text-center text-white'>
							FAQ
						</a>
						<br />
						<a href='#' className='no-underline text-sm text-center text-white'>
							Contact Us
						</a>
						<br />
						<a href='#' className='no-underline text-sm text-center text-white'>
							Perfect Fit Guarantee
						</a>
						<br />
					</div>
					<div className='col-6 col-sm-3'>
						<p className='text-lg text-white'>Join Mailing List</p>
						<p className='text-sm text-white'>
							Sign up for updates and promotions
						</p>
						<input
							placeholder='Email'
							className='bg-blue-950 border border-white text-white px-2 py-1 outline-none'
						/>
					</div>
				</div>
				<span className='text-white mt-10 flex'>
					Copyright <FaCopyright className='mt-1 mx-2' />
					2024,SuitPlus.
				</span>
			</div>

			<div className='footer-2 p-2 m-0'>
				<div className='bg-none mb-16 mt-10'>
					<p className='text-lg text-white'>Join Mailing List</p>
					<p className='text-sm text-white'>
						Sign up for updates and promotions
					</p>
					<input
						placeholder='Email'
						className='mail_2 border border-white text-white px-2 py-1 outline-none'
					/>
				</div>
				<hr></hr>
				<div className="d-flex align-items-center pt-1 pb-0 justify-content-between">
					<p>Company</p>
					<DownOutlined/>
				</div>
				<hr></hr>
				<hr></hr>
				<div className="d-flex align-items-center pt-1 pb-0 justify-content-between">
					<p>Trends</p>
					<DownOutlined/>
				</div>
				<hr></hr>
				<hr></hr>
				<div className="d-flex align-items-center pt-1 pb-0 justify-content-between">
					<p>Support</p>
					<DownOutlined/>
				</div>
				<hr></hr>
				<div className='text-white mt-14'>
					<h3 className='mb-4'>SuitPlus</h3>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						itaque repellat sit ullam cumque voluptate non rem, nulla magnam
						tempora recusandae deleniti perferendis id corrupti dolore minus
						quam qui consectetur.
					</p>
				</div>

				<span className='text-white mt-10 flex'>
					Copyright <FaCopyright className='mt-1 mx-2' />
					2024,SuitPlus.
				</span>
			</div>
		</div>
	);
}

export default Footer;
