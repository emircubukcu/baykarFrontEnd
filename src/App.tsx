import { useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'

import { ArrowLeft, ArrowRight, Bath, Bed, ChevronLeft, ChevronRight, CircleUserRound, DollarSign, Facebook, Flame, Home, HousePlus, Instagram, Linkedin, Mail, MapPin, MenuIcon, Pentagon, Phone, Plus, Search, SlidersVertical, SquareUserRound, Star, X } from "lucide-react";

import './App.css'
import pic1 from '/pic-1.jfif'
import pic2 from '/pic-2.jfif'
import pic3 from '/pic-3.jfif'
import pic4 from '/pic-4.jfif'
import pic5 from '/pic-5.jfif'
import pic6 from '/pic-6.jfif'
import pic7 from '/pic-7.jfif'
import pic8 from '/pic-8.jfif'
import pic9 from '/pic-9.jfif'
import pic10 from '/pic-10.jfif'
import pic11 from '/pic-11.jfif'

import user1 from '/user-1.jfif'
import user2 from '/user-2.jfif'
import user3 from '/user-3.jfif'
import user4 from '/user-4.jfif'
import user5 from '/user-5.jfif'


function App() {

    const [propertyVisibility, setProVisibilty] = useState(false)
    const [blogVisibility, setBlogVisibilty] = useState(false)

    const [menuVisibility, setMenuVisibility] = useState(false)


    const showMenu = () => {
        setMenuVisibility(!menuVisibility);
    }

    const scrollTo = (elementID:string) => {
        if(menuVisibility){
            setMenuVisibility(false)
        }
        document.getElementById(elementID)?.scrollIntoView({behavior:"smooth"})
    }

    return (
        <>
            {menuVisibility && (
                <>
                    <div className="absolute top-[80px] left-0 right-0 pb-8 bg-white z-50">
                        <div className="flex flex-col justify-start px-20">
                            <div className="flex flex-col justify-start">
                                <div onClick={()=>{scrollTo("realEstate")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">Home</div>
                                <div onClick={()=>{scrollTo("about")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">About</div>
                                <div onClick={()=>{scrollTo("listings")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">Listings</div>
                                <div onClick={()=>{scrollTo("services")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">Services</div>
                                <div onClick={()=>{scrollTo("blogs")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">Blogs</div>
                                <div className='px-4 py-2 rounded-full text-[#2B2B2B] text-base font-medium hover:bg-[#F6F6F6] hover:cursor-pointer transition flex flex-row justify-center items-center'><CircleUserRound size={18} color="#2B2B2B" className="mr-2" />Login/Register</div>
                                <div className='px-[26px] py-[15px] rounded-full bg-[#3A0CA3] text-white text-base font-medium hover:cursor-pointer transition flex flex-row justify-center items-center'> <HousePlus size={20} color="white" className="mr-2" />Add Listing</div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="hidden md:flex bg-[#3A0CA3] w-full h-[40px]  justify-between items-center px-16">
                <div className="font-sans text-white text-xs flex flex-row justify-center items-center"><MapPin size={16} className="mr-2" />Lorem Ipsum has been the industry's standard dummy</div>
                <div className='flex justify-between gap-10'>
                    <div className="font-sans text-white text-xs flex flex-row justify-center items-center"><Phone size={16} className="mr-2 -scale-x-100" /> +90123 45 67</div>
                    <div className="font-sans text-white text-xs flex flex-row justify-center items-center"><Mail size={16} className="mr-2" />mail@mail.com</div>
                </div>
            </div>
            <div className="hidden md:grid grid-rows-1 grid-cols-[auto_1fr_auto] bg-white w-full h-[80px]   px-16">
                <div className="flex justify-start items-center overflow-auto w-full z-20">
                    <div onClick={()=>{scrollTo("realEstate")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">Home</div>
                    <div onClick={()=>{scrollTo("about")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">About</div>
                    <div onClick={()=>{scrollTo("listings")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">Listings</div>
                    <div onClick={()=>{scrollTo("services")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">Services</div>
                    <div onClick={()=>{scrollTo("blogs")}} className="px-4 py-2 font-medium rounded-full text-base bg-white text-[#444444] hover:bg-[#4361EE4D] hover:cursor-pointer hover:text-[#2B2B2B] transition">Blogs</div>
                </div>
                <div className="flex  justify-center items-center h-full -ml-[50px] ">
                    <div className="rounded-full bg-[#3A0CA3] w-[50px] h-[50px] flex justify-center items-center">
                        <HousePlus color="white" />
                    </div>
                    <div className='text-[#1E1E1E] font-semibold text-2xl pl-2'>Logo</div>
                </div>
                <div className="flex justify-end items-center h-full gap-5">
                    <div className='px-4 py-2 rounded-full text-[#2B2B2B] text-base font-medium hover:bg-[#F6F6F6] hover:cursor-pointer transition flex flex-row justify-center items-center'><CircleUserRound size={18} color="#2B2B2B" className="mr-2" />Login/Register</div>
                    <div className='px-[26px] py-[15px] rounded-full bg-[#3A0CA3] text-white text-base font-medium hover:cursor-pointer transition flex flex-row justify-center items-center'> <HousePlus size={20} color="white" className="mr-2" />Add Listing</div>
                </div>
            </div>
            <div className="grid md:hidden grid-rows-1 grid-cols-2 bg-white w-full h-[80px] px-[30px]">
                <div className="flex  justify-start items-center h-full ">
                    <div className="rounded-full bg-[#3A0CA3] w-[50px] h-[50px] flex justify-center items-center">
                        <HousePlus color="white" />
                    </div>
                    <div className='text-[#1E1E1E] font-semibold text-2xl pl-2'>Logo</div>
                </div>
                <div className="flex justify-end items-center">
                    <button className="px-3 py-3 flex justify-center items-center hover:cursor-pointer hover:bg-[#F6F6F6] rounded-full">
                        {menuVisibility ? <X onClick={showMenu} /> : <MenuIcon onClick={showMenu} />}
                    </button>
                </div>
            </div>

            <div id="realEstate" className="backgroundShape px-6 pt-4  flex md:pt-16 md:px-32  flex-wrap bg-transparent gap-y-12 pb-12 ">
                <div className="w-full lg:w-6/12 lg:pr-5">
                    <div className="text-[#4361EE] font-medium tracking-widest pb-4">REAL ESTATE</div>
                    <h1 className="text-[#0B090A] font-semibold text-4xl lg:text-6xl">Find a perfect home you love..!</h1>
                    <div className="text-[#808080] font-normal text-base break-words mt-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
                    <div className="flex justify-center items-center mt-12 circle1">
                        <button className="carousel1-prev bg-white hover:bg-[#F6F6F6] rounded-full hover:cursor-pointer h-[40px] w-[40px] -mr-[20px] z-10 transition flex justify-center items-center"><ChevronLeft size={25} color="#AAAAAA" /></button>
                        <Swiper className="w-full " init={false} 
                            navigation={{ nextEl: '.carousel1-next', prevEl: '.carousel1-prev' }}
                            pagination={{
                                clickable: true, el: '.pagination1', bulletActiveClass: "carousel1-paginationActive", bulletClass: "carousel1-pagination ", renderBullet: (_index, className) => {

                                    return '<span class="!w-full !rounded-[4px] !mx-5 ' + className + '"></span>'
                                }
                            }}
                            loop={true}
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={1}
                        >
                            <SwiperSlide><div className="bg-slate-600 w-full lg:h-[340px] max-h-[340px] min-h-[100px] rounded-3xl overflow-hidden"><img className="w-full h-full object-cover" src={pic1} /></div></SwiperSlide>
                            <SwiperSlide><div className="bg-slate-600 w-full lg:h-[340px] max-h-[340px] min-h-[100px] rounded-3xl overflow-hidden"><img className="w-full h-full object-cover" src={pic2} /></div></SwiperSlide>
                            <SwiperSlide><div className="bg-slate-600 w-full lg:h-[340px] max-h-[340px] min-h-[100px] rounded-3xl overflow-hidden"><img className="w-full h-full object-cover" src={pic1} /></div></SwiperSlide>
                            <SwiperSlide><div className="bg-slate-600 w-full lg:h-[340px] max-h-[340px] min-h-[100px] rounded-3xl overflow-hidden"><img className="w-full h-full object-cover" src={pic2} /></div></SwiperSlide>
                        </Swiper>
                        <button className="carousel1-next bg-white hover:bg-[#F6F6F6] rounded-full hover:cursor-pointer h-[40px] w-[40px] -ml-[20px] z-10 transition flex justify-center items-center" ><ChevronRight size={25} color="#AAAAAA" /></button>
                    </div>
                    <div className="pagination1 w-full flex flex-row mt-2 px-[12px] lg:px-[32px]"></div>
                </div>
                <div className="w-full lg:w-6/12 flex justify-center items-center  rounded-[20px] lg:p-[30px]">
                    <div className='bg-white rounded-[20px]  w-full max-w-[500px] border-2'>
                        <div className='bg-white rounded-t-[20px]'>
                            <div className='flex px-8 pt-8 -pb-[3px] gap-4 border-b-[3px]'>
                                <button className='w-1/2 text-base hover:text-[#3A0CA3] font-medium text-center border-solid border-b-[3px] border-b-transparent hover:border-b-[#3A0CA3] pb-3'>For Sale</button>
                                <button className='w-1/2 text-base hover:text-[#3A0CA3] font-medium text-center border-solid border-b-[3px] border-b-transparent hover:border-b-[#3A0CA3] pb-3'>For Rent</button>
                            </div>
                        </div>
                        <div className="h-[500px] flex flex-col gap-0">
                            <div className='flex justify-center items-center px-8 pt-12 pb-2'>
                                <input className='w-full bg-[#D4D4D433] rounded-[20px] p-4 placeholder:text-[#AAAAAA] focus:ring-0 ' placeholder='New York, San Francisco,etc' />
                            </div>
                            <div className='flex justify-center items-center p-8 pb-2'>
                                <select className='form-select bg-no-repeat  appearance-none w-full bg-[#D4D4D433] rounded-[20px] p-4 placeholder:text-[#AAAAAA] text-[#AAAAAA]'>
                                    <option value="0">Select Property Type</option>
                                    <option value="1">Property 1</option>
                                    <option value="2">Property 2</option>
                                </select>
                            </div>
                            <div className='flex justify-center items-center p-8 pb-2'>
                                <select className='form-select bg-no-repeat appearance-none w-full bg-[#D4D4D433] rounded-[20px] p-4 placeholder:text-[#AAAAAA] text-[#AAAAAA] pr-4'>
                                    <option value="0">Select Rooms</option>
                                    <option value="1">Room 1</option>
                                    <option value="2">Room 2</option>
                                </select>
                            </div>
                            <div className='flex justify-start items-center p-8 pt-2'>
                                <a className='text-[#3A0CA3] hover:cursor-pointer hover:underline hover:underline-offset-1 flex flex-row justify-center items-center'><SlidersVertical size={14} className="mr-2" />Advance Search</a>
                            </div>
                            <div className='flex w-full p-8'>
                                <button className='flex w-full justify-center items-center bg-[#3A0CA3] p-4 rounded-[50px] text-white font-medium text-base flex-row hover:shadow-md transition'><Search size={20} className="mr-2" />Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 flex justify-center items-center lg:justify-end lg:items-center lg:pr-5">
                    <div className='bg-white flex justify-start items-center px-8 py-6 rounded-[50px] shadow-xl'>
                        <div className='flex w-full justify-start items-center'>
                            <div className='w-[36px] h-[36px] rounded-full bg-red-400 border-2 border-white -mr-3 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={user1} /></div>
                            <div className='w-[36px] h-[36px] rounded-full bg-red-400 border-2 border-white -mr-3 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={user2} /></div>
                            <div className='w-[36px] h-[36px] rounded-full bg-red-400 border-2 border-white -mr-3 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={user3} /></div>
                            <div className='w-[36px] h-[36px] rounded-full bg-red-400 border-2 border-white -mr-3 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={user4} /></div>
                            <div className='w-[36px] h-[36px] rounded-full bg-red-400 border-2 border-white -mr-3 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={user5} /></div>
                            <div className='w-[36px] h-[36px] rounded-full bg-black border-2 border-white mr-3 overflow-hidden flex justify-center items-center'><Plus size={18} color="white" className="absolute" /><img className="w-full h-full object-cover opacity-30" src={user5} /></div>
                        </div>
                        <div className='text-[#2B2B2B] font-medium text-base'>72k+ Happy<br /> Customers</div>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 flex justify-center items-center lg:justify-start lg:items-center lg:pl-5">
                    <div className='bg-white flex justify-start items-center px-8 py-4 rounded-[50px] shadow-xl '>
                        <div className='w-[60px] h-[60px] rounded-full bg-red-400 border-2 border-white mr-2 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={pic7} /></div>
                        <div className='text-[#2B2B2B] font-medium text-base'>200+ New<br />Listings Everyday!</div>
                    </div>
                </div>
            </div>
            <div className="circle2 h-0"></div>
            <div id="about" className="grid grid-cols-1 grid-rows-[min-content_auto_min_content] pt-5 px-6 lg:pt-12 lg:px-32 lg:grid-cols-2 lg:grid-rows-[min-content_1fr] mb-12">
                <div className="w-full lg:pr-5">
                    <div className="text-[#4361EE] font-medium tracking-widest pb-4">WHO ARE WE</div>
                    <h2 className='text-[#2B2B2B] font-semibold text-2xl lg:text-4xl'>Assisting individuals in locating the appropriate real estate</h2>
                    <div className='text-[#808080] font-normal text-base break-words mt-5'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </div>
                </div>
                <div className='w-full h-full  lg:row-start-1 lg:col-start-2 lg:row-end-3 lg:col-end-3'>
                    <div className='flex w-full h-full'>
                        <div className='flex justify-center items-center h-full w-1/2 lg:p-5'>
                            <div className='bg-red-500 rounded-[30px] lg:h-[500px] w-full min-h-[250px] overflow-hidden flex justify-center items-center'><img className="h-[250px] w-full lg:h-full object-cover" src={pic2} /></div>
                        </div>
                        <div className='flex justify-start h-full flex-col w-1/2 gap-5 p-5 pb-[70px] lg:pb-[200px] '>
                            <div className='bg-red-500 rounded-[30px]  w-full min-h-[140px] lg:min-h-[280px] overflow-hidden'><img className="w-full h-full object-cover" src={pic3} /></div>
                            <div className='bg-red-500 rounded-[30px]  w-full min-h-[100px] lg:min-h-[180px] overflow-hidden '><img className="w-full h-full object-cover" src={pic11} /></div>
                            <div className="circle3"></div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full flex flex-col justify-start items-start gap-7 lg:pt-6'>
                    <div className='bg-white rounded-[30px] shadow-lg  p-6 h-max flex flex-row items-center justify-center gap-2'>
                        <div className='w-max flex justify-center items-center'>
                            <div className='w-[40px] h-[40px] rounded-[40px]'>
                                <Pentagon size={40} color="#4361EE" />
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-col'>
                            <div className='text-[#4361EE] font-medium text-lg'>Lorem ipsum has been the</div>
                            <div className='text-[#808080] font-normal text-base'>when an unknown printer took a galley</div>
                        </div>
                    </div>
                    <div className='bg-white rounded-[30px] shadow-lg  p-6 h-max flex flex-row items-center justify-center gap-2'>
                        <div className='w-max flex justify-center items-center'>
                            <div className='w-[40px] h-[40px] rounded-[40px]'>
                                <SquareUserRound size={40} color="#4361EE" />
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-col'>
                            <div className='text-[#4361EE] font-medium text-lg'>Lorem ipsum has been the</div>
                            <div className='text-[#808080] font-normal text-base'>when an unknown printer took a galley</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="listings" className='w-full flex flex-wrap px-6 pt-4  lg:pl-32'>
                <div className="w-full flex flex-wrap  gap-5 lg:pr-32">
                    <div className='w-full lg:flex-1'>
                        <div className="text-[#4361EE] font-medium tracking-widest pb-2">CHECKOUT OUR NEW</div>
                        <h2 className='text-[#2B2B2B] font-semibold text-2xl lg:text-4xl'>Latest Listed Properties</h2>
                        <div className='text-[#808080] font-normal text-base break-words mt-5 pb-2'>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </div>
                    </div>
                    <div className='w-full lg:flex-1 flex flex-row justify-start lg:justify-end gap-2 lg:gap-5 lg:items-center'>
                        <div className='w-full border-[1px] border-[#3A0CA3] px-6 py-3 flex justify-center items-center text-[#3A0CA3] font-medium text-base rounded-[30px] hover:cursor-pointer hover:bg-[#3A0CA3] hover:text-white active:bg-[#3A0CA3] active:text-white'>All</div>
                        <div className='w-full border-[1px] border-[#3A0CA3] px-6 py-3 flex justify-center items-center text-[#3A0CA3] font-medium text-base rounded-[30px] hover:cursor-pointer hover:bg-[#3A0CA3] hover:text-white active:bg-[#3A0CA3] active:text-white'>Sell</div>
                        <div className='w-full border-[1px] border-[#3A0CA3] px-6 py-3 flex justify-center items-center text-[#3A0CA3] font-medium text-base rounded-[30px] hover:cursor-pointer hover:bg-[#3A0CA3] hover:text-white active:bg-[#3A0CA3] active:text-white'>Rent</div>
                    </div>
                </div>
                <div className='hidden lg:flex w-full overflow-auto scroll-smooth propList h-[500px] flex-row gap-12 mt-7'>
                    <Swiper className=" w-full h-full max-h-[500px]"
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView="auto"
                    >
                        <SwiperSlide className="min-w-[300px] max-w-[300px] max-h-[500px]">
                            <div className='flex w-full h-full min-w-[300px] max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full max-w-[300px] max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic4} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#FFE1E1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#FF1111]'>
                                        <Flame size={20} className="mr-2" />Popular
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$5,970</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Tranquil Haven in the Woods</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>103 Wright CourtBurien, WA 98168</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" /> 3 Baths</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="min-w-[300px] max-w-[300px] max-h-[500px]">
                            <div className='flex w-full h-full min-w-[300px] max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full max-w-[300px] max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic6} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#D7EEFF] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#119BFF]'>
                                        <Home size={20} className="mr-2" />New Listing
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$1,970</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Serene Retreat by the Lake</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>1964 Jehovah Drive, VA 22408</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />3 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />2 Baths</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="min-w-[300px] max-w-[300px] max-h-[500px]">
                            <div className='flex w-full h-full min-w-[300px] max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full max-w-[300px] max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic5} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#F1FFF1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#00CE3A]'>
                                        <DollarSign size={20} className="mr-2" />Discounted Price
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$3,450</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Charmingg Cottage in the Meadow</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>1508 Centennial Farm RoadHarlan, 51537</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />4 Baths</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="min-w-[300px] max-w-[300px] max-h-[500px]">
                            <div className='flex w-full h-full min-w-[300px] max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full max-w-[300px] max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic7} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#FFE1E1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#FF1111]'>
                                        <Flame size={20} className="mr-2" />Popular
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$5,970</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Tranquil Haven in the Woods</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>103 Wright CourtBurien, WA 98168</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />4 Baths</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="min-w-[300px] max-w-[300px] max-h-[500px]">
                            <div className='flex w-full h-full min-w-[300px] max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full max-w-[300px] max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic4} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#FFE1E1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#FF1111]'>
                                        <Flame size={20} className="mr-2" />Popular
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$5,970</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Tranquil Haven in the Woods</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>103 Wright CourtBurien, WA 98168</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" /> 3 Baths</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="min-w-[300px] max-w-[300px] max-h-[500px]">
                            <div className='flex w-full h-full min-w-[300px] max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full max-w-[300px] max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic6} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#D7EEFF] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#119BFF]'>
                                        <Home size={20} className="mr-2" />New Listing
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$1,970</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Serene Retreat by the Lake</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>1964 Jehovah Drive, VA 22408</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />3 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />2 Baths</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="min-w-[300px] max-w-[300px] max-h-[500px]">
                            <div className='flex w-full h-full min-w-[300px] max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full max-w-[300px] max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic5} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#F1FFF1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#00CE3A]'>
                                        <DollarSign size={20} className="mr-2" />Discounted Price
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$3,450</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Charmingg Cottage in the Meadow</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>1508 Centennial Farm RoadHarlan, 51537</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />4 Baths</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="flex flex-row flex-wrap mt-7 lg:hidden gap-5">
                    <div className='flex w-full md:max-w-[300px] max-h-[500px] flex-col propElement'>
                        <div className='rounded-[30px] w-full h-full  max-h-[300px] bg-blue-500 overflow-hidden'>
                            <img className="w-full h-full object-cover" src={pic4} />
                            <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#FFE1E1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#FF1111]'>
                                <Flame size={20} className="mr-2" />Popular
                            </h5>
                        </div>
                        <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$5,970</h3>
                        <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Tranquil Haven in the Woods</h4>
                        <p className='flex justify-start items-center text-[#808080] font-normal text-base '>103 Wright CourtBurien, WA 98168</p>
                        <div className='flex flex-row justify-start gap-5 mt-3'>
                            <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                            <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" /> 3 Baths</div>
                        </div>
                    </div>
                    <div className='flex w-full md:max-w-[300px] max-h-[500px] flex-col propElement'>
                        <div className='rounded-[30px] w-full h-full  max-h-[300px] bg-blue-500 overflow-hidden'>
                            <img className="w-full h-full object-cover" src={pic6} />
                            <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#D7EEFF] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#119BFF]'>
                                <Home size={20} className="mr-2" />New Listing
                            </h5>
                        </div>
                        <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$1,970</h3>
                        <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Serene Retreat by the Lake</h4>
                        <p className='flex justify-start items-center text-[#808080] font-normal text-base '>1964 Jehovah Drive, VA 22408</p>
                        <div className='flex flex-row justify-start gap-5 mt-3'>
                            <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />3 Beds</div>
                            <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />2 Baths</div>
                        </div>
                    </div>
                    <div className='flex w-full md:max-w-[300px] max-h-[500px] flex-col propElement'>
                        <div className='rounded-[30px] w-full h-full  max-h-[300px] bg-blue-500 overflow-hidden'>
                            <img className="w-full h-full object-cover" src={pic5} />
                            <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#F1FFF1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#00CE3A]'>
                                <DollarSign size={20} className="mr-2" />Discounted Price
                            </h5>
                        </div>
                        <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$3,450</h3>
                        <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Charmingg Cottage in the Meadow</h4>
                        <p className='flex justify-start items-center text-[#808080] font-normal text-base '>1508 Centennial Farm RoadHarlan, 51537</p>
                        <div className='flex flex-row justify-start gap-5 mt-3'>
                            <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                            <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />4 Baths</div>
                        </div>
                    </div>
                    <div className='flex w-full md:max-w-[300px] max-h-[500px] flex-col propElement'>
                        <div className='rounded-[30px] w-full h-full  max-h-[300px] bg-blue-500 overflow-hidden'>
                            <img className="w-full h-full object-cover" src={pic7} />
                            <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#FFE1E1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#FF1111]'>
                                <Flame size={20} className="mr-2" />Popular
                            </h5>
                        </div>
                        <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$5,970</h3>
                        <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Tranquil Haven in the Woods</h4>
                        <p className='flex justify-start items-center text-[#808080] font-normal text-base '>103 Wright CourtBurien, WA 98168</p>
                        <div className='flex flex-row justify-start gap-5 mt-3'>
                            <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                            <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />4 Baths</div>
                        </div>
                    </div>
                    {propertyVisibility && (
                        <>
                            <div className='flex w-full md:max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full  max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic4} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#FFE1E1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#FF1111]'>
                                        <Flame size={20} className="mr-2" />Popular
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$5,970</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Tranquil Haven in the Woods</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>103 Wright CourtBurien, WA 98168</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" /> 3 Baths</div>
                                </div>
                            </div>

                            <div className='flex w-full md:max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full  max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic7} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#FFE1E1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#FF1111]'>
                                        <Flame size={20} className="mr-2" />Popular
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$5,970</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Tranquil Haven in the Woods</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>103 Wright CourtBurien, WA 98168</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />4 Baths</div>
                                </div>
                            </div>
                            <div className='flex w-full md:max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full  max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic5} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#F1FFF1] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#00CE3A]'>
                                        <DollarSign size={20} className="mr-2" />Discounted Price
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$3,450</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Charmingg Cottage in the Meadow</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>1508 Centennial Farm RoadHarlan, 51537</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />4 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />4 Baths</div>
                                </div>
                            </div>
                            <div className='flex w-full md:max-w-[300px] max-h-[500px] flex-col propElement'>
                                <div className='rounded-[30px] w-full h-full  max-h-[300px] bg-blue-500 overflow-hidden'>
                                    <img className="w-full h-full object-cover" src={pic6} />
                                    <h5 className='relative bottom-[70px] left-[30px] w-max h-[40px] bg-[#D7EEFF] flex justify-center items-center px-[24px] py-[5px] rounded-full font-medium text-base text-[#119BFF]'>
                                        <Home size={20} className="mr-2" />New Listing
                                    </h5>
                                </div>
                                <h3 className='flex justify-start items-center text-[#2B2B2B] font-semibold text-2xl mt-3'>$1,970</h3>
                                <h4 className='flex justify-start items-center text-[#2B2B2B] font-medium text-lg'>Serene Retreat by the Lake</h4>
                                <p className='flex justify-start items-center text-[#808080] font-normal text-base '>1964 Jehovah Drive, VA 22408</p>
                                <div className='flex flex-row justify-start gap-5 mt-3'>
                                    <div className="flex flex-row justify-start items-center"><Bed size={20} className="mr-2" />3 Beds</div>
                                    <div className="flex flex-row justify-start items-center"><Bath size={20} className="mr-2" />2 Baths</div>
                                </div>
                            </div>
                        </>
                    )}
                    <div className="flex w-full justify-center items-center py-5">
                        <button onClick={() => { setProVisibilty(!propertyVisibility) }} className="border-[1px] border-[#3A0CA3] text-[#3A0CA3] px-5 py-3 rounded-[30px] text-base font-medium">
                            {propertyVisibility ? <>View less properties</> : <>View more properties</>}
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full circle4"></div>
            <div id="blogs" className='z-10 w-full flex flex-wrap lg:px-32 bg-[#3A0CA3]'>
                <div className='text-white text-center w-full pt-[100px] tracking-widest text-base font-medium'>WHAT’S TRENDING</div>
                <h2 className='text-white font-semibold text-3xl lg:text-4xl text-center w-full pt-2'>Latest Blogs & Posts</h2>

                <div className="hidden lg:flex w-full justify-center items-center mt-12">
                    <Swiper className="px-32 max-w-[1000px] flex justify-center items-center" init={false}
                        navigation={{ nextEl: '.carousel2-next', prevEl: '.carousel2-prev' }}
                        pagination={{
                            clickable: true, el: '.pagination2', bulletActiveClass: "carousel2-paginationActive", bulletClass: "carousel2-pagination ", renderBullet: (_index, className) => {
                                return '<span class="!w-full !rounded-[4px] !mx-5 ' + className + '"></span>'
                            }
                        }}
                        loop={false}
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                    >
                        <SwiperSlide className="max-w-[300px] h-max">
                            <div className='w-full max-w-[300px] h-full flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full max-w-[300px] max-h-[500px] flex-col'>
                                    <div className='rounded-[30px] w-full min-h-[240px] max-w-[300px] max-h-[240px] bg-[#000000] overflow-hidden flex justify-center items-center '>
                                        <img className="h-[240px] object-cover opacity-70" src={pic8} />
                                        <div className='absolute top-[0px] mt-7 left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>28</h4>
                                            <div className='text-[#808080] font-normal text-base' >Tue</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>Top 10 Home Buying Mistakes to Avoid</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="max-w-[300px] h-max">
                            <div className='w-full max-w-[300px] h-full flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full max-w-[300px] max-h-[500px] flex-col'>
                                    <div className='rounded-[30px] w-full min-h-[240px] max-w-[300px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                        <img className="h-[240px] object-cover opacity-70" src={pic9} />
                                        <div className='absolute top-[0px] mt-7 left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>28</h4>
                                            <div className='text-[#808080] font-normal text-base' >Tue</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>How to Stage Your Home for a Quick Sale</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="max-w-[300px] h-max">
                            <div className='w-full max-w-[300px] h-full flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full max-w-[300px] max-h-[500px] flex-col'>
                                    <div className='rounded-[30px] w-full min-h-[240px] max-w-[300px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                        <img className="h-[240px] object-cover opacity-70" src={pic10} />
                                        <div className='absolute top-[0px] mt-7 left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>08</h4>
                                            <div className='text-[#808080] font-normal text-base' >Mon</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>5 Tips for First-Time Home Sellers</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="max-w-[300px] h-max">
                            <div className='w-full max-w-[300px] h-full flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full max-w-[300px] max-h-[500px] flex-col'>
                                    <div className='rounded-[30px] w-full min-h-[240px] max-w-[300px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                        <img className="h-[240px] object-cover opacity-70" src={pic8} />
                                        <div className='absolute top-[0px] mt-7 left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>26</h4>
                                            <div className='text-[#808080] font-normal text-base' >Wed</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>Top 10 Home Buying Mistakes to Avoid</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="max-w-[300px] h-max">
                            <div className='w-full max-w-[300px] h-full flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full max-w-[300px] max-h-[500px] flex-col'>
                                    <div className='rounded-[30px] w-full min-h-[240px] max-w-[300px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                        <img className="h-[240px] object-cover opacity-70" src={pic10} />
                                        <div className='absolute top-[0px] mt-7 left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>28</h4>
                                            <div className='text-[#808080] font-normal text-base' >Tue</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>Top 10 Home Buying Mistakes to Avoid</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="max-w-[300px] h-max">
                            <div className='w-full max-w-[300px] h-full flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full max-w-[300px] max-h-[500px] flex-col'>
                                    <div className='rounded-[30px] w-full min-h-[240px] max-w-[300px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                        <img className="h-[240px] object-cover opacity-70" src={pic8} />
                                        <div className='absolute top-[0px] mt-7 left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>28</h4>
                                            <div className='text-[#808080] font-normal text-base' >Tue</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>Top 10 Home Buying Mistakes to Avoid</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full hidden lg:flex justify-evenly mt-4">
                    <button className="carousel2-prev bg-white hover:bg-[#F6F6F6] rounded-full hover:cursor-pointer h-[40px] w-[40px] -mr-[20px] z-10 transition flex justify-center items-center"><ArrowLeft size={25} color="#AAAAAA" /></button>
                    <button className="carousel2-next bg-white hover:bg-[#F6F6F6] rounded-full hover:cursor-pointer h-[40px] w-[40px] -ml-[20px] z-10 transition flex justify-center items-center" ><ArrowRight size={25} color="#AAAAAA" /></button>
                </div>
                <div className="w-full hidden lg:flex justify-center items-center">
                    <div className="pagination2 !w-1/2 flex flex-row my-16"></div>
                </div>

                <div className="flex flex-row flex-wrap mt-7 px-6 pt-4 lg:hidden gap-5">
                    <div className='w-full md:max-w-[300px] flex flex-col gap-0 mt-7'>
                        <div className='flex w-full h-full  max-h-[500px] flex-col relative'>
                            <div className='rounded-[30px] w-full min-h-[240px]  max-h-[240px] bg-[#000000] overflow-hidden flex justify-center items-center '>
                                <img className="w-full h-[240px] object-cover opacity-70" src={pic8} />
                                <div className='absolute top-[0px] left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>28</h4>
                                    <div className='text-[#808080] font-normal text-base'>Tue</div>
                                </div>
                            </div>
                            <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>Top 10 Home Buying Mistakes to Avoid</h3>
                            <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                        </div>
                    </div>
                    <div className='w-full md:max-w-[300px] flex flex-col gap-0 mt-7'>
                        <div className='flex w-full h-full  max-h-[500px] flex-col relative'>
                            <div className='rounded-[30px] w-full min-h-[240px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                <img className="w-full h-[240px] object-cover opacity-70" src={pic9} />
                                <div className='absolute top-[0px] left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>28</h4>
                                    <div className='text-[#808080] font-normal text-base' >Tue</div>
                                </div>
                            </div>
                            <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>How to Stage Your Home for a Quick Sale</h3>
                            <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.</p>
                        </div>
                    </div>
                    <div className='w-full md:max-w-[300px] flex flex-col gap-0 mt-7'>
                        <div className='flex w-full h-full max-h-[500px] flex-col relative'>
                            <div className='rounded-[30px] w-full min-h-[240px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                <img className="w-full h-[240px] object-cover opacity-70" src={pic10} />
                                <div className='absolute top-[0px] left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>08</h4>
                                    <div className='text-[#808080] font-normal text-base' >Mon</div>
                                </div>
                            </div>
                            <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>5 Tips for First-Time Home Sellers</h3>
                            <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                        </div>
                    </div>
                    {blogVisibility && (
                        <>
                            <div className='w-full md:max-w-[300px] flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full  max-h-[500px] flex-col relative'>
                                    <div className='rounded-[30px] w-full min-h-[240px]  max-h-[240px] bg-[#000000] overflow-hidden flex justify-center items-center '>
                                        <img className="w-full h-[240px] object-cover opacity-70" src={pic8} />
                                        <div className='absolute top-[0px] left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>28</h4>
                                            <div className='text-[#808080] font-normal text-base'>Tue</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>Top 10 Home Buying Mistakes to Avoid</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                                </div>
                            </div>
                            <div className='w-full md:max-w-[300px] flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full max-h-[500px] flex-col relative'>
                                    <div className='rounded-[30px] w-full min-h-[240px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                        <img className="w-full h-[240px] object-cover opacity-70" src={pic10} />
                                        <div className='absolute top-[0px] left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>08</h4>
                                            <div className='text-[#808080] font-normal text-base' >Mon</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>5 Tips for First-Time Home Sellers</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum</p>
                                </div>
                            </div>
                            <div className='w-full md:max-w-[300px] flex flex-col gap-0 mt-7'>
                                <div className='flex w-full h-full  max-h-[500px] flex-col relative'>
                                    <div className='rounded-[30px] w-full min-h-[240px] max-h-[240px] bg-[#000000] overflow-hidden'>
                                        <img className="w-full h-[240px] object-cover opacity-70" src={pic9} />
                                        <div className='absolute top-[0px] left-[50px] w-[50px] h-[50px] bg-[#FFFFFF] flex justify-center items-center px-[10px] rounded-b-[10px] font-medium text-base flex-col '>
                                            <h4 className='text-[#2B2B2B] font-medium text-lg'>28</h4>
                                            <div className='text-[#808080] font-normal text-base' >Tue</div>
                                        </div>
                                    </div>
                                    <h3 className='flex justify-start items-center text-white font-semibold text-2xl mt-3'>How to Stage Your Home for a Quick Sale</h3>
                                    <p className='flex justify-start items-center text-[#D4D4D4] font-normal text-base mt-3'>In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.</p>
                                </div>
                            </div>

                        </>
                    )}
                    <div className="flex w-full justify-start items-center pt-5 pb-20">
                        <button onClick={() => { setBlogVisibilty(!blogVisibility) }} className="bg-white text-[#3A0CA3] px-5 py-3 rounded-[30px] text-base font-medium">
                            {blogVisibility ? <>View less blogs</> : <>View more blogs</>}
                        </button>
                    </div>
                </div>

            </div>

            <div className="circle5"></div>
            <div id="services" className=' w-full flex flex-wrap px-6 pt-12 lg:px-32 lg:py-16 bg-white'>
                <div className=" w-full lg:w-1/2 flex flex-col pr-5 gap-12 justify-center">
                    <div className='w-full '>
                        <div className="text-[#4361EE] font-medium tracking-widest pb-4 text-base">TESTIMONIALS</div>
                        <h2 className='text-[#2B2B2B] font-semibold text-4xl'>Look What Our Customers Say!</h2>
                        <div className='text-[#808080] font-normal text-base break-words mt-5'>Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque. </div>
                    </div>
                    <div className="w-full hidden lg:flex justify-start gap-12">
                        <button className="carousel3-prev border-[1px] border-[#4361EE] text-[#4361EE] bg-white hover:bg-[#F6F6F6] rounded-full hover:cursor-pointer h-[50px] w-[50px]  z-10 transition flex justify-center items-center"><ArrowLeft size={25} color="#4361EE" /></button>
                        <button className=" carousel3-next border-[1px] border-[#4361EE] text-[#4361EE] bg-white hover:bg-[#F6F6F6] rounded-full hover:cursor-pointer h-[50px] w-[50px]  z-10 transition flex justify-center items-center" ><ArrowRight size={25} color="#4361EE" /></button>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 h-full hidden lg:flex flex-row '>
                    <div className="flex w-full h-full justify-center items-center mt-12">
                        <Swiper className="z-20 px-32 w-full h-min max-w-[516px] max-h-[400px] flex justify-center items-center" init={false}
                            direction={'vertical'}
                            navigation={{ nextEl: '.carousel3-next', prevEl: '.carousel3-prev' }}
                            pagination={{
                                clickable: true, el: '.pagination3', bulletActiveClass: "carousel3-paginationActive", bulletClass: "carousel3-pagination ", renderBullet: (_index, className) => {
                                    return '<span class="!w-full !rounded-[4px] !mx-5 ' + className + '"></span>'
                                }
                            }}
                            loop={false}
                            modules={[Navigation, Pagination]}
                            slidesPerView={1}
                        >
                            <SwiperSlide className="p-2 !flex !justify-center !items-center">
                                <div className='w-full max-w-[500px]  max-h-[360px] rounded-[30px] shadow-md px-[60px] py-[30px] '>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h4>
                                    <div className='border-[#D4D4D4] border-b-2 mt-8 mb-3'></div>
                                    <div className='flex flex-row justify-between items-center '>
                                        <div className='flex flex-row justify-center items-center gap-2'>
                                            <div className='w-[50px] h-[50px] rounded-full bg-red-500 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={user5} /></div>
                                            <div className='text-[#2B2B2B] font-medium text-lg'>Barbara D. Smith</div>
                                        </div>
                                        <div className=' w-[100px] h-[15px]'>
                                            <div className="flex">
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-2 !flex !justify-center !items-center">
                                <div className='w-full max-w-[500px]  max-h-[360px] rounded-[30px] shadow-md px-[60px] py-[30px]'>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h4>
                                    <div className='border-[#D4D4D4] border-b-2 mt-8 mb-3'></div>
                                    <div className='flex flex-row justify-between items-center '>
                                        <div className='flex flex-row justify-center items-center gap-2'>
                                            <div className='w-[50px] h-[50px] rounded-full bg-red-500 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={user5} /></div>
                                            <div className='text-[#2B2B2B] font-medium text-lg'>Barbara D. Smith</div>
                                        </div>
                                        <div className=' w-[100px] h-[15px]'>
                                            <div className="flex">
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-2 !flex !justify-center !items-center">
                                <div className='w-full max-w-[500px]  max-h-[360px] rounded-[30px] shadow-md px-[60px] py-[30px]'>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h4>
                                    <div className='border-[#D4D4D4] border-b-2 mt-8 mb-3'></div>
                                    <div className='flex flex-row justify-between items-center '>
                                        <div className='flex flex-row justify-center items-center gap-2'>
                                            <div className='w-[50px] h-[50px] rounded-full bg-red-500 overflow-hidden flex justify-center items-center'><img className="w-full h-full object-cover" src={user5} /></div>
                                            <div className='text-[#2B2B2B] font-medium text-lg'>Barbara D. Smith</div>
                                        </div>
                                        <div className=' w-[100px] h-[15px]'>
                                            <div className="flex">
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star fill="yellow" size={18} />
                                                <Star size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="m-0 max-w-[20px] !p-0 flex justify-center items-center ">
                        <div className="pagination3 flex flex-row "></div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 h-full  flex lg:hidden flex-col '>
                    <div className="flex w-full h-full justify-center items-center mt-12">
                        <Swiper className="px-32 w-full h-max max-w-[516px]  flex justify-center items-center" init={false}
                            navigation={{ nextEl: '.carousel4-next', prevEl: '.carousel4-prev' }}
                            pagination={{
                                clickable: true, el: '.pagination4', bulletActiveClass: "carousel4-paginationActive", bulletClass: "carousel4-pagination ", renderBullet: (_index, className) => {
                                    return '<span class="!w-full !rounded-[4px] !mx-5 ' + className + '"></span>'
                                }
                            }}
                            loop={false}
                            modules={[Navigation, Pagination]}
                            slidesPerView={1}
                        >
                            <SwiperSlide className="p-2">
                                <div className='w-full max-w-[500px]  max-h-[360px] rounded-[30px] shadow-md px-[60px] py-[30px]'>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h4>
                                    <div className='border-[#D4D4D4] border-b-2 mt-8 mb-3'></div>
                                    <div className='flex flex-row justify-between items-center '>
                                        <div className='flex flex-row justify-center items-center gap-2'>
                                            <div className='w-[50px] h-[50px] rounded-full bg-red-500 overflow-hidden flex justify-center items-center'>
                                                <img className="w-full h-full object-cover" src={user5} />
                                            </div>
                                            <div className="flex flex-col ml-3 flex-1">
                                                <div className='text-[#2B2B2B] font-medium text-lg'>Barbara D. Smith</div>
                                                <div className=' w-[100px] h-[15px]'>
                                                    <div className="flex">
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-2">
                                <div className='w-full max-w-[500px]  max-h-[360px] rounded-[30px] shadow-md px-[60px] py-[30px]'>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h4>
                                    <div className='border-[#D4D4D4] border-b-2 mt-8 mb-3'></div>
                                    <div className='flex flex-row justify-between items-center '>
                                        <div className='flex flex-row justify-center items-center gap-2'>
                                            <div className='w-[50px] h-[50px] rounded-full bg-red-500 overflow-hidden flex justify-center items-center'>
                                                <img className="w-full h-full object-cover" src={user5} />
                                            </div>
                                            <div className="flex flex-col ml-3 flex-1">
                                                <div className='text-[#2B2B2B] font-medium text-lg'>Barbara D. Smith</div>
                                                <div className=' w-[100px] h-[15px]'>
                                                    <div className="flex">
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="p-2">
                                <div className='w-full max-w-[500px]  max-h-[360px] rounded-[30px] shadow-md px-[60px] py-[30px]'>
                                    <h4 className='text-[#2B2B2B] font-medium text-lg'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</h4>
                                    <div className='border-[#D4D4D4] border-b-2 mt-8 mb-3'></div>
                                    <div className='flex flex-row justify-between items-center '>
                                        <div className='flex flex-row justify-center items-center gap-2'>
                                            <div className='w-[50px] h-[50px] rounded-full bg-red-500 overflow-hidden flex justify-center items-center'>
                                                <img className="w-full h-full object-cover" src={user5} />
                                            </div>
                                            <div className="flex flex-col ml-3 flex-1">
                                                <div className='text-[#2B2B2B] font-medium text-lg'>Barbara D. Smith</div>
                                                <div className=' w-[100px] h-[15px]'>
                                                    <div className="flex">
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star fill="yellow" size={18} />
                                                        <Star size={18} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="m-5 flex justify-center items-center ">
                        <div className="pagination4 flex flex-row !w-7/12"></div>
                    </div>
                </div>
            </div>
            <div className='bg-[#4361EE]/10  w-full lg:px-32 py-16 flex flex-col lg:flex-row gap-0 justify-center items-center'>
                <div className='flex flex-col w-1/2 lg:w-full justify-center lg:justify-start items-center lg:items-start lg:-mt-8'>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='w-[50px] h-[50px] rounded-full bg-[#3A0CA3] text-white flex justify-center items-center'><HousePlus color="white" /></div>
                        <div className='text-[#2B2B2B] font-semibold text-xl'>Rezilla</div>
                    </div>
                    <h5 className='text-[#2B2B2B] font-medium text-base pt-6 text-center lg:text-start'>Lorem ipsum has been the industry standard dummy text</h5>
                    <h5 className='text-[#575252] font-medium text-base pt-6 flex flex-row justify-start items-center'><Phone size={16} className="mr-2 -scale-x-100" /> +90123 45 67</h5>
                    <h5 className='text-[#2B2B2B] font-medium text-base pt-2 flex flex-row justify-start items-center'><Mail size={16} className="mr-2" />mail@mail.com</h5>
                </div>
                <div className='hidden lg:flex flex-row w-full'>
                    <div className='flex w-full flex-col lg:w-1/2 pr-[50px] '>
                        <h4 className='text-[#0B090A] font-medium text-lg'>Quick Links</h4>
                        <a className='text-[#2B2B2B] font-normal text-base pt-6 hover:cursor-pointer hover:underline hover:underline-offset-1'>Home</a>
                        <a className='text-[#2B2B2B] font-normal text-base pt-1 hover:cursor-pointer hover:underline hover:underline-offset-1'>About</a>
                        <a className='text-[#2B2B2B] font-normal text-base pt-1 hover:cursor-pointer hover:underline hover:underline-offset-1'>Listings</a>
                        <a className='text-[#2B2B2B] font-normal text-base pt-1 hover:cursor-pointer hover:underline hover:underline-offset-1'>Blogs</a>
                        <a className='text-[#2B2B2B] font-normal text-base pt-1 hover:cursor-pointer hover:underline hover:underline-offset-1'>Become a Agent</a>
                    </div>
                    <div className='flex w-full flex-col lg:w-1/2 pr-[50px]'>
                        <h4 className='text-[#0B090A] font-medium text-lg'>Discovery</h4>
                        <a className='text-[#2B2B2B] font-normal text-base pt-6 hover:cursor-pointer hover:underline hover:underline-offset-1'>Canada</a>
                        <a className='text-[#2B2B2B] font-normal text-base pt-1 hover:cursor-pointer hover:underline hover:underline-offset-1'>United States</a>
                        <a className='text-[#2B2B2B] font-normal text-base pt-1 hover:cursor-pointer hover:underline hover:underline-offset-1'>Germany</a>
                        <a className='text-[#2B2B2B] font-normal text-base pt-1 hover:cursor-pointer hover:underline hover:underline-offset-1'>Africa</a>
                        <a className='text-[#2B2B2B] font-normal text-base pt-1 hover:cursor-pointer hover:underline hover:underline-offset-1'>India</a>
                    </div>
                </div>
                <div className='flex flex-col w-full px-5 pt-5 lg:pt-0 justify-center lg:justify-start items-center lg:items-start lg:w-full'>
                    <h4 className='text-[#0B090A] font-medium text-lg pb-4'>Subscribe to our Newsletter!</h4>
                    <div className='flex flex-row w-full items-center justify-center ml-[40px] lg:ml-0'>
                        <input className='w-full border-[#FFFFFF] border-2 bg-[#FFFFFF] rounded-[30px] p-4 placeholder:text-[#AAAAAA] focus:ring-0 ' placeholder='Email Address' />
                        <div className='w-max flex justify-center items-center !relative right-[60px]'>
                            <button className='bg-[#3A0CA3] w-[50px] h-[50px] rounded-[25px] flex justify-center items-center '><ArrowRight color="white" /></button>
                        </div>
                    </div>
                    <div className='flex flex-col w-full mt-6 justify-center items-center lg:justify-start lg:items-start'>
                        <h4 className='text-[#0B090A] font-medium text-lg '>Follow Us On</h4>
                        <div className="flex flex-row gap-3 mt-2 justify-center lg:justify-start items-center lg:items-start">
                            <Linkedin size={22} color="#3A0CA3" />
                            <Facebook size={22} color="#3A0CA3" />
                            <Instagram size={22} color="#3A0CA3" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#0B090A] h-[50px] w-full flex justify-center lg:justify-between items-center px-16'>
                <p className='text-[#AAAAAA] font-normal text-base'>© Company - All rights reserved</p>
                <div className='hidden lg:flex flex-row gap-5'>
                    <p className='text-[#AAAAAA] font-normal text-base hover:cursor-pointer'>Terms and Conditions</p>
                    <p className='text-[#AAAAAA] font-normal text-base hover:cursor-pointer'>Privacy Policy</p>
                    <p className='text-[#AAAAAA] font-normal text-base hover:cursor-pointer'>Disclaimer</p>
                </div>
            </div>
        </>
    )
}



export default App
