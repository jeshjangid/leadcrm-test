import React from 'react';
import chatIcon from '@images/chat-icon.svg';
import supportImg from '@images/leadcrm-supported-img.png';
import collaborationImg from '@images/collaboration-icon.svg';
import Button from './ui/Button';

const Support = () => {

    return (
        <div className='w-full flex flex-col items-center py-8 sm:py-10 md:py-14 lg:py-16 xl:py-20 relative'>
            <img src={collaborationImg} alt="icon" className='size-[50px] sm:size-[80px] md:size-[100px] lg:size-[120px] xl:size-[140px] absolute right-0 -bottom-3 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 xl:-bottom-10' />
            <div className='w-full container flex flex-col items-center gap-3 md:gap-4 lg:gap-6 px-5'>
                <div className='relative'>
                    <img src={chatIcon} alt="chat" className='w-[50px] sm:w-[80px] lg:w-[100px] absolute -right-12 -top-10 sm:-right-16 sm:-top-14 lg:-right-24 lg:-top-24' />
                <h2 className='heading text-[#090F4E]'>Our Supported LeadCRM</h2>
                </div>
                <p className='desc !font-normal text-[#4D4D4D] w-full sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] text-center'>LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!</p>
                <img src={supportImg} alt="support-img" className='w-full' />
                <Button isIcon={false} text='Lets Integrate your CRM Now!' className='bg-[#B3FC6A] hover:shadow-[0px_8px_24px_0px_#959DA533] rounded-[12px]' />
            </div>
        </div>
    )
}

export default Support