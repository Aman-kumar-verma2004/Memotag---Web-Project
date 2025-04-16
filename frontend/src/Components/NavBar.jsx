import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className='flex items-center justify-between px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50'>
        <h1 className='text-2xl font-bold text-blue-700 '>MetaTag</h1>
        <ul className='hidden md:flex gap-6 text-gray-700 font-medium'>
            <li ><a href='#problem' className="hover:text-blue-600">Problem</a></li>
            <li><a href='#Solution' className="hover:text-blue-600">Solution</a></li>
            <li><a href='#Traction' className="hover:text-blue-600">Traction</a></li>
            <li><a href='#Contact' className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
