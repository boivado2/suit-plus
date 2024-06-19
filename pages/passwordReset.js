"use client";
import React, { useState } from 'react';
import { auth } from '@/firebaseconfig';
import Layout from '@/components/Layout';
import { sendPasswordResetEmail } from 'firebase/auth';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent! Check your inbox.');
    } catch (error) {
      setMessage('Error: ' + error.message);
    }
  };

  return (
    <Layout>
    <div className='mt-28 p-3'>
      <h1>Reset Your Password</h1>
      <form onSubmit={handlePasswordReset}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-75 mx-3"
        />
        <button type="submit" className='btn btn-outline-primary p-3 m-3'>Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </Layout>
  );
};

export default PasswordReset;
