import React from 'react';
import hero from "../components/assets/herosection.png";
import Image from 'next/image';
import {FaFilter,FaStar,FaCopyright} from "react-icons/fa";
import Data from '@/components/Global/Data';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '@/components/Global/footer';

function Trends() {
  return (
    <div className='container-fluid p-0 m-0'>
          {/* <div> */}
               <Image className='hero w-100 m-0 p-0' src={hero} width height={600} alt=""/>
               <div>
                    {/* <FaFilter/> */}
               </div>

               <div className='trends row my-5 flex align-middle justify-center'>
                    {Data.map((item) => {
                         return(
                           <div key={item.id} className='col-5 col-sm-3 m-2 p-0'>
                               <Image src={item.image} alt='' className='w-100 m-0'/>
                               <div className='description mt-2 lg:flex lg:align-middle lg:justify-between text-center'>
                                    <div>
                                        <h5 className='text-center'>{item.productName}</h5>
                                        <p className='line-height'>{item.description}</p>
                                    </div>
                                    <div className='stars flex align-middle lg:justify-between justify-center m-0 p-0'>
                                          <FaStar/>
                                          <FaStar/>
                                          <FaStar/>
                                          <FaStar/>
                                          <FaStar/>
                                          <span className='m-0 p-0'>(65)</span>
                                    </div>
                               </div>
                              
                          </div>
                         )
                         
                    })};

               </div>
          {/* </div> */}
               <button className='loadmore d-flex mx-auto my-5 border border-blue-900 py-1 px-5'>Load More</button>
               {/* <Footer/> */}
               
               <div className='footer bg-blue-950 p-20 mt-30'>
               <div className='row flex align-middle justify-around'>
				<div className='col-12 col-sm-3 text-white'>
					<h3 className='mb-4'>SuitPlus</h3>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
						itaque repellat sit ullam cumque voluptate non rem, nulla magnam
						tempora recusandae deleniti perferendis id corrupti dolore minus
						quam qui consectetur.
					</p>
				</div>
				<div className='col-6 col-sm-2 pl-4'>
					<p className='text-lg text-white'>Company</p>
                         <a href='#'className='no-underline text-sm text-center text-white'>About</a><br/>
                         <a href='#'className='no-underline text-sm text-center text-white'>Our Look Book</a><br/>
                         <a href='#'className='no-underline text-sm text-center text-white'>Customer Reviews</a><br/>
				</div>
				<div className='col-6 col-sm-2'>
                         <p className='text-lg text-white'>Trends</p>
                         <a href='#' className='no-underline text-sm text-center text-white'>Suits</a><br/>
                         <a href='#' className='no-underline text-sm text-center text-white'>Tuxedos</a><br/>
                         <a href='#' className='no-underline text-sm text-center text-white'>Pants</a><br/>
                         <a href='#' className='no-underline text-sm text-center text-white'>Brands</a><br/>
				</div>
				<div className='col-6 col-sm-2'>
                         <p className='text-lg text-white'>Support</p>
                         <a href='#' className='no-underline text-sm text-center text-white'>FAQ</a><br/>
                         <a href='#' className='no-underline text-sm text-center text-white'>Contact Us</a><br/>
                         <a href='#' className='no-underline text-sm text-center text-white'>Perfect Fit Guarantee</a><br/>
				</div>
				<div className='col-6 col-sm-3'>
                         <p className='text-lg text-white'>Join Mailing List</p>
                         <p className='text-sm text-white'>Sign up for updates and promotions</p>
                         <input placeholder='Email' className='bg-blue-950 border border-white text-white px-2 py-1 w-sm-75 outline-none'/>
				</div>
                    
		 	  </div>
                 <span className='text-white mt-10 flex'>Copyright <FaCopyright className='mt-1 mx-2'/>2024,SuitPlus.</span>
               </div>
    </div>
  )
}

export default Trends