import React from 'react'

const Button = (props) => {
  return (
    <button className={`py-[10px] px-[10px] ${props.bg_color} rounded-full mr-4`}>
        {'props.text'}
    </button>
  )
}

export default Button