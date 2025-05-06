import React from 'react';
import { Link, NavLink } from 'react-router';
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <div className=' w-[85.94vw] mx-auto py-24 flex flex-col justify-center text-start md:items-center'>
                <div className='text-2xl poppins flex items-center gap-4 text-white my-2'>
                    <div><img className='w-12' src="https://i.postimg.cc/0yDJrn8Z/Eventure-footer-logo.png" alt="" /></div>
                    <span className='font-bold text-3xl'>Eventure</span>
                </div>
                <div className='pageButtton my-2 text-start md:text-center sora-font'>
                    <ul className='flex flex-col md:flex-row gap-5 mt-0.5 text-sm text-white'>
                        <NavLink to={'/terms'}>Terms and Conditions</NavLink>
                        <NavLink to={'/privacy'}>Privacy and Policy</NavLink>
                        <NavLink to={'/contact'}>Contacts</NavLink>
                    </ul>
                </div>

                <div className='my-5 border-t-2 border-dashed border-gray-800 w-full'></div>

                <div className='flex items-center gap-4'>
                    <div><a href="https://www.facebook.com/thaqiulislamkafi" target="_blank"><MdFacebook color='white' size={20} /></a></div>
                    <div><a href="https://www.instagram.com/thaqiulislamkafi/" target="_blank"><FaInstagram color='white' size={20} /></a></div>
                    <div><a href="https://github.com/thaqiulislamkafi/" target="_blank"><FaGithub color='white' size={20} /></a></div>
                    <div><a href="https://www.youtube.com/@ProgrammingHeroCommunity" target="_blank"><FaYoutube color='white' size={20} /></a></div>
                </div>
            </div>

        </div>
    );
};

export default Footer;