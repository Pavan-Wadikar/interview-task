// Imports
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from './components/LandingPage';

import Profile from './components/Profile'

const queryClient = new QueryClient()



// Fetching Of Api
let api='https://panorbit.in/api/users.json'
    async function fetchData(){
      try {
          let panApiObj= await fetch(api)
          let apiJsonData=await panApiObj.json()
          
          return apiJsonData


          
      } catch (error) {
          console.log(error);
      }
  }



function App() {
  // Getting Data object from api
  const { data, status } = useQuery("users", fetchData);
  console.log(data);
  return (
  <div className="App ">
    <QueryClientProvider client={queryClient} >
    {/* Router */}
        <Router>
          <Routes>
          {status === "success" && (
        
            <Route exact path='/' element={<LandingPage data={data.users}/>}/>
                  
            )
          }
          {status==="success" &&(
            
            <Route path='/profile' element={<Profile allData={data.users}/>} />

            
          )}
          </Routes>
        </Router>
    </QueryClientProvider>
  </div>

  )
}

export default App;
