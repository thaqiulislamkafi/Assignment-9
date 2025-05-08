import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router';
// import { toast, ToastContainer } from 'react-toastify';

const EventDetails = () => {

    const eventDatas = useLoaderData();
    const { id } = useParams();

    const data = eventDatas.find(event => event.id == id)
    console.log(data);

    const handleReserve = ()=> {
        // toast.success('Successfully Reserved')
    }
    return (
        <div>
            {/* <ToastContainer></ToastContainer> */}

            <Helmet>
                <title>Event Details | {id}</title>
            </Helmet>
            <div className='w-[85.94vw] mx-auto sora-font my-12'>

                {/* ..............Title Bar.............. */}

                <div className='bg-gray-100 text-center py-16 rounded-xl px-16 '>
                    <p className='text-4xl my-3 poppins font-bold'>Event Details</p>
                    <p className='text-gray-800 my-2 text-sm'>Explore everything you need to know about this exciting event! Get the full details on dates, venue, featured performers, and schedules. Whether you're looking for ticket information, special guest appearances, or event highlights, this page has all the essential info to help you plan your experience.</p>
                </div>

              {/* ..............Event Bar.............. */}

                <div className='my-10 p-7 border-2 border-gray-200 rounded-xl flex flex-col md:flex-row md:items-center gap-8 font-medium'>
                    <div className='bg-gray-200 p-6 rounded-xl lg:w-[29.13vw] h-auto'><img className='rounded-xl' src={data.thumbnail} alt="" /></div>

                    <div className='text text-gray-700'>
                        <p className='text-[#176AE5] text-xs px-3 py-2 bg-[#1769e51c] rounded-2xl w-fit my-2'># {data.category} </p>
                        <p className='poppins my-2 text-3xl font-bold'>{data.name}</p>
                        <p className='flex flex-col gap-2 my-2 text-lg'>
                            <span>Location : {data.location}</span>
                            <span>Event Date : {data.date}</span>
                        </p>

                        <p className='font-medium my-2'>Entry Fee : <span className='text-[#23BE0A] font-bold'>{data.entry_fee}</span></p>

                    </div>
                </div>

                {/* ..............Event Details Bar.............. */}

                <div className='border-2 border-gray-200 rounded-xl p-7 text-center'>
                <p className='poppins text-2xl my-3 font-bold'>Details</p>
                <div className='border-t-2 border-dashed border-gray-200 my-4'></div>
                <div className='text-start'>
                    <p className='font-medium'>{data.details}</p>
            
                </div>
                <div className='border-t-2  border-gray-100 my-4'></div>
               
                <div className='text-xl font-medium my-3'><p>Reserve A Seat</p></div>
                <div className='flex items-center gap-3'>
                <input type="text" placeholder="Your Name" className="input" />
                <input type="text" placeholder="Your Email" className="input" />
                </div>
                <div><button onClick={handleReserve} className='Button mt-6 w-full text-white bg-[#0EA106] '>Reserve a Seat</button></div>
                


            </div>
            </div>
        </div>
    );
};

export default EventDetails;