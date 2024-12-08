import React from 'react'
import TaskList from '../Task/TaskList/TaskList'
import SideBar from './SideBar'

const Home = () => {
  return (
    <div className='lg:flex px-5 lg:px-20 pt-[2.9vh]'>
        {/* Move TaskList to the left */}
        <div className='w-full lg:w-[70vw] flex justify-center mb-10'>
            <TaskList/>
        </div>

        {/* Move SideBar to the right with some margin to the left */}
        <div className='hidden lg:block w-[25vw] relative ml-4'> {/* ml-5 adds left margin */}
             <SideBar/> 
        </div>
    </div>
  )
}

export default Home
