import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2, CiStar } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';

const NewsCard = ({news}) => {
    return (
       <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
{/* AUthor info */}
<div className='flex justify-between items-center bg-slate-200 p-2'>
    <div className='flex gap-1 items-center
    '>
        <Image
        src={news.author?.img}
         alt={news.author?.name || "Author image"}
        width={40}
        height={40}
        className="rounded-full"
        
        />
      <div>
          <h2 className="font-semibold">{news.author?.name}</h2>
          <p className='text-xs'>{news.author?.published_date}</p>
      </div>
    </div>
   <div className='flex justify-between items-center'>
     <CiShare2 className='text-xl'/>
    <CiBookmark className='text-xl' />
   </div>
</div>

    <h2 className="card-title">{news.title}</h2>
    

 <figure>
    <Image
     width={400}
     height={200}
      className='w-full'
      src={news.image_url}
      alt={news.title}
      />
  </figure>

<p className='text-gray-500 line-clamp-3 '>{news.details}</p>

<div className='flex justify-between items-center mt-3'>
    <div className='flex items-center gap-2'>

<h2 className='flex items-center gap-2'>
    <CiStar className='text-lg text-yellow-500 ' />
    {news.rating.number}

</h2>
<h2 className='flex items-center gap-2'>
    <FaEye className='text-lg'/>
    {news.total_view} 
</h2>
    </div>
<Link href={`/news/${news._id}`} className='btn btn-sm bg-purple-500 text-white'>Read More</Link>
    
</div>

  </div>
 
 
</div>
    );
};

export default NewsCard;