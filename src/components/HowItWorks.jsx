import React from 'react';
import Button from './ui/Button'
import HowItWork1Img from '@images/howitwork1-img.svg';
import HowItWork2Img from '@images/howitwork2-img.svg';
import HowItWork3Img from '@images/howitwork3-img.svg';
import HowItWork4Img from '@images/howitwork4-img.svg';
import line from '@images/multi-arrow-img.svg';

const HowItWorks = () => {

    const cardData = [
        {heading: 'Install the Extension', desc: 'Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.', img: HowItWork1Img},
        {heading: 'Browse LinkedIn', desc: 'Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.', img: HowItWork2Img},
        {heading: 'Get Enriched Data', desc: 'Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.', img: HowItWork3Img},
        {heading: 'Sync to CRM Instantly', desc: 'Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.', img: HowItWork4Img},
    ]

    return (
        <div className='w-full flex flex-col items-center lg:pb-7 lg:pt-[50px] md:pb-6 md:pt-10 pb-5 pt-8 bg-[#EAEFFA] px-5 z-10 relative'>
            <div className='container w-full flex flex-col items-start lg:gap-7 md:gap-5 sm:gap-4 gap-3'>
                <div className='flex flex-col w-full items-start justify-start gap-2'>
                    <h2 className='heading text-[#090F4E]'>How it Works</h2>
                    <p className='poppins para text-[#4C4C4C]'>From setup to success in <span className='font-semibold'>4 simple steps</span></p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between items-center gap-6 relative'>
            <div className='w-[275px] h-[275px] bg-[#3A3A42] opacity-[2%] absolute rounded-full -left-48 top-10 z-20'></div>
            <img src={line} alt="line" className='w-auto absolute top-20 left-1/2 -translate-x-1/2' />
                    {
                        cardData.map((item, index) => (
                            <div key={index} className='w-full relative h-[500px] flex flex-col items-center justify-start gap-6 md:gap-8 lg:gap-11 bg-[#fff] rounded-[12px] z-10 hover:border-[3px] hover:border-[#2D96BC]'>
                                <div className='flex flex-col items-center gap-3'>
                                <span className='!text-[#2D96BC] sriracha font-normal lg:text-[100px] lg:leading-[110px] md:text-[80px] md:leading-[90px] sm:text-[60px] sm:leading-[70px] text-[40px] leading-[50px]'>{index+1}</span>
                                <h4 className='font-semibold text-[21px] lg:text-[24px] text-center whitespace-nowrap'>{item.heading}</h4>
                                <span className='text-[#4C4C4C] text-center para'>{item.desc}</span>
                                </div>
                                <img src={item.img} alt="img" className='rounded-[12px] w-full h-auto max-h-[240px] absolute bottom-0 right-0' />
                            </div>
                        ))
                    }
                </div>
                <div className='w-full flex justify-center items-center'>
                <Button isIcon={true} text='Try LeadCRM Now' className='text-[#171717] mt-4 bg-[#B3FC6A] hover:shadow-[0px_8px_24px_0px_#959DA533]' icon='majesticons:arrow-right' iconclassName='text-[#171717] min-w-[24px] h-[24px]' />
            </div>
            </div>
        </div>
    )
}

export default HowItWorks