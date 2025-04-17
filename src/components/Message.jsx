import axios from 'axios';
import React from 'react'
import useSWR from 'swr';

const api = "https://backend.graycorp.io:9000/mymate/api/v1/tempClients";
  const fetchDetails = async(api) => {
    const response = await axios.get(api);
    return response.data;
  }

const Message = () => {
  
  const {data,error,isLoading,mutate} = useSWR(api,fetchDetails);
  console.log(data);
  // Handle loading state
  if (isLoading) return <div>Loading...</div>;
  
  // Handle error state
  if (error) return <div>Error fetching data</div>;
  return (
    <div>
     {data.map((item) => (
      <div key={item.client_id} className='flex-col'>
      {item.client_id}
      <img alt='index' src={item.client_profile_url} className='w-20'/>
      </div>
      
     ))}
    </div>
  )
}

export default Message