import React from 'react'
function Navbar() {
  return (
    <div className='flex  bg-cyan-900 text-white gap-10 px-3 py-3'>
        <h3 className='gap-10'>
        <a href="/" className=' mr-20 text-white no-underline'><i class="fa-solid fa-user"></i> About me </a>
        <a href="/civi" className='text-white no-underline'><i class="fa-solid fa-address-book"></i> Curiculum Vitae</a>
        </h3>
    </div>
  )
}

export default Navbar