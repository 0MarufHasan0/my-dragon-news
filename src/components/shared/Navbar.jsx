import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6 '>
            <div></div>
           <ul className='flex justify-between items-center text-gray-700 gap-3'>
            <li>
                <Navlink href={'/'}>Home</Navlink>
            </li>
            <li>
                <Navlink href={'/about'}>About</Navlink>
            </li>
            <li>
                <Navlink href={'/career'}>Career</Navlink>
            </li>
           </ul>

           <div className='flex items-center gap-2'>
            <Image
            
            src={userAvatar}
            alt="User Avatar"
             width={60}
             height={60}
             className="rounded-full"
            
            />
            <button className='btn bg-purple-500 text-white'><Link href={'/login'}>Login</Link></button>
           </div>
        </div>
    );
};

export default Navbar;