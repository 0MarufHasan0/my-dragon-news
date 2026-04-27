import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-between items-center bg-gray-200 py-4 container mx-auto px-2'>
            <button className='btn  bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}  speed= {200}>
                Breaking News: New Dragon Species Discovered in the Mountains!
            </Marquee>
        </div>
    );
};

export default BreakingNews;