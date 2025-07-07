import React from 'react'

function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - صفحه پیدا نشد</h1>
      <p className="mt-4 text-gray-600">
        آدرس وارد شده معتبر نیست
      </p>
    </div>  )
}

export default notFound
