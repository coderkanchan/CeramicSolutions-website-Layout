import logo from '../assets/footerlogo.png';
import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { input } from 'framer-motion/client';


const SocialIcons = [
  { id: 1, icon: <FaFacebookF />, url: "https://facebook.com" },
  { id: 2, icon: <AiFillInstagram />, url: "https://instagram.com" },
  { id: 3, icon: <FaXTwitter />, url: "https://twitter.com" },
  { id: 4, icon: <FaLinkedinIn />, url: "https://linkedin.com" }
]

const Footerdata = [
  {
    id: 1, title: "links",
    links: [
      { id: 1, name: "Home", url: "/" },
      { id: 2, name: "About Us", url: "/about-us" },
      { id: 3, name: "Services", url: "/services" },
      { id: 4, name: "Showcase", url: "/showcase" },
    ],
  },
  {
    id: 2, title: "legal",
    links: [
      { id: 1, name: "Terms Of Use", url: "/terms-Of-Use" },
      { id: 2, name: "Privacy Policy", url: "/privacy-Policy" },
      { id: 3, name: "Cookie Policy", url: "/cookie-Policy" },
    ],
  },
  {
    id: 3, title: "product",
    links: [
      { id: 1, name: "Take Tour", url: "/take-Tour" },
      { id: 2, name: "Live Chat", url: "/live-Chat" },
      { id: 3, name: "Reveiws", url: "/reveiws" },
    ],
  },
  {
    id: 4, title: "Newsletter",
    content: [
      { type: "text", value: "Stay Up To Date" },
      { type: "form", placeholder: "Your email", buttonText: "Subscribe" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
     
    if (email) {
      // alert('Subscribed with email:', email);
        alert("Subscription attempted!");
      setEmail('')
     }
    else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="w-full pt-20">

      <div className="max-w-[1320px] flex justify-between xl:items-center xl:flex-row flex-col gap-20  mx-auto px-3 ">

        <div className="max-w-[250px] flex flex-col gap-6">

          <div>
            <img src={logo} alt='LogoImage' />
          </div>

          <div className='flex gap-3 flex-col items-center group cursor-pointer '>

            <a href='mailto:help@Dealzip.com' className='flex gap-3 items-center group cursor-pointer '>
              <span className='text-[28px] text-[#FF0000] group-hover:scale-120'><MdMail /></span>
              <span className='text-base font-normal'>help@Dealzip.com</span>
            </a>

            <a href='tel:+123445667889' className='flex gap-3 items-center group cursor-pointer '>
              <span className='text-[28px] text-[#FF0000] group-hover:scale-130'><IoCall /></span>
              <span className='text-base font-normal'>+1 234 456 678 89</span>
            </a>

          </div>

          <div className='flex gap-2 items-center mt-2'>
            {SocialIcons.map((icon) => (
              <a
                key={icon.id}
                href={icon.url}
                rel='noopener noreferrer'
                className='flex items-center justify-center text-2xl text-white hover:bg-white hover:text-[#FF0000] bg-[#FF0000] w-[38px] h-[38px] rounded-full transition-colors duration-300 ease-in'>
                <span className=''>{icon.icon}</span>
              </a>
            ))}
          </div>

        </div>

        <div className='w-full xl:flex xl:flex-row xl:justify-between lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 md:max-w-[900px] sm:max-w-[500px] lg:gap-0 gap-20 '>

          {Footerdata.map((data) => (
            <div key={data.id} className=''>

              <h4 className='font-semibold text-xl '>{data.title}</h4>

              {data.links && (
                <ul className='flex flex-col w-full max-w-[200px]'>
                  {data.links.map((link) => (
                    <Link key={link.id} to={link.url} className='py-4 hover:text-[#FF0000] '>
                      {link.name}
                    </Link>
                  ))}
                </ul>
              )}

              {data.content && (
                <div className=' space-y-2 text-sm'>
                  {data.content.map((item, index) => {
                    if (item.type === 'text') {
                      return <p key={index} className='py-4'>{item.value}</p>
                    }
                    if (item.type === 'form') {
                      return (
                        <div key={index} className='lg:w-[340px] w-[300px] border  border-gray-300 rounded-full p-2 flex items-center justify-between'>
                          <input
                            type='email'
                            placeholder={item.placeholder}
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className='outline-none pl-2 text-base' />
                          <button
                            onClick={handleSubscribe}
                            className=' lg:w-[140px] lg:h-[50px] w-[100px] h-[40px] bg-[#FF0000] rounded-full text-white text-sm lg:text-base font-semibold cursor-pointer hover:scale-105 hover:bg-[#e10b0b]'>{item.buttonText}</button>
                        </div>
                      )
                    }
                  })}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      <div className="border-t border-gray-200 mt-10 py-6 text-center text-gray-500 text-sm">
        <p>Copyright 2024 Ceramicsolutions.Com All Rights Reserved</p>
      </div>

    </div>
  )
}