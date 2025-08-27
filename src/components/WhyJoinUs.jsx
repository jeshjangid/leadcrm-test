import React from 'react';
import whyJoinImg from '@images/product-hunt-banner-image.svg';
import Button from './ui/Button';

const WhyJoinUs = () => {
  return (
    <div className='w-full flex flex-col items-center lg:pb-7 lg:pt-[50px] md:pb-6 md:pt-10 pb-5 pt-8 bg-[#EAEFFA] px-5 z-10'>
        <div className='container w-full flex flex-col items-start lg:gap-7 md:gap-5 sm:gap-4 gap-3'>
            <h2 className='heading text-[#090F4E]'>Join Thousands of Professionals Using LeadCRM</h2>
            
            <img src={whyJoinImg} alt="img" className='w-full rounded-[12px] lg:max-h-[400px] md:max-h-[350px] max-h-[300px] h-auto' />
            <div className='w-full flex justify-center items-center'>
            <Button isIcon={true} text='Get Started Today' className='text-[#171717] mt-4 bg-[#9EE25A] hover:shadow-[0px_8px_24px_0px_#959DA533]' icon='majesticons:arrow-right' iconclassName='text-[#171717] min-w-[24px] h-[24px]' />
            </div>
        </div>
    </div>
  )
}

export default WhyJoinUs