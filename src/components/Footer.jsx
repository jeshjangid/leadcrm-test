import React from 'react';
import chromeIcon from '@images/chrome-icon.svg';
import logo from '@images/leadcrm-logo.svg';
import supportIcon from '@images/support-icon.svg';
import phoneIcon from '@images/phone-icon.svg';
import helpIcon from '@images/help-icon.svg';

const Footer = () => {
  return (
    <div className='bg-[linear-gradient(277.75deg,rgba(1,178,216,0.22)_0%,rgba(1,178,216,0.07)_77%)] w-full  flex flex-col items-center lg:pt-8 md:pt-6 pt-5 px-5'>
    <div className='container w-full flex flex-col items-center justify-center lg:gap-8 md:gap-6 gap-4 relative'>
      
      <div className='w-full flex flex-col items-center gap-10 relative'>
       
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8 py-6 relative">
           
          <div className="w-full md:w-[40%] flex flex-col items-start gap-4 min-w-[180px]">
            <img src={logo} alt="logo" className='min-w-[240px] h-[80px]' />
            <span className="poppins text-[13px] text-[#000000] font-normal">
              LeadCRM is LinkedIn integration
tool for your CRM.
            </span>
            <div className="flex flex-row gap-3 mt-2">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 bg-[#] transition">
                <svg className="w-8 h-8 fill-[white] bg-[#01b2d8] p-2 rounded-full" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 bg-[#] transition">
                <svg className="w-8 h-8 fill-[white] bg-[#01b2d8] p-2 rounded-full" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 bg-[#] transition">
                <svg className="w-8 h-8 fill-[white] bg-[#01b2d8] p-2 rounded-full" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 bg-[#] transition">
                <svg className="w-8 h-8 fill-[white] bg-[#01b2d8] p-2 rounded-full" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
            </div>
          </div>
        <div className="w-full md:w-[60%] flex flex-wrap gap-11">
			  <div className="flex flex-col gap-2 min-w-[120px]">
            <span className="poppins text-[15px] font-semibold text-[#090F4E] mb-1">Integration</span>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC]">HubSpot</a>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC]">Salesforce</a>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC]">Pipedrive</a>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC] flex justify-start items-center gap-1">Close.io <span className='bg-[linear-gradient(150.47deg,#D8FFDD_0%,#BDFFC6_100%)] border border-[#fff] rounded-[53px] h-[30px] px-2 md:text-[10px] sm:text-[9px] text-[8px] text-[#002A06] tracking-[0.3px] flex justify-center items-center font-medium'>Coming Soon</span></a>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC] flex justify-start items-center gap-1">Insightly <span className='bg-[linear-gradient(150.47deg,#D8FFDD_0%,#BDFFC6_100%)] border border-[#fff] rounded-[53px] h-[30px] px-2 md:text-[10px] sm:text-[9px] text-[8px] text-[#002A06] tracking-[0.3px] flex justify-center items-center font-medium'>Coming Soon</span></a>
          </div>
          {/* Column 3: Alternative */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <span className="poppins text-[15px] font-semibold text-[#090F4E] mb-1">Alternative</span>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC]">Surfe VS LeadCRM</a>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC]">Linkmatch Alternative</a>
          </div>
          {/* Column 4: Legal */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <span className="poppins text-[15px] font-semibold text-[#090F4E] mb-1">Legal</span>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC]">Privacy Policy</a>
            <a href="#" className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] hover:text-[#2D96BC]">Terms of Use</a>
          </div>
          {/* Column 5: Contact Us */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <span className="poppins text-[15px] font-semibold text-[#090F4E] mb-1">Contact Us</span>
            <span className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] flex justify-start items-center gap-1"><img src={supportIcon} alt="" className='min-w-[25px] h-[25px]' /> <a href="#" className="hover:text-[#2D96BC]">support@leadcrm.io</a></span>
            <span className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] flex justify-start items-center gap-1"><img src={phoneIcon} alt="" className='min-w-[25px] h-[25px]' /> <a href="#" className="hover:text-[#2D96BC]">+1 231-538-7466</a></span>
            <span className="md:text-[14px] md:leading-[28px] poppins sm:text-[13px] sm:leading-[22px] text-[12px] leading-[18px] text-[#000000] flex justify-start items-center gap-1"><img src={helpIcon} alt="" className='min-w-[25px] h-[25px]' /> Help Center</span>
          </div>
		</div>
    <div className='poppins sm:absolute relative mx-auto sm:right-0 sm:-bottom-9 w-[160px] h-[66px] flex justify-center items-center gap-1 bg-[#242424] border-2 border-[#242424] rounded-[15px]'>
        <span className='text-[#fff] font-normal para'>Available in <br /> <span className='font-medium'>Chrome</span></span>
        <div className='rounded-full min-w-[30px] h-[30px] bg-[#FFFFFF] flex justify-center items-center'>
          <img src={chromeIcon} alt="chromeIcon" className='min-w-[28px] h-[28px]' />
        </div>
      </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-2 text-center'>
          <span className='poppins w-full border-b border-[#8D8D8D94] pb-1 text-[10px] leading-[13px] md:text-[12px] text-[#54595F] md:leading-[15px] font-normal'>Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.</span>
          <span className='poppins w-full text-[#7A7A7A] font-normal text-[12px] leading-[20px] md:text-[14px] md:leading-[28px]'>Copyright © 2025 LeadCRM. All Rights Reserved.</span>
        </div>
    </div>
    </div>
</div>
  )
}

export default Footer