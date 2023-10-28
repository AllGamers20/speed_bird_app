import React from 'react'

const HeadLine = ({title}:{title:any}) => {
  return (
    <div className='flex items-center justify-center gap-6'>
        <div className='bg-main w-[100px] h-[2px]'></div>
        <h1 className='text-lime-500 uppercase text-2xl md:text-6xl font-dale'>{title}</h1>
        <div className='bg-main w-[100px] h-[2px]'></div>
    </div>
  )
}

export default HeadLine