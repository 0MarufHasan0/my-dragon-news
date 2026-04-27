import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RrightSidebar = () => {
    return (
        <div>
            <h2 className='font-bold text-xl'> Login with</h2>
            <div className='flex flex-col mt-3'>
            <button className='btn border-blue-500 mb-2 text-blue-500'> 
                <FaGoogle />Login with Google</button>
            <button className='btn'>
                <FaGithub />Login with GitHub</button>
                </div>
        </div>
    );
};

export default RrightSidebar;