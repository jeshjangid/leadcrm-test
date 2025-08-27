
import Icons from './Icons';

const Button = ({text, className, icon, iconClass, isIcon}) => {
  return (
    <div className={`${className} py-4 px-5 rounded-[13px] lg:text-[18px] lg:leading-[28px] md:text-[16px] md:leading-[26px] text-[14px] leading-[24px] font-semibold flex justify-center items-center gap-3 md:gap-4 lg:gap-5 cursor-pointer`}>
        {text}
        {isIcon && (<Icons icon={icon} className={iconClass} />)}
        
    </div>
  )
}

export default Button