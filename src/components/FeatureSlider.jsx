import React from 'react';
import contactIcon from "@images/contact-icon.svg";
import handIcon from "@images/hand-icon.svg";
import mappingIcon from "@images/mapping-icon.svg";
import waterfallIcon from "@images/waterfall-icon.svg";

const FeatureSlider = () => {

    const features = [
{ icon: contactIcon, text: <>Access to <span className='font-semibold'> 700M+ Contacts</span></> },
        { icon: handIcon, text: <><span className='font-semibold'>One click push </span> to CRM</> },
        { icon: mappingIcon, text: <><span className='font-semibold'>Custom Field </span> Mapping</> },
        { icon: waterfallIcon, text: <>Advanced <span className='font-semibold'> Waterfall Enrichment</span></> },
        { icon: contactIcon, text: <>Access to <span className='font-semibold'> 700M+ Contacts</span></> },
        { icon: handIcon, text: <><span className='font-semibold'>One click push </span> to CRM</> },
        { icon: mappingIcon, text: <><span className='font-semibold'>Custom Field </span> Mapping</> },
        { icon: waterfallIcon, text: <>Advanced <span className='font-semibold'> Waterfall Enrichment</span></> },
    ];

    return (
        <div className="w-full flex justify-center items-center">
            <div className="container w-full flex justify-between items-center overflow-x-hidden py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 border-b border-[#F1F1F1]">
                <div className="client-logos  w-full flex justify-between items-center gap-16 xl:gap-24">
                    {features.map((item, index) => (

                        <div
                            key={index}
                            className="flex justify-center items-center gap-1 sm:gap-2 lg:gap-3  lg:text-[24px] lg:leading-[28px] sm:text-[18px] sm:leading-[21px] text-[14px] leading-[16px] font-light"
                        >
                            <img src={item.icon} alt="icon" />
                            <span className='whitespace-nowrap desc text-[#090F4E] font-normal'>{item.text}</span>
                        </div>


                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureSlider