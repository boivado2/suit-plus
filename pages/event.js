import React from "react";
import img1 from "../components/assets/Frame161.png";
import img2 from "../components/assets/image_10.png";
import img3 from "../components/assets/image_11.png";
import img4 from "../components/assets/image_12.png";
import img5 from "../components/assets/image_13.png";
import img6 from "../components/assets/image_14.png";
import img7 from "../components/assets/image_15.png";
import img8 from "../components/assets/image_16.png";
import img9 from "../components/assets/image_17.png";
import Image from "next/image";
import Footer from "@/components/Global/Footer";
function Event() {
	return (
		<div className='continer-fluid events'>
			<Image className='image' src={img1} />
			<div className="first">
				<h1>
					PERFECT SUIT <br /> FOR YOUR NEXT EVENT
				</h1>
			</div>
			<div className='p-0'>
				<Image className='image_2' src={img2} />
				<Image className='image_3' src={img3} />
				<Image className='image_4' src={img4} />
				<Image className='image_5' src={img5} />
			</div>

			<div className='line'></div>
			<h1 className='text-center'>DRESS LIKE A BOSS</h1>

			<div className='content'>
				<p className='text-center'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
					commodo est. Morbi ornare vulputate magna eget sollicitudin.
					Pellentesque ultrices massa volutpat rutrum rhoncus. Sed quis neque
					purus. Vestibulum libero nisl, congue fermentum blandit id, ultricies
					vestibulum sem. Donec rhoncus lorem massa. Ut facilisis ullamcorper
					dapibus.
				</p>
			</div>

			<button className='border border-black mx-auto d-flex py-2 px-4 my-3'>
				SHOP NOW
			</button>

			<div className='p-3 mt-32'>
				<Image className='image_2' src={img6} />
				{/* <div className='lin'></div> */}
				
			</div>

			<div className='line mb-3'></div>

       <h1 className="text-center">LOREM IPSUM</h1>

      <div className="content">
        <p className='text-center'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
					commodo est. Morbi ornare vulputate magna eget sollicitudin.
					Pellentesque ultrices massa volutpat rutrum rhoncus. Sed quis neque
					purus. Vestibulum libero nisl, congue fermentum blandit id, ultricies
					vestibulum sem. Donec rhoncus lorem massa. Ut facilisis ullamcorper
					dapibus.
				</p>
      </div>

      <div className="px-2 text-center">
				<Image className='image_2 mb-4' src={img7} />
         <h2>CLASSIC SUITS</h2> 
         <p>Affordable suits for every occassion</p>
      </div>

      <div className="px-2 text-center mt">
				<Image className='image_2 mb-4' src={img8} />
         <h2>100% COTTON FABRIC</h2> 
         <p>Affordable suits for every occassion</p>
      </div>

      <div className="px-2 text-center mt">
				<Image className='image_2 mb-4' src={img9} />
         <h2>MEN'S TUXEDOS</h2> 
         <p>Affordable suits for every occassion</p>
      </div>
      
      <div className="px-2 sp my-28">
           <div className="d-flex align-items-center justify-content-center text-white">
                 <h1>SUIT PLUS</h1>
           </div>
           <h2 className="mt-12">BOOK CONSULTATION</h2>
           <p className='mt-2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
					commodo est. Morbi ornare vulputate magna eget sollicitudin.
					Pellentesque ultrices massa volutpat rutrum rhoncus. Sed quis neque
					purus. Vestibulum libero nisl, congue fermentum blandit id, ultricies
					vestibulum sem. Donec rhoncus lorem massa. Ut facilisis ullamcorper
					dapibus.
				</p>
        <button className="book">Book Now</button>
      </div>
		
      <Footer/>
    </div>
	);
}

export default Event;
