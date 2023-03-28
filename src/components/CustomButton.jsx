import React from 'react'

const CustomButton = ({btnType , title , handleClick ,styles}) => {
  return (
    <button type={btnType} onClick={handleClick} className={`text-white bg-gradient-to-r hover:bg-gradient-to-bl focus:ring-4 focus:outline-none ${styles} font-medium rounded-[15px] text-sm px-5 py-2.5 whitespace-nowrap text-center h-[52px] mr-2 mb-2`}>
      {title}
    </button>
  )
}

export default CustomButton