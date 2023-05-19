import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import RoundImg from './RoundImg';
import './dist/leaflet.css'

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'




const Profile = ({allData}) => {
  const location=useLocation();
  const {from}=location.state

  
  const [userData,setUserData]=useState(from.user); 

  console.log(userData);  
  
  return (
    <div className='flex flex-row sapce-x-2 relative top-10'>
    <div className='flex'>
      <div className='flex flex-col w-36 h-full rounded-md bg-gradient-to-r from-indigo-500 to-indigo-900 '>
        <h2 className='btn mt-5 btn-ghost decoration-slate-200'>Profile</h2>
        <hr className='w-20 border bg-slate-200'/>
      
        <h2 className='btn btn-ghost'>Posts</h2>
        <hr className='w-20 border bg-slate-200'/>

        <h2 className='btn btn-ghost'>Gallery</h2>
        <hr className='w-20 border bg-slate-200'/>

        <h2 className='btn btn-ghost'>ToDo</h2>
        <hr className='w-20 border bg-slate-200'/>
    
      </div>
      
     
        
        <div className='relative left-[50px] w-[300px]'>
          <h1 className='text-lg mt-20 mr-10 text-center'>Profile</h1>
          {/* <hr className='w-screen bg-black'/> */}
          <RoundImg className="my-30" src={userData.profilepicture} width={180} height={180} />
          <h1 className='text-base mt-10'>{userData.name}</h1>
          <div className='flex  flex-col text-center '>
            <h1>Username :{userData.username}</h1>
            <h1>e-mail :{userData.email}</h1>
            <h1>Phone :{userData.phone}</h1>
            <h1>Website :{userData.website}</h1>
          </div>

          <div className='flex flex-col place-items-start'>
            <h1>Name :{userData.company.name}</h1>
            <h1>Username :{userData.company.catchPhrase}</h1>
            <h1>bs :{userData.company.bs}</h1>
          </div>
      
        </div>
       
      
      <div className='border relative left-[100px]'>
     
               
          <div className='mt-10'>
          <h2>Address:</h2>
          <h1>Street:{userData.address.street}</h1>
          <h1>Suite:{userData.address.suite}</h1>
          <h1>City:{userData.address.city}</h1>
          <h1>Zipcode:{userData.address.zipcode}</h1>
        </div>


            <div className=''>
              <MapContainer  style={{ height: "450px", width: "450px" }}  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
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
      </div>
    
  )
}

export default Profile