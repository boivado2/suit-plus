import Link from 'next/link';
import React from 'react';
import { HiUser } from 'react-icons/hi2';


function AppBar(props) {
  return (
    <div className='flex items-center w-full mb-12 justify-between'>
      <h5 className=' font-bold text-xl text-primary'>
        {props.page}
      </h5>
      <Link href={'/profile'}>
      <span className="pt-1 text-xl text-primary">
        <HiUser/>
      </span>
      </Link>
    </div>
  )
}

export default AppBar