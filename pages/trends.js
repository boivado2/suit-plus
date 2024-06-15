import React from "react";
import hero from "../components/assets/herosection.png";
import Image from "next/image";
import {FaFilter, FaStar, FaCopyright} from "react-icons/fa";
import Data from "@/components/Global/Data";
import Footer from "@/components/Global/footer";
import {useState} from "react";
// import styles from "../styles/trends.module.css";
// import "../styles/globals.css";
import filter from "../components/assets/filter.png";

function Trends() {
	const [maxWidth, setMaxWidth] = useState();

	return (
		<div className='container-fluid p-0 m-0'>
			{/* <div> */}
			<Image
				className='hero w-100 m-0 p-0'
				src={hero}
				width
				height={600}
				alt=''
			/>
			<div className="flex align-middle justify-between bg-blac px-3 sm:px-14 py-12">
				<Image src={filter} alt='filter' className='' />
				<select id='fruits' name='fruit'>
					<option value='price'>price</option>
					<option value='brand'>Brand</option>
					<option value='style'>style</option>
				</select>
			</div>

			<div className='trends row my-5 flex align-middle justify-center'>
				{Data.map((item) => {
					return (
						<div key={item.id} className='col-5 col-sm-3 m-2 p-0'>
							<Image src={item.image} alt='' className='w-100 m-0' />
							<div className='description mt-2 lg:flex lg:align-middle lg:justify-between text-center'>
								<div>
									<h5 className='text-center'>{item.productName}</h5>
									<p className='line-height'>{item.description}</p>
								</div>
								<div className='stars flex align-middle lg:justify-between justify-center m-0 p-0'>
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<span className='m-0 p-0'>(65)</span>
								</div>
							</div>
						</div>
					);
				})}
				;
			</div>
			{/* </div> */}
			<button className='loadmore d-flex mx-auto my-5 border border-blue-900 py-1 px-5'>
				Load More
			</button>
			{/* <Footer/> */}

			<Footer />
		</div>
	);
}

export default Trends;
