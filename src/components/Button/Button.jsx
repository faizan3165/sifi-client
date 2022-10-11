import React from 'react'

import './button.css'

const Button = ({children}) => {
  return (
    <div className='my_btn'>
        {children}
    </div>
  )
}

export default Button