import React from 'react'
import SectionWrapper from '@/app/Components/wrapper/SectionWrapper'
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';
import ArrowOutward from '@/public/svg-arrow-outward.svg'
import Image from 'next/image';
import JetWrapper from '../../3d/JetWrapper';



export default function Main() {
    return (
        <main className='w-screen'>


            <SectionWrapper className='w-full flex flex-col pt-14 gap-5 px-5 sm:pt-24 sm:justify-end sm:items-end sm:gap-12 lg:pr-12 xl:h-[60vh]'>

                <div className='flex flex-col gap-5 '>
                    <div className='hidden sm:flex flex-col gap-5 pl-10 sm:flex-row sm:gap-20'>
                        <div >
                            <div className='flex gap-1'>
                                <span className='text-[var(--link)] text-2xl sm:text-4xl '>*</span>
                                <p className='text-4xl font-semibold sm:text-6xl'>100</p>
                            </div>
                            <p className='font-light text-lg leading-5 text-[var(--sub)] sm:text-2xl sm:leading-6 sm:text-end'>SUCCESS <br></br> PROJECT</p>
                        </div>

                        <div >
                            <div className='flex gap-1'>
                                <span className='text-[var(--link)] text-2xl sm:text-4xl '>*</span>
                                <p className='text-4xl font-semibold sm:text-6xl'>100</p>
                            </div>
                            <p className='font-light text-lg leading-5 text-[var(--sub)] sm:text-2xl sm:leading-6 sm:text-end'>SUCCESS <br></br> PROJECT</p>
                        </div>

                        <div >
                            <div className='flex gap-1'>
                                <span className='text-[var(--link)] text-2xl sm:text-4xl '>*</span>
                                <p className='text-4xl font-semibold sm:text-6xl'>100</p>
                            </div>
                            <p className='font-light text-lg leading-5 text-[var(--sub)] sm:text-2xl sm:leading-6 sm:text-end'>SUCCESS <br></br> PROJECT</p>
                        </div>
                    </div>
                </div>

                <div className='flex-2 w-full flex  items-start text-end 2xl:justify-between justify-end pl-10'>

                    <div className='w-fit justify-start text-start h-48 hidden 2xl:flex flex-col items-center gap-2 '>
                        <h2 className='text-5xl font-light'>Lets make a greate website</h2>
                        <p className='text-2xl text-[var(--sub)] '>Boost your visibility and your brand</p>
                        <Link href={"/Contact"} className='text-[var(--link)] text-3xl mt-8 hover:border-b '>Get a free demo !</Link>
                    </div>

                    <div className=' flex-col  text-4xl gap-2 font-extralight sm:w-fit sm:text-6xl 2xl:w-1/2 w-full'>

                        <p>LIMITELESS</p>
                        <p>FAST</p>
                        <p>INNOVATIVE</p>
                        <div className='flex -gap-2 items-center  justify-end'>
                            <Link href="/Contact" className='font-normal text-[var(--link)] border-b border-b-transparent hover:border-[var(--link)] '>REACH OUT</Link>
                            <Image src={ArrowOutward} width={50} height={50} alt="Arrow Outward" className='sm:hidden' />
                            <Image
                                src={ArrowOutward}
                                width={80}
                                height={80}
                                alt="Arrow Outward"
                                className="w-[50px] h-[80px] object-cover m-0 p-0 hidden sm:block"
                            />
                        </div>
                    </div>



                </div>



            </SectionWrapper>




            <SectionWrapper className='w-full flex flex-col  gap-5 pr-5 sm:hidden' hidden={"sm:"}>
                <div className='flex-1 w-full flex flex-col   gap-8 '>
                    <div className='flex w-full px-3 justify-between'>

                        <div >
                            <div className='flex gap-1'>
                                <span className='text-[var(--link)] text-2xl'>*</span>
                                <p className='text-3xl font-semibold'>100</p>
                            </div>
                            <p className='font-light text-base leading-5 text-[var(--sub)]'>SUCCESS <br></br> PROJECT</p>
                        </div>

                        <div >
                            <div className='flex gap-1'>
                                <span className='text-[var(--link)] text-2xl'>*</span>
                                <p className='text-3xl font-semibold'>100</p>
                            </div>
                            <p className='font-light text-base leading-5 text-[var(--sub)]'>SUCCESS <br></br> PROJECT</p>
                        </div>

                        <div >
                            <div className='flex gap-1'>
                                <span className='text-[var(--link)] text-2xl'>*</span>
                                <p className='text-3xl font-semibold'>100</p>
                            </div>
                            <p className='font-light text-base leading-5 text-[var(--sub)]'>SUCCESS <br></br> PROJECT</p>
                        </div>

                    </div>
                </div>
            </SectionWrapper>





            <SectionWrapper className='w-full font-light flex gap-2 text-sm sm:text-lg lg:text-xl'>
                <FaLocationDot />
                <p>Montreal Web Agency</p>
            </SectionWrapper>

            <div className='flex flex-col lg:flex-row w-screen'>
                <SectionWrapper
                    sectionClassName='lg:pr-0'
                    className='font-semibold justify-end items-end flex pr-5 sm:pt-20 sm:text-2xl lg:pt-8 lg:items-start w-full 2xl:pb-48 lg:w-[40vw]'>
                    <h2 className='lg:hidden'>EXPLORE OUR SERVICES</h2>
                    <h2 className='hidden lg:block text-4xl text-end'>EXPLORE <br /> OUR SERVICES</h2>

                </SectionWrapper>
                <div className='flex flex-col lg:w-2/3 2xl:flex-row'>
                    <Link href={"/Service/WebDesign"} className='w-full group'>
                        <SectionWrapper
                            sectionClassName='2xl:pr-0'
                            className='w-full font-semibold flex h-12 flex-col pb-0.5 sm:text-xl 2xl:gap-54
                            hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:border border-[var(--link)]'

                        >
                            <h3>WEB DESIGN</h3>
                            <div className='flex font-light text-sm leading-tight justify-end text-end items-center
                            
                            '>
                                <p>Create your perfect <br /> website with us</p>
                                <Image
                                    src={ArrowOutward}
                                    width={50}
                                    height={50}
                                    alt="Arrow Outward"
                                />
                            </div>
                        </SectionWrapper>
                    </Link>

                    <Link href={"/Service/DataScrapping"} className='w-full group'>
                        <SectionWrapper
                            sectionClassName='2xl:pr-1'

                            className='w-full font-semibold flex h-12 flex-col pb-0.5 sm:text-xl 2xl:gap-54 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:border border-[var(--link)]'

                        >
                            <h3>DATA SCRAPPING</h3>
                            <div className='flex font-light text-sm leading-tight justify-end text-end items-center'>
                                <p>Create a scrapping app <br /> for every case</p>
                                <Image
                                    src={ArrowOutward}
                                    width={50}
                                    height={50}
                                    alt="Arrow Outward"
                                />
                            </div>
                        </SectionWrapper>
                    </Link>

                    <Link href={"/Service/Optimization"} className='w-full group'>
                        <SectionWrapper
                            className='w-full font-semibold flex h-12 flex-col pb-0.5 sm:text-xl 2xl:gap-54
                            hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:border border-[var(--link)]'
                            sectionClassName='2xl:pl-2.5'

                        >
                            <h3>OPTIMIZATION</h3>
                            <div className='flex font-light text-sm leading-tight justify-end text-end items-center'>
                                <p>Optimize the SEO and <br /> performance of your website</p>
                                <Image
                                    src={ArrowOutward}
                                    width={50}
                                    height={50}
                                    alt="Arrow Outward"
                                />
                            </div>
                        </SectionWrapper>
                    </Link>
                </div>
            </div>
            <JetWrapper />


        </main>
    )
}
