import React, { useState } from 'react'
import robotImg from '@images/robot-img.svg';
import aiIcon from '@images/ai-icon.svg';
import bulkExportIcon from '@images/bulk-export-icon.svg';
import dataSyncIcon from '@images/data-sync-icon.svg';
import dataIntegrationIcon from '@images/data-integration-icon.svg';
import EnrichmentLeftImg from '@images/Enrichment-left-img.svg';
import EnrichmentrightImg from '@images/Enrichment-right-img.svg';


const Solutions = () => {

    const subnav = [
        { icon: dataIntegrationIcon, title: 'CRM Data Enrichment' },
        { icon: dataSyncIcon, title: 'CRM Data Sync' },
        { icon: bulkExportIcon, title: 'Bulk Export & Enrichment' },
        { icon: aiIcon, title: 'AI Productivity' },
    ];

    const subnavdata = [
        { img1: EnrichmentLeftImg, img2: EnrichmentrightImg },
        { img2: EnrichmentLeftImg, img1: EnrichmentrightImg },
        { img1: EnrichmentLeftImg, img2: EnrichmentrightImg },
        { img2: EnrichmentLeftImg, img1: EnrichmentrightImg },
    ]

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='w-full flex flex-col items-center lg:pb-7 lg:pt-[50px] md:pb-6 md:pt-10 pb-5 pt-8 px-5 z-10 relative'>
            <img src={robotImg} alt="ball" className='h-[80px] sm:h-[140px] absolute top-5 left-0' />
            <div className='container overflow-x-hidden w-full flex flex-col items-center xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10 gap-8 relative'>
                <div className='w-full flex flex-col items-center text-center xl:gap-4 lg:gap-3 gap-2'>
                    <h2 className='heading font-semibold text-[#090F4E]'>Complete LinkedIn Sales Solutions</h2>
                    <p className='text-[#4D4D4D] font-normal desc'>Everything you need for professional LinkedIn prospecting</p>
                </div>

                <div className='w-full flex flex-col items-center xl:gap-10 lg:gap-8 md:gap-6 sm:gap-5 gap-4'>
                    <ul className='w-full flex flex-col sm:flex-row justify-between items-center sm:border-b-[3px] sm:border-[#EDEDED] gap-2 sm:gap-0'>
                        {
                            subnav.map((item, index) => (
                                <li key={index} onClick={() => setActiveTab(index)} className={`flex justify-center items-center gap-1 relative p-3 desc cursor-pointer ${activeTab === index ? 'font-semibold text-[#090F4E]' : 'text-[#4C4C4C] font-normal'}`}>
                                    {activeTab === index && <div className='w-full absolute h-[7px] rounded-[11px] bg-[#090F4E] -bottom-1 left-0'></div>}
                                    <img src={item.icon} alt="icon" className='min-w-[30px] h-[30px]' />
                                    <span className={`desc ${activeTab === index ? 'font-semibold' : 'font-normal'}`}>{item.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <p className='w-full text-center xl:text-[22px] xl:leading-[29px] lg:text-[20px] lg:leading-[26px] md:text-[18px] md:leading-[22px] sm:text-[16px] sm:leading-[20px] text-[14px] leading-[24px]'>It’s hard to find the accurate contact data for every prospects by <span className='bg-[#FFDCD4] rounded-[24px] p-2 text-[#FF4C51] font-medium lg:text-[13px] md:text-[12px] sm:text-[11px] text-[10px]'>Incomplete Data</span></p>
                   
                            <div className='w-full flex justify-center items-center xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-2'>
                                <img src={subnavdata[activeTab].img1} alt="img" className='max-h-[520px] w-1/2 rounded-[12px]' />
                                <img src={subnavdata[activeTab].img2} alt="img" className='max-h-[520px] w-1/2 rounded-[12px]' />
                            </div>

                </div>
            </div>
        </div>
    )
}

export default Solutions