"use client";

import React from 'react';
import { signOut} from 'firebase/auth';
import { auth } from '@/firebaseconfig';
import { useRouter } from 'next/router';
import Login from './login';
import Layout from '@/components/Layout';


function Signout() {
    const router = useRouter();
    const signout = () => {
          signOut(auth).then(() => {
              alert("Signed out")
          });

          if(signout){
              // router.push();
              // return <Login/>
          }
    
    } 

  return (
    <Layout>
    <div>
        {signout ?
            <div>
             <h3 className='mt-5 mx-3'>Profile</h3> 
             <p></p>
             <button className='btn btn-dark text-white' onClick={signout}>Sign out</button> 
            </div> 
            : <Login/> 
        }
     </div>
     </Layout>
  )
}

export default Signout