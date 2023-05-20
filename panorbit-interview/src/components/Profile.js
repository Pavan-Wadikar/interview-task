import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import RoundImg from './RoundImg';
import './dist/leaflet.css'
import { Link } from 'react-router-dom';
import ComingSoon from './ComingSoon';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'





const Profile = ({allData}) => {
  const location=useLocation();
  const {from}=location.state

  let [title,setTitle]=useState("Profile")  
  
  const userData=from.user
  
  let allUserData=()=>{
    
    let listData=allData.map((user)=>{
      return <li key={user.id} ><a className='flex flex-row justify-start items-start gap-4 my-5 btn btn-ghost text-sm z-20' ><RoundImg src={user.profilepicture} height={10} width={10} />{user.name}</a></li>

    })
   
    return listData
  }  
  
    if(title=="Profile"){

    
    return (
    <div className='flex flex-row sapce-x-2 relative top-10'>
    
    <div className='flex'>
      <div className='flex flex-col justify-cnter items-center w-36 h-full rounded-md bg-gradient-to-r from-indigo-500 to-indigo-900 '>
        <h2 className='btn mt-40 btn-ghost decoration-slate-200' onClick={()=>{setTitle("Profile")}}>Profile</h2>
        <hr className='w-20 border bg-slate-200'/>
      
        <h2 className='btn btn-ghost' onClick={()=>{
          setTitle("Posts")

        }}>Posts</h2>
        <hr className='w-20 border bg-slate-200'/>

        <h2 className='btn btn-ghost' onClick={()=>{
          setTitle("Gallery")
        }}>Gallery</h2>
        <hr className='w-20 border bg-slate-200'/>

        <h2 className='btn btn-ghost' onClick={()=>{
          setTitle("ToDo")
        }}>ToDo</h2>
        <hr className='w-20 border bg-slate-200'/>
    
      </div>
      
     
        <div className='flex flex-col relative left-20'>
           <h1 className=' text-lg mb-10 mr-10 text-center'>{title}</h1>
          <hr className='w-full  '/>
          
        </div>
        
        <div className='relative top-20 w-[300px]'>
            
          
          
          <div className='flex flex-col justify-center items-center'>
          <RoundImg className="mt-30" src={userData.profilepicture} width={180} height={180} />
          <h1 className='text-base mt-10 ml-4 font-medium'>{userData.name}</h1>
          <div className='flex mt-10 flex-col justify-center items-center '>
            <h1><span className='text-slate-500'>Username :</span><span className='text-slate-800'>{userData.username}</span></h1>
            <h1><span className='text-slate-500'>e-mail :</span><span className='text-slate-800'>{userData.email}</span></h1>
            <h1><span className='text-slate-500'>Phone :</span><span className='text-slate-800'>{userData.phone}</span></h1>
            <h1><span className='text-slate-500'>Website :</span><span className='text-slate-800'>{userData.website}</span></h1>
          </div>
          </div>
          <hr className='w-1/2 mt-22'/>
          <div className='flex mt-20 flex-col place-items-start'>
            <h1 className='text-slate-400 ml-1/2 font-medium'>Company</h1>
            <h1><span className='text-slate-400'>Name : </span><span className='text-slate-800 font-medium'>{userData.company.name}</span></h1>
            <h1><span className='text-slate-400'>Catch-Phrase :</span><span className='text-slate-800 font-medium'>{userData.company.catchPhrase}</span></h1>
            <h1><span className='text-slate-400'>bs :</span><span className='text-slate-800 font-medium'>{userData.company.bs}</span></h1>
          </div>
      
        </div>
       
      
      <div className='border relative left-[160px]'>
     
               
          <div className='mt-10'>
          <h2 className='text-slate-800'>Address:</h2>
          <h1><span className='text-slate-400'>Street:</span><span className='text-slate-800 font-medium'>{userData.address.street}</span></h1>
          <h1><span className='text-slate-400'>Suite:</span><span className='text-slate-800 font-medium'>{userData.address.suite}</span></h1>
          <h1><span className='text-slate-400'>City:</span><span className='text-slate-800 font-medium'> {userData.address.city}</span></h1>
          <h1><span className='text-slate-400'>Zipcode:</span><span className='text-slate-800 font-medium'>{userData.address.zipcode}</span></h1>
        </div>


            <div className='mt-10'>
              <MapContainer  style={{ height: "500px", width: "500px" }}  center={{lat:userData.address.geo.lat,lng:-userData.address.geo.lng}} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker> */}
              </MapContainer>
        </div>

            
         
      </div>
      </div>
      <div className='w-20 relative left-64 bottom-14'>
        <div className="dropdown dropdown-end flex justify-center mt-10 ">
          <label tabIndex={0} className="z-10 btn btn-ghost m-1 "><RoundImg src={userData.profilepicture} height={30} width={30}/>{userData.name}</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><Link to='/'><h1 className='btn btn-error'>Sign-Out</h1></Link></li>
        
          </ul>
        </div>
        <div className="dropdown dropdown-top dropdown-end mt-80">
          <label tabIndex={0} className="btn btn-ghost m-1  w-20">Chat</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {allUserData()}
          </ul>
        </div>
       
      </div>
    </div>
    
  )
  }else if(title="Posts"||title=="Gallery"||title=="ToDo"){
    return (
    <div className='flex flex-row sapce-x-2 relative top-10'>
    {console.log(title)}
    <div className='flex'>
      <div className='flex flex-col  items-center w-36 h-full rounded-md bg-gradient-to-r from-indigo-500 to-indigo-900 '>
        
        <h2 className='btn mt-40 btn-ghost decoration-slate-200' onClick={()=>{setTitle("Profile")}}>Profile</h2>
        <hr className='w-20 border bg-slate-200'/>
      
        <h2 className='btn btn-ghost' onClick={()=>{
          setTitle(title)

        }}>Posts</h2>
        <hr className='w-20 border bg-slate-200'/>

        <h2 className='btn btn-ghost' onClick={()=>{
          setTitle(title)
        }}>Gallery</h2>
        <hr className='w-20 border bg-slate-200'/>

        <h2 className='btn btn-ghost' onClick={()=>{
          setTitle(title)
        }}>ToDo</h2>
        <hr className='w-20 border bg-slate-200'/>
    
      </div>
      
     
        <div className='flex flex-col relative left-20'>
           <h1 className=' text-lg mb-10 mr-10 text-center'>{title}</h1>
          <hr className='w-full  '/>
          
        </div>
         <div className='relative left-64 top-64'> 
        <ComingSoon />
        </div>
      <div className='w-20 relative left-3/4 flex flex-col space-y-96'>
        <div className="dropdown dropdown-end flex justify-center  ">
          <label tabIndex={0} className="z-10 btn btn-ghost m-1 "><RoundImg src={userData.profilepicture} height={30} width={30}/>{userData.name}</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><Link to='/'><h1 className='btn btn-error'>Sign-Out</h1></Link></li>
        
          </ul>
        </div>
        <div className="dropdown dropdown-top dropdown-end mt-96">
          <label tabIndex={0} className="btn btn-ghost m-1  w-20">Chat</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {allUserData()}
          </ul>
        </div>
       
      </div>
    </div>
    </div>)
  }
}
  
  


export default Profile