"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const Navlink = ({ href, children }) => {
    const pathname = usePathname();
    return (
       
            <Link
             className={`${pathname === href ? "text-purple-500 font-semibold" : "text-gray-700 hover:text-purple-500"} transition-colors duration-300`}
            
            href={href}>{children}
            
            </Link>
       
    );
};

export default Navlink;