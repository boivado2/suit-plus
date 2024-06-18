import React from "react";
import img1 from "../components/assets/image_18.png";
import Image from "next/image";
import Footer from "@/components/Global/Footer";

function AboutUs() {
	return (
		<div className='container-fluid p-0'>
			<div className='about text-white'>
				<h1>GET TO KNOW US</h1>
			</div>

			<div className='mt-10 p-2'>
				<h2 className='text-center text-bold'>ABOUT SUITPLUS</h2>
				<div className='line w-75 mb-4'></div>
				<p className="text-sm-center text-gray-600 cont">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
					commodo est. Morbi ornare vulputate magna eget sollicitudin.
					Pellentesque ultrices massa volutpat rutrum rhoncus. Sed quis neque
					purus. Vestibulum libero nisl, congue fermentum blandit id, ultricies
					vestibulum sem. Donec rhoncus lorem massa. Ut facilisis ullamcorper
					dapibus. Ut imperdiet vestibulum lobortis. Nam dapibus diam blandit
          <br/>
          <br/>
					risus pulvinar imperdiet. Maecenas et orci at lorem dapibus vehicula.
					Cras dignissim tincidunt rutrum. Donec congue pulvinar ex, vel
					tincidunt ligula suscipit nec. Donec semper ligula nulla, nec dapibus
					est bibendum vitae. Quisque magna nisi, fermentum faucibus lacus quis,
				
          <br/>
          <br/>
          fringilla malesuada felis. Sed at turpis luctus, accumsan nisi ac,
					suscipit augue. Donec elementum bibendum orci a bibendum. Donec
					malesuada turpis in felis ullamcorper, in bibendum nibh posuere. In
					sollicitudin rhoncus erat, et feugiat sem. Mauris a dignissim enim.
					Vivamus lobortis molestie diam, rutrum egestas urna imperdiet commodo.
					Aliquam lectus sem, sagittis nec suscipit a, finibus ut arcu. Nunc
          <br/>
          <br/>
          quis risus ac est sodales tincidunt. Donec justo risus, finibus a
					neque eu, hendrerit feugiat urna. Nunc sit amet aliquet mauris. Mauris
					arcu purus, sodales eu mi sit amet, mattis mollis felis. Suspendisse
					potenti. Etiam quis aliquet ipsum, sit amet pellentesque lectus.
					Pellentesque fringilla at ipsum at pellentesque. In hac habitasse
					platea dictumst. Ut non nunc eget dolor tincidunt mollis.
				</p>
			</div>

      <div className="my-20 p-2 cont_2">
          <Image className="img" src={img1}/>

          <div className="button">
             <button>View Look Book</button>
          </div>
         
      </div>

      <Footer/>
		</div>
	);
}

export default AboutUs;
