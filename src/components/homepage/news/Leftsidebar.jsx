import Link from 'next/link';
import React from 'react';

const Leftsidebar = ({categories ,activeId}) => {
    return (
        <div>
              <h1 className="font-bold text-lg">
      All Categories
    </h1>
    <ul className="flex flex-col gap-3 mt-3 ">
      {categories.map((category) => (
        <li className={` bg-slate-100 p-2 rounded-md font-bold text-center text-md `} key={category.category_id}>
          <Link className={`block ${activeId === category.category_id ? "bg-purple-500 text-green p-2 rounded-md text-white" : ''}`} href={`/category/${category.category_id}`}>{category.category_name}</Link>
        </li>
      ))}
    </ul>
        </div>
    );
};

export default Leftsidebar;