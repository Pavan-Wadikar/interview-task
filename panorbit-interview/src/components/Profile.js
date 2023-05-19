import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import RoundImg from './RoundImg';

const Profile = ({allData}) => {
  const location=useLocation();
  const {from}=location.state
  
  
  const [userData,setUserData]=useState(from.user); 
  console.log(userData);  
  
  return (
    <div className='flex flex-row'>
      
      <div className='border border-x-0 my-40 mx-40 rounded-md bg-gradient-to-r from-indigo-500 to-indigo-900 w-36 h-80 flex flex-col'>
        <h2 className='btn btn-ghost decoration-slate-200'>Profile</h2>
        <br className='w-5 border bg-slate-200'/>
      
        <h2 className='btn btn-ghost'>Profile</h2>
        <br className='w-5 border bg-slate-200'/>

        <h2 className='btn btn-ghost'>Profile</h2>
        <br className='w-5 border bg-slate-200'/>

        <h2 className='btn btn-ghost'>Profile</h2>
        <br className='w-5 border bg-slate-200'/>
    </div>
    <div>
    <h1>Profile</h1>

      <RoundImg className="" src={userData.profilepicture} width={100} height={100} />
      <h4>{userData.name}</h4>
    </div>

      
    </div>
  )
}

export default Profile