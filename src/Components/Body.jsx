import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';

const Body = () => {

    const eventDatas = useLoaderData()

    return (
        <div>
            <Banner></Banner>

            <div className='w-[85.94vw] mx-auto my-20'>
                <p className='poppins lg:text-3xl md:text-2xl text-xl my-12 font-bold'>Upcoming Events</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                    {
                        eventDatas.map(data => <Event data={data}></Event>)
                    }

                </div>

            </div>
        </div>
    );
};

export default Body;

const Event = ({ data }) => {


    return (
        <div>
            <div className='border-2 border-gray-200 p-5 flex flex-col gap-6 rounded-xl sora-font'>
                <div className='bg-gray-100 md:p-6 rounded-xl w-full h-auto'><img className='rounded-xl h-48' src={data.thumbnail} alt="" /></div>
                <div className='text-start'>
                    <div className='flex gap-3 font-medium'>
                        <p className='text-[#23BE0A] text-xs px-3 py-2 bg-[#22be0a1e] rounded-2xl'># Available </p>
                        <p className='text-[#176AE5] text-xs px-3 py-2 bg-[#1769e51c] rounded-2xl'># {data.category}</p>
                    </div>
                    <p className='font-bold my-2 text-xl'>{data.name}</p>
                    <p className='text-gray-700 my-1 text-sm'>Location : {data.location}</p>
                    <div className='flex items-center justify-between'>
                        <p className='text-gray-700 my-1 text-sm font-medium'> Entry Fee : {data.entry_fee}</p>
                        <p className='text-gray-700 my-1 text-sm font-medium'> Date : {data.date}</p>
                    </div>

                    <div>
                        <Link to={`event/${data.id}`}>
                            <button className='Button text-black bg-gray-200 text-xs my-2'>View more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};