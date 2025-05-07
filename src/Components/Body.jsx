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
            
            <EventFAQSection></EventFAQSection>
            <NewsletterSubscribe></NewsletterSubscribe>
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


const NewsletterSubscribe = () => {
  return (
    <section className="">
      <div
        className="z-40 mailbox w-[85.94vw] mx-auto bg-gray-200 rounded-3xl px-7 py-10 lg:py-12 lg:px-20 flex flex-col lg:flex-row gap-5 justify-between items-center lg:-mb-48 -mb-64 relative sora-font"
      >
        <div className="image">
          <img
            className="w-[220px] lg:w-[330px] h-auto"
            src="https://i.postimg.cc/rprF9z6y/vecteezy-letter-e-elegant-golden-ratio-modern-monogram-logo-22188510.png"
            alt="Vegetable basket"
          />
        </div>
        <div className="description text-center lg:text-left">
          <h2 className="font-bold lg:font-semibold text-xl lg:text-3xl text-accentcolor lg:text-black">
            Get Event News!
          </h2>
          <p className="text-base lg:text-lg my-4">
            Exclusive events and event titles, details and more.
          </p>
          <input
            type="text"
            placeholder="Enter Email"
            className="input input-ghost w-full max-w-xs bg-white"
          />
          <div className="btn mt-3">
            <button className="my-5 bg-accentcolor  text-sm py-2 px-7 rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



const EventFAQSection = () => {
  return (
    <section className="py-[70px] lg:py-[80px] w-[85.94vw] mx-auto lg:mb-28 sora-font">
      <p className="text-2xl font-semibold lg:text-3xl text-accentcolor mb-8">
        Frequently Asked Questions
      </p>
      <div className="asked bg-base-200 rounded-2xl lg:px-14 lg:py-20">
        <div className="asked-container flex gap-6 flex-col p-3 lg:p-0 lg:flex-row lg:justify-between">
          <div className="asked-title p-5 lg:ml-6">
            <img
              className="w-[250px] mx-auto lg:w-[350px]"
              src="https://i.postimg.cc/W4qy6W7k/Frame.png"
              alt="Event tracking illustration"
            />
          </div>
          <div className="asked-accordion space-y-2 lg:space-y-5 max-w-[600px]">
            {/* FAQ Item 1 */}
            <div className="collapse collapse-arrow bg-base-100 border-2 border-gray-100">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-sm lg:text-lg font-medium">
                How do I track local events in my area?
              </div>
              <div className="collapse-content text-xs lg:text-sm">
                <p>
                  Our platform automatically detects and displays events based on your location. You can also search by event type, date, or venue. Enable location services for the most accurate local event recommendations.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="collapse collapse-arrow bg-base-100 border-2 border-gray-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-sm lg:text-lg font-medium">
                Can I submit my own event to be tracked?
              </div>
              <div className="collapse-content text-xs lg:text-sm">
                <p>
                  Yes! We encourage community event submissions. Click on "Add Event" in the navigation menu and fill out the event details. Our team will review and approve it within 24 hours.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="collapse collapse-arrow bg-base-100 border-2 border-gray-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-sm lg:text-lg font-medium">
                How often is event information updated?
              </div>
              <div className="collapse-content text-xs lg:text-sm">
                <p>
                  Our system updates event information in real-time. We pull data from official sources every 15 minutes and immediately reflect any changes submitted by event organizers.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="collapse collapse-arrow bg-base-100 border-2 border-gray-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-sm lg:text-lg font-medium">
                Is there a mobile app for event tracking?
              </div>
              <div className="collapse-content text-xs lg:text-sm">
                <p>
                  Currently we offer a mobile-optimized website, with an iOS and Android app coming soon. You can save the website to your home screen for app-like functionality.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="collapse collapse-arrow bg-base-100 border-2 border-gray-100">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-sm lg:text-lg font-medium">
                How do I get notifications for new events?
              </div>
              <div className="collapse-content text-xs lg:text-sm">
                <p>
                  After creating an account, you can customize notification preferences in your profile settings. Choose to receive alerts by email, browser notifications, or both.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

