import LandingPage from './components/LandingPage';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useEffect,useState } from 'react';

const queryClient = new QueryClient()


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
  
  const { data, status } = useQuery("users", fetchData);
  
  return (
    <div className="App flex justify-center items-center">
    <QueryClientProvider client={queryClient} >
   {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <div className='mx-20'>
          <LandingPage data={data.users}/>      
        </div>
  )
}
</QueryClientProvider>
</div>

  )
}

export default App;
