import React from 'react';
import heroBg from '@images/hero-bg.svg';
import rocketIcon from '@images/rocket-icon.svg';
import line from '@images/line-img.svg';
import hubspotLogo from '@images/hubspot-icon.svg';
import salesforceLogo from '@images/salesforce-integration-icon.svg';
import pipedriveLogo from '@images/pipedrive-icon.svg';
import chromeReviewLogo from '@images/chrome-review-logo.svg';
import capterraLogo from '@images/capterra-logo.svg';
import Icons from './ui/Icons';

const Hero = () => {

    const crmItems = [
        {name: 'HubSpot', logo: hubspotLogo},
        {name: 'Salesforce', logo: salesforceLogo},
        {name: 'Pipedrive', logo: pipedriveLogo},
    ]

  return (
    <section className='w-full flex flex-col items-center relative'>
        <img src={heroBg} alt="background-image" className='w-full h-full object-cover absolute left-0 top-0' />
        <div className='w-full container flex flex-col items-center py-9 z-10 gap-6 px-5'>
            <div className='w-full flex flex-col justify-center items-center text-center gap-3'>
                <div className='border-[0.85px] border-[#9ACCFF] rounded-[20px] p-2 flex justify-center items-center gap-[6px]'>
                    <img src={rocketIcon} alt="rocket-icon" className='min-w-[20px] h-[20px]' />
                    <span className='lg:text-[14px] lg:leading-[24px] md:text-[12px] md:leading-[22px] text-[10px] leading-[16px] font-normal text-[#63657E]'>Thousands of Professional using LeadCRM</span>
                </div>
                <h1 className='font-semibold lg:text-[58px] lg:leading-[70px] md:text-[52px] md:leading-[64px] sm:text-[46px] sm:leading-[58px] text-[38px] leading-[48px]'>LinkedIn CRM Integration  <br />
Capture, Sync and Enrich in <span className='text-[#2D96BC] relative'>Both Ways
    <img src={line} alt="line" className='w-full h-auto absolute left-4 -bottom-4' />
    </span></h1>
            </div>
            <p className='w-full md:w-[90%] lg:w-[85%] text-[#363636] font-semibold lg:text-[19px] lg:leading-[28px] md:text-[17px] md:leading-[24px] sm:text-[15px] sm:leading-[22px] txt-[14px] leading-[18px] text-center'>Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.</p>
            <div className='w-full flex flex-col items-center gap-10'>
                <div className='crm-animation-wrapper'>
                    <span className='text-[#2E2E2E] z-10 font-medium lg:text-[22px] lg:leading-[28px] md:text-[20px] md:leading-[24px] text-[18px] leading-[22px]'>Works with</span>

                    <div className="crm-animate-container" aria-label="Supported CRMs">
        <div className="crm-list" aria-live="polite">
           {
            crmItems.map((item, index) => (
                <div key={index} className="crm-item">
                <div className="crm-logo"><img src={item.logo} alt="hubspot" /></div>
                <span className="crm-name">{item.name}</span>
            </div>
            ))
           }
        </div>
    </div>
                </div>
                <div className='flex justify-center items-center gap-4 sm:gap-6 md:gap-10 lg:gap-14'>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='min-w-[40px] h-[40px] bg-[#fff] shadow-[0px_4px_34px_0px_#ADADAD1A] rounded-[7px] flex justify-center items-center'>
                            <img src={chromeReviewLogo} alt="capterra-logo" className='min-w-[20px] h-[20px] ' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                        </div>
                        <span className='text-[#090F4E] text-[14px]'>5/5</span>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='min-w-[40px] h-[40px] bg-[#fff] shadow-[0px_4px_34px_0px_#ADADAD1A] rounded-[7px] flex justify-center items-center'>
                            <img src={capterraLogo} alt="capterra-logo" className='min-w-[20px] h-[20px] ' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                            <Icons icon='material-symbols:star-rounded' className='min-w-[15px] h-[14px] text-[#C58920]' />
                        </div>
                        <span className='text-[#090F4E] text-[14px]'>5/5</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero