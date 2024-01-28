import React from 'react'

function Nav() {
  return (
    <div>
        <div className='flex bg-blue-900 text-xl h-20 items-center text-white'>
            <div className='col-2 pl-5'>
                <h1>Hello Customer...</h1>
            </div>
            <div className='col-10 flex justify-end gap-5 pr-5'>
                <a href="/">Home</a>
                <a href="/booklist">Booklist</a>
                <a href="/about">AboutUs</a>
                <a href="/profile">profile</a>
            </div>
        </div>
    </div>
  )
}

export default Nav