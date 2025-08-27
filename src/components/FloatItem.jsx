import React from 'react';
import multiUsers from '@images/multiusers-img.svg';
import creditCardIcon from '@images/credit-card-icon.svg';
import clockIcon from '@images/clock-icon.svg';

const FloatItem = () => {
  return (
    <div className='container fixed z-40 bottom-3 left-1/2 -translate-x-1/2 hidden w-full max-w-[867px] lg:flex flex-col items-center bg-[#FFFFFF] shadow-[6px_13px_100px_3px_#110C2E2E] p-4 rounded-[12px] gap-6'>
        <div className='w-full flex justify-between items-center bg-[#FFEEFE] rounded-[12px] p-4 gap-3'>
            <div className='flex justify-start items-center gap-2'>
                <img src={multiUsers} alt="users" className='min-w-[70px] h-[35px]' />
                <span className='popping font-semibold text-[20px] text-[#121212]'>Join with our Thousands of professionals Now !</span>
            </div>
            <button className='cursor-pointer bg-[#B3FC6A] p-3 flex justify-center items-center rounded-[13px] text-[#242424] font-semibold desc'>Get a Free Trial Now!</button>
        </div>
        <div className='w-full flex justify-center items-center gap-16'>
            <div className='flex justify-start items-center gap-2'>
                <img src={creditCardIcon} alt="icon" className='min-w-[30px] h-[30px]' />
                <p className='poppins para text-[#161616] font-semibold'><span className='font-normal text-[#6C6C6C]'>No Credit Card</span> Required</p>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <img src={clockIcon} alt="icon" className='min-w-[30px] h-[30px]' />
                <p className='poppins para text-[#161616] font-semibold'><span className='font-normal text-[#6C6C6C]'>14 Days Free</span> Trial</p>
            </div>
        </div>
    </div>
  )
}

export default FloatItem