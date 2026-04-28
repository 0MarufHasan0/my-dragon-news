"use client";

import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RrightSidebar = () => {

    const handleGoogleLogin = async () => {
        // Implement Google login logic here
         const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log("Google login response:", data);
    };

    const handleGithubLogin = async () => {
        // Implement GitHub login logic here
         const data = await authClient.signIn.social({
        provider: "github"
    })
    console.log("GitHub login response:", data);
    };

    return (
        <div>
            <h2 className='font-bold text-xl'> Login with</h2>
            <div className='flex flex-col mt-3'>
            <button className='btn border-blue-500 mb-2 text-blue-500' onClick={handleGoogleLogin}> 
                <FaGoogle />Login with Google</button>
            <button className='btn' onClick={handleGithubLogin}>
                <FaGithub />Login with GitHub</button>
                </div>
        </div>
    );
};

export default RrightSidebar;