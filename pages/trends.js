import React from "react";
import hero from "../components/assets/herosection.png";
import Image from "next/image";
import {FaFilter, FaStar, FaCopyright} from "react-icons/fa";
import Data from "@/components/Global/Data";
import Footer from "@/components/Global/footer";
import {useState} from "react";
import filter from "../components/assets/filter.png";
import Layout from "@/components/Layout";
import {DownOutlined, StarFilled} from "@ant-design/icons";
import {Dropdown, Space,Typography} from "antd";

function Trends() {
	const [activeButton, setActiveButton] = useState(null);
	const [filterCategory, setCategory] = useState(Data);
	const filterResult = (val, buttonId) => {
		const result = Data.filter((currentData) => {
			return currentData.productName === val;
		});
		setCategory(result);
		setActiveButton(buttonId);
	};

	const items = [
		{
			label: (
				<button
					className={`py-2 px-2`}
					onClick={() => filterResult("Boss", 1)}
					value='price'
				>
					price
				</button>
			),
			key: "0",
		},
		{
			label: (
				<button
					className={`py-2 px-2`}
					onClick={() => filterResult("Bosses", 2)}
					value='brand'
				>
					Style
				</button>
			),
			key: "1",
		},

		{
			label: (
				<button
					className={`py-2 px-2`}
					onClick={() => filterResult("Bosses", 3)}
					value='brand'
				>
					Brand
				</button>
			),
			key: "2",
		},
	];

	return (
		<Layout>
			<div className='container-fluid p-0 m-0 mt-5'>
				{/* <div> */}
				<Image
					className='hero w-100 m-0 p-0'
					src={hero}
					width
					height={600}
					alt=''
				/>
				<div className='flex align-middle justify-between px-3 sm:px-14 py-12'>
					<Image src={filter} alt='filter' className='' />
					<Dropdown
						menu={{
							items,
							selectable: true,
							defaultSelectedKeys: ["3"],

						}}
						trigger={['click']}
						className="border d-flex align-items-center justify-content-between px-2"

					>
						<Typography.Link>
							<Space className="text-black">
								{/* filter */}
								<DownOutlined />
							</Space>
						</Typography.Link>
					</Dropdown>
				</div>

				<div className='trends row my-5 flex align-middle justify-center'>
					{filterCategory.map((item) => {
						return (
							<div key={item.id} className='col-5 col-sm-3 m-2 p-0'>
								<Image src={item.image} alt='' className='w-100 m-0' />
								<div className='description mt-2 lg:flex lg:align-middle lg:justify-between text-center'>
									<div>
										<h5 className='text-center'>{item.productName}</h5>
										<p className='line-height'>{item.description}</p>
									</div>
									<div className='stars flex align-middle lg:justify-between justify-center m-0 p-0'>
										<StarFilled />
										<StarFilled />
										<StarFilled />
										<StarFilled />
										<StarFilled />
										{/* <FaStar />
										<FaStar />
										<FaStar />
										<FaStar /> */}
										<span className='m-0 p-0'>(65)</span>
									</div>
								</div>
							</div>
						);
					})}
					
				</div>
				{/* </div> */}
				<button className='loadmore d-flex mx-auto my-5 border border-blue-900 py-1 px-5'>
					Load More
				</button>
				{/* <Footer/> */}

				<Footer className='m-0' />
			</div>
		</Layout>
	);
}

export default Trends;
