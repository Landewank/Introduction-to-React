import React from 'react'

const Button = (props) => {
  const {bg_color,border,text}= props
  return (
    <>
       <button className={`py-[10px] px-[10px] ${bg_color} rounded-full mr-4 ${border}`}>
            {text}
           </button>
    </>
  )
}
export default Button   
