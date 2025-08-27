import React, { useState } from 'react';
import logo from '@images/leadcrm-logo.svg'
import Icons from './ui/Icons';
import { useSearchParams } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        { name: 'Product', icon: true },
        { name: 'Pricing', icon: false },
        { name: 'Resources', icon: true },
        { name: 'Company', icon: true },
    ]
    const companySubNavItems = [
        { icon: 'https://img.leadcrm.io/wp-content/uploads/2025/01/24082421/about-us-150x150.webp', name: 'About Us' },
        { icon: 'https://img.leadcrm.io/wp-content/uploads/2025/01/24082441/contact-150x150.webp', name: 'Contact Us' }
    ];
    const resourcesSubNavItems = [
        { icon: 'https://img.leadcrm.io/wp-content/uploads/2025/01/24082433/blog-1-150x150.webp', name: 'Blogs' },
        { icon: 'https://img.leadcrm.io/wp-content/uploads/2025/01/24082429/api-documentation-150x150.webp', name: 'API Documentation' },
        { icon: 'https://img.leadcrm.io/wp-content/uploads/2025/01/24082445/crm-alternative-150x150.webp', name: 'LeadCRM Alternatives' },
        { icon: 'https://img.leadcrm.io/wp-content/uploads/2025/01/27045930/crm-integration-1-150x150.webp', name: 'LinkedIn CRM Integration Guide' },
        { icon: 'https://img.leadcrm.io/wp-content/uploads/2025/01/18081652/Bulk-export.webp', name: 'Lead Export Guide' },
        { icon: 'https://img.leadcrm.io/wp-content/uploads/2025/01/05065423/faqs-150x150.webp', name: 'FAQs' },
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleToggle = (name) => {
        setActiveMenu((prev) => (prev === name ? null : name))
    }

    return (
        <>
            <nav className='w-full flex flex-col items-center bg-[#fff] shadow-[0px_8px-24px_0px_#959DA51A] py-3 md:py-5 lg:py-6 sticky top-0 left-0 z-50'>
                <div className='container w-full flex justify-between items-center gap-3 px-5'>
                    <img src={logo} alt="logo" className='cursor-pointer w-[110px] h-[40px] md:w-[127px] md:h-[44px] lg:lg:w-[150px] lg:lg:h-[50px] xl:w-[167px] xl:h-[58px]' />
                    <div className='w-full flex justify-end items-center'>
                        <div className='flex justify-end items-center gap-8 xl:gap-14'>
                            <ul className='lg:flex justify-end items-center lg:gap-5 xl:gap-11 hidden'>
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="group relative flex justify-center items-center gap-1 text-[#222222] lg:text-[18px] lg:leading-[28px] md:text-[16px] md:leading-[26px] text-[14px] leading-[24px] font-semibold hover:text-[#2D96BC] transition-colors duration-300 ease-in-out cursor-pointer"
                                    >
                                        {item.name}
                                        {item.icon && (
                                            <Icons
                                                icon="fe:arrow-down"
                                                className="text-[#000000] min-w-[20px] h-[24px] transition-colors duration-300 ease-in-out group-hover:text-[#2D96BC]"
                                            />
                                        )}
                                        {
                                            item.name === 'Company' && (
                                                <ul className='hidden group-hover:flex transition-all duration-5000 w-[320px] absolute top-[50px] left-1/2 -translate-x-1/2 border border-[#01B2D81A] p-4 flex-col items-start justify-center rounded-[30px]' style={{ backgroundColor: 'transparent', backgroundImage: 'linear-gradient(130deg, #FCFFFF 0%, #FFFDFF 100%)' }}>
                                                    {
                                                        companySubNavItems.map((item, index) => (
                                                            <li key={index} className='w-full flex justify-start items-center gap-2 py-4 px-[10px] cursor-pointer rounded-[12px] hover:bg-[#EAECFF]'>
                                                                <img src={item.icon} alt="icon" className='min-w-[25px] h-[25px]' />
                                                                <span className='mb-1 para font-semibold text-[#090F4E]'>{item.name}</span>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                        {
                                            (item.name === 'Resources' || item.name === 'Product') && (
                                                <ul className='hidden group-hover:flex w-[320px] absolute top-[50px] left-1/2 -translate-x-1/2 border border-[#01B2D81A] p-4 flex-col items-start justify-center rounded-[30px] transition-all duration-5000' style={{ backgroundColor: 'transparent', backgroundImage: 'linear-gradient(130deg, #FCFFFF 0%, #FFFDFF 100%)' }}>
                                                    {
                                                        resourcesSubNavItems.map((item, index) => (
                                                            <li key={index} className='w-full flex justify-start items-center gap-2 py-4 px-[10px] cursor-pointer rounded-[12px] hover:bg-[#EAECFF]'>
                                                                <img src={item.icon} alt="icon" className='min-w-[25px] h-[25px]' />
                                                                <span className='mb-1 para font-semibold text-[#090F4E]'>{item.name}</span>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }



                                    </li>
                                ))}


                            </ul>
                            <div className='flex justify-end items-center gap-3'>
                                {/* <button className='hidden md:w-full lg:w-auto md:flex justify-center items-center py-3 px-7 rounded-[10px] bg-[#2D96BC] text-[#fff] font-semibold text-[16px] leading-[28px] cursor-pointer max-h-[50px]'>Get Your Free Account</button> */}
                                <button className="relative hidden overflow-hidden md:w-full lg:w-auto md:flex justify-center items-center py-3 px-7 rounded-[10px] bg-[#2D96BC] text-[#fff] font-semibold text-[16px] leading-[28px] cursor-pointer max-h-[50px] group">

                                    <div className="absolute top-0 right-[-100%] w-full h-full bg-[#B3FC6A] transition-all duration-500 ease-in-out group-hover:right-0"></div>
                                    <span className="relative z-10">Get Your Free Account</span>
                                </button>
                                <button className="group flex justify-center items-center text-[16px] leading-[28px] py-3 px-7 rounded-[10px] border border-[#2D96BC] bg-[#fff] text-[#2D96BC] hover:bg-[#DFEFFF] hover:text-[#1A3E62] gap-[10px] transition-colors duration-300 ease-in-out cursor-pointer font-semibold">
                                    <Icons
                                        icon="ic:round-login"
                                        className="min-w-[24px] h-[24px] text-[#2D96BC] transition-colors duration-300 ease-in-out group-hover:text-[#1A3E62]"
                                    />
                                    Login
                                </button>
                                <button onClick={() => setIsOpen(true)} className='group min-w-[45px] h-[35px] border border-[#2D96BC] bg-[#fff] rounded-[3px] cursor-pointer lg:hidden flex justify-center items-center hover:bg-[#2D96BC] transition-colors duration-300 ease-in-out'>
                                    <Icons
                                        icon='heroicons-solid:menu-alt-3'
                                        className='min-w-[25px] h-[20px] text-[#2D96BC] rounded-[3px] transition-colors duration-300 ease-in-out group-hover:text-[#ffffff80]'
                                    />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {
                isOpen && (
                    <>
                    <div className='fixed h-screen w-full z-50 bg-[#33333380]'></div>
                    <nav className='w-[90%] h-screen overflow-auto z-[99999999] fixed left-0 top-0 flex flex-col items-start gap-14 bg-[#ffffff] p-5 max-w-[400px]'>
                        <div className='w-full flex justify-between items-center gap-3'>
                            <img src={logo} alt="logo" className='min-w-[120px] h-[40px]' />
                            <button onClick={() => setIsOpen(false)} className='cursor-pointer border border-[#00000080] rounded-[3px] w-[45px] p-[6px] flex justify-center items-center hover:text-[#00000080] text-[#08b4da] transition-all duration-300 font-normal text-[12px] poppins'>X</button>
                        </div>
                        <ul className='w-full flex flex-col justify-end items-center gap-6'>
                            {navItems.map((item, index) => (
                                <>
                                    <li
                                        key={index}
                                        className="w-full group relative flex justify-between items-center gap-1 text-[#222222] text-[18px] leading-[28px] font-semibold hover:text-[#2D96BC] transition-colors duration-300 ease-in-out cursor-pointer"
                                    >
                                        {item.name}
                                        {item.icon && (
                                            <div className='border border-[#273171] hover:border-[#2D96BC] rounded-[50px] px-5 py-1' onClick={() => handleToggle(item.name)}>
                                                <Icons
                                                    icon="fe:arrow-down"
                                                    className="text-[#273171] min-w-[20px] h-[24px] transition-colors duration-300 ease-in-out group-hover:text-[#2D96BC]"
                                                />
                                            </div>
                                        )}
                                    </li>
                                    {
                                        item.name === 'Company' && activeMenu === "Company" && (
                                            <ul className='w-full flex transition-all duration-5000 border border-[#01B2D81A] p-4 flex-col items-start justify-center rounded-[30px]' style={{ backgroundColor: 'transparent', backgroundImage: 'linear-gradient(130deg, #FCFFFF 0%, #FFFDFF 100%)' }}>
                                                {
                                                    companySubNavItems.map((item, index) => (
                                                        <li key={index} className='w-full flex justify-start items-center gap-2 py-4 px-[10px] cursor-pointer rounded-[12px] hover:bg-[#EAECFF]'>
                                                            <img src={item.icon} alt="icon" className='min-w-[25px] h-[25px]' />
                                                            <span className='mb-1 text-[16px] leading-[18px] font-semibold text-[#090F4E]'>{item.name}</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                    {
                                        (item.name === 'Resources' || item.name === 'Product') && activeMenu === item.name && (
                                            <ul className='w-full flex border border-[#01B2D81A] p-4 flex-col items-start justify-center rounded-[30px] transition-all duration-5000' style={{ backgroundColor: 'transparent', backgroundImage: 'linear-gradient(130deg, #FCFFFF 0%, #FFFDFF 100%)' }}>
                                                {
                                                    resourcesSubNavItems.map((item, index) => (
                                                        <li key={index} className='w-full flex justify-start items-center gap-2 py-4 px-[10px] cursor-pointer rounded-[12px] hover:bg-[#EAECFF]'>
                                                            <img src={item.icon} alt="icon" className='min-w-[25px] h-[25px]' />
                                                            <span className='mb-1 text-[16px] leading-[18px] font-semibold text-[#090F4E]'>{item.name}</span>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }
                                </>
                            ))}
                            
                            <button className="relative md:hidden mt-3 overflow-hidden w-full lg:w-auto md:flex justify-center items-center py-3 px-7 rounded-[10px] bg-[#2D96BC] text-[#fff] font-semibold text-[16px] leading-[28px] cursor-pointer max-h-[50px] group">
                                {/* Sliding background */}
                                <div className="absolute top-0 right-[-100%] w-full h-full bg-[#B3FC6A] transition-all duration-500 ease-in-out group-hover:right-0"></div>

                                {/* Text stays above */}
                                <span className="relative z-10">Get Your Free Account</span>
                            </button>



                        </ul>


                    </nav>
                    </>
                )
            }
        </>

    )
}

export default Navbar 