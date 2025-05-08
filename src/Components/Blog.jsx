import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Footer from './Footer';


const Blog = () => {

    const blogs = useLoaderData();
    console.log(blogs);

    return (
        <div>
            <div className='w-[85.94vw] mx-auto sora-font my-16 text-center sora-font'>
                <p className='my-5 mb-12 text-4xl poppins font-bold'>Blogs</p>

                <div className='my-3 space-y-9.5'>
                    {
                        blogs.map(data => <Post data={data}> </Post>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

const Post = ({data}) => {

    return (
        <div>
            <div className='border-2 border-gray-200 rounded-2xl py-6 px-10 text-start'>
                <p className='text-xl md:text-2xl text-gray-900 font-medium my-2 mb-6'>{data.title}</p>
                <div className=' border-t-2 border-dashed border-gray-200 my-5'></div>
                <p className='text-gray-700 my-2 text-sm md:text-base'>{data.description}</p>
            </div>

        </div>
    );
};

export default Blog;