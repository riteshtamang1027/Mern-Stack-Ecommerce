import { LayoutDashboard } from 'lucide-react'
import React from 'react'

export default function Bottom_Navbar() {
  return (
    <div className='flex justify-between items-center w-8/12 mx-auto'>
      <div className='flex items-center gap-8'>
       <button className=' flex  items-center border bg-green-600 text-white opacity-90 rounded-md px-4 py-2 gap-1 whitespace-nowrap font-medium'>
       <LayoutDashboard size={16} />
        All Departments</button>
       <p>Home</p>
       <p>Shop</p>
       <p>Stores</p>
       <p className=' whitespace-nowrap'>Mega Menu</p>
       <p>Pages</p>
       <p>DashBoard</p>
       <p>Docs</p>

      </div>
      <div>
      </div>
    </div>
  )
}
