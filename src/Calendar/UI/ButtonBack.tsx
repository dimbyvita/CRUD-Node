import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { ButtonProps } from '../Utils/CalendarUtils'

export const ButtonBack:React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className='p-1 rounded' onClick={onClick}>
        <IoIosArrowBack />
    </button>
  )
}