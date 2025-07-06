import React, { PropsWithChildren } from 'react'
import Link from 'next/link'

type Props = {
  id:number
  avatar:string,
  firstName:string,
  lastName:string,
}

const ItemBox:React.FC<Props>=({id,avatar,firstName,lastName})=> {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className='bg-gray-100 h-[200px] p-[10px] rounded-lg'>

        <img src={avatar} alt="Avatar" className='w-full h-[100px] rounded-full object-contain' />
        <p className='text-center mt-[10px]'>
          {firstName} {lastName}
        </p>

      </div>
    </Link>
  )
}

export default ItemBox