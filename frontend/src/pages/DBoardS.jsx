import React from 'react'
import Footer from '../components/Footer'
import { Sidebar } from '../components/Sidebar'
import { CompCard } from '../components/CompCard'
import { useParams } from 'react-router-dom'


export const DBoardS = () => {
  const {industry} = useParams();
  return (
   <div className='flex flex-col'>
      <div className='flex flex-row'>
        <Sidebar/>
        <CompCard industry={industry}/>
      </div>
      <Footer/>
    </div>
  )
}
