import React from 'react'
import { inputProps } from '@/type/type'

const Input = ({ name, type, placeholder, value }: inputProps) => {
    return (
        <div>
            <input className='block w-full p-4 mx-2 border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white' type={type} name={name} value={value} placeholder={placeholder} />
        </div>
    )
}

export default Input
