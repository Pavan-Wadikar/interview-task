import React from 'react'
import RoundImg from './RoundImg';

const LandingPage =  ({data}) => {
  
   console.log(data);
   let userData=()=>{
     let listData=data.map((user)=>{
       return <li key={user.id} ><span className='flex flex-row justify-start items-start gap-4 my-5 btn btn-ghost'><RoundImg src={user.profilepicture} height={20} width={20} />{user.name}</span></li>

     })
     return listData
   }  
    
  return (
    <div>
      {/* <h2>Select an Account</h2>
           */}
      <div className="card  flex justify-start items-start  w-70 h-80 overfolow-scroll  bg-base-100 shadow-xl">
        <div className="card-body flex place-items-start overflow-scroll">
          <h2 className="card-title">Select An Account</h2>
          
        <div className="card-body flex justify-start ">
        <ul>{userData()}</ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default LandingPage