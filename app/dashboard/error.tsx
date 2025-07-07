'use client';
function Error({error,reset}:{error:Error,reset:()=>void}) {
  return (
    <div className="containerFlexBothCenter flex-col">
        <p className="mb-[20px]">مشکلی در ارتباط با سرور به وجود آمده </p>
        <p className="mb-[20px]">{error.message}</p>
        <button onClick={reset} className='bg-red-500 text-white px-4 py-2 rounded'>
            Try Again
        </button>
    </div>
  )
}

export default Error