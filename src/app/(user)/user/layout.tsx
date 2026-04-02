import Sidebar from '@/components/sidebar/Sidebar'
import Topbar from '@/components/topbar/Topbar'
import React from 'react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="rightbar">
        <Topbar />
        <div className="p-2">
          {children}
          this
        </div>
      </div>
    </div>
  )
}

export default UserLayout