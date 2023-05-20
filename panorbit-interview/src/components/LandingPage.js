import React  from 'react'
import RoundImg from './RoundImg';
import { Link } from 'react-router-dom';
import "../landingPage.css"
 


const LandingPage =  ({data}) => {
  
   
   let userData=()=>{
    // Landing Page Data Mapping and Sending data selected to Profile Component
     let listData=data.map((user)=>{
       return <li key={user.id} ><Link to='/profile' state={{from:{user}}}><button className='flex flex-row justify-start items-start gap-4 my-5 btn btn-ghost' ><RoundImg src={user.profilepicture} height={20} width={20} />{user.name}</button></Link></li>

     })
    
     return listData
   }  
    
  return (
    <div className='background'>
    
    <div className='flex justify-center items-center mt-20 '>

      <div className="card border flex justify-start mt-20 items-start  w-80 h-80   bg-base-100 shadow-xl overflow-scroll">
        <div className="card-body flex place-items-center  ">
          <h2 className="card-title bg-slate-200">Select An Account</h2>
          
        <div className="ml-5 card-body flex justify-start ">
        <ul>{userData()}</ul>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default LandingPage