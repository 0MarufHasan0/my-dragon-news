import Leftsidebar from '@/components/homepage/news/Leftsidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RrightSidebar from '@/components/homepage/news/RrightSidebar';
import { getCategories, getNewsBycategoryID } from '@/lib/data';
import React from 'react';

export const metadata = {
  title: "The Dragon News - Category",
 
};


const NewsCategory = async ({params}) => {
    const {id} = await params;
const categories = await getCategories();
  const news = await getNewsBycategoryID(id);

    return (
      <div className=" container mx-auto grid  grid-cols-12 gap-4 my-15">

  {/* All categories */}
  <div className=" col-span-3">
  <Leftsidebar categories={categories} activeId={id} />
  </div>

  {/* Content */}

  <div className=" col-span-6">
   <h2 className='font-bold text-lg mb-6'>News by Category</h2>
   <div className="space-y-4 ">
     { news.length===0 && <p className='text-center text-2xl font-bold'>No news found in this category</p>}
     {
      news.map(n => {
        return <NewsCard news={n}  key={n._id} />;
      })
    }
   </div>
  </div>

{/* social */}

<div className=" col-span-3">
<RrightSidebar/>
</div>

</div>
    );
};

export default NewsCategory;