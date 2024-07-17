import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { ButtonProps } from '../Utils/CalendarUtils'

export const ButtonForward:React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className='p-1 rounded' onClick={onClick}>
        <IoIosArrowForward />
    </button>
  )
}