import React from 'react'
import Icons from './ui/Icons';

import exchangeIcon from '@images/exchange-icon.svg';
import contactIcon from "@images/contact-icon.svg";
import aiIcon from "@images/ai-icon.svg";
import overlayIcon from "@images/overlay-icon.svg";
import leftImg from '@images/daily-challenge-left-img.svg'
import rightImg from '@images/daily-challenge-right-img.svg'
import noteImg from '@images/note-img.svg'
import Button from './ui/Button';

const DailyChanllenges = () => {

    const withoutCrmData = [
        {heading: 'Manual Data Entry', span: '3+ Hours wasted daily', desc: 'Copying LinkedIn contacts to CRM manually plus losing conversation history'},
        {heading: 'Incomplete Data', span: '60% Data Incomplete', desc: 'LinkedIn profiles missing Email and Phones from 700M+ Database'},
        {heading: 'No CRM Visibility', span: 'Zero context available', desc: 'Can’t see existing CRM contacts when browsing LinkedIn profiles'},
        {heading: 'Limited Productivity', span: 'No smart assistance', desc: 'Writing messages manually plus no AI assistant for reply, Invite or comments.'},
    ]
    const withCrmData = [
        {img: exchangeIcon, heading: 'Complete Bi-Directional Sync', desc: 'Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.'},
        {img: contactIcon, heading: '700M+ Contacts + Enrichment', desc: 'Get verified emails and phone numbers from a vast global database.'},
        {img: overlayIcon, heading: 'CRM Overlay on LinkedIn', desc: 'See full CRM insights directly on LinkedIn profiles without switching tabs.'},
        {img: aiIcon, heading: 'AI Response + Templates + Bulk Exports', desc: 'Save time with AI-crafted replies, pre-built templates, and one-click data exports.'},
    ]

    return (
        <div className='w-full flex flex-col items-center xl:py-20 lg:py-16 md:py-14 sm:py-12 py-10'>
            <div className='px-5 w-full container flex flex-col items-center gap-5'>
                <h2 className='heading text-[#090F4E]'>Every LinkedIn Prospector faces these daily challenges</h2>
                <div className='w-full flex flex-col md:flex-row justify-start items-start gap-5 md:gap-10 lg:gap-14 xl:gap-16 relative'>
                    <div className='w-full h-auto md:h-[730px] flex flex-col items-start xl:gap-5 gap-4 bg-[#FFF7F8] rounded-[18px] p-3 md:p-4 lg:p-6 hover:border hover:border-[#000] transition-all duration-300 ease-in-out'>
                        <img src={leftImg} alt="" className='w-full h-auto' />
                        <div className='w-full flex flex-col items-start xl:gap-7 gap-5'>
                            <h4 className='font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]'>Without LeadCRM</h4>
                            <ul className='w-full flex flex-col items-start xl:gap-5 gap-3'>
                                {
                                    withoutCrmData.map((item, index) => (
                                        <li key={index} className='w-full flex justify-start items-center gap-3'>
                                            <Icons icon='maki:cross' className='min-w-[24px] h-[24px] text-[#D24B68]' />
                                            <div className='w-full flex flex-col items-start gap-[6px]'>
                                                <div className='w-full flex justify-start items-center gap-2'>
                                                    <h5 className='font-semibold text-[#262626] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]'>{item.heading}</h5>
                                                    <span className='text-[#FF4C51] text-[10px] md:text-[11px] lg:text-[13px] font-medium bg-[#FFDCD4] shadow-[0px_38.15px_79.48px_0px_#110C2E26] rounded-[24px] px-2 py-1'>{item.span}</span>
                                                </div>
                                                <span className='text-left text-[#4C4C4C] font-normal para'>{item.desc}</span>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                    <div className='absolute hidden md:block w-[1px] h-[90%] bg-[#BCBCBC] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <div className='absolute flex items-center justify-center text-[#090F4E] para top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fff] rounded-full p-3 font-medium poppins'>
                        vs
                        </div>
                    </div>
                    <div className='w-full h-auto md:h-[730px] flex flex-col items-start justify-start xl:gap-5 gap-4 bg-[#FFFFFF] rounded-[18px] shadow-[0px_8px_24px_0px_#959DA533] p-3 md:p-4 lg:p-6 hover:border hover:border-[#000] transition-all duration-300 ease-in-out'>
                        <img src={rightImg} alt="" className='w-full h-auto' />
                        <div className='w-full flex flex-col items-start xl:gap-7 gap-5'>
                            <h4 className='font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]'>With LeadCRM</h4>
                            <ul className='w-full flex flex-col items-start xl:gap-5 gap-3'>
                                {
                                    withCrmData.map((item, index) => (
                                        <li key={index} className='w-full flex justify-start items-center gap-3'>
                                            <img src={item.img} alt="img" className='min-w-[40px] h-[40px]' />
                                            <div className='w-full flex flex-col items-start gap-[6px]'>
                                               
                                                    <h5 className='font-semibold text-[#262626] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]'>{item.heading}</h5>
                                                    
                                                <span className='text-left text-[#4C4C4C] font-normal para'>{item.desc}</span>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center gap-2 relative'>
                    <Button text='Start Using LeadCRM Now' isIcon={false} className='text-[#000] bg-[#B3FC6A] hover:shadow-[0px_8px_24px_0px_#959DA533]' />
                    <img src={noteImg} alt="note" className='h-[50px] sm:h-[150px] relative -top-3' />
                </div>
            </div>
        </div>
    )
}

export default DailyChanllenges