import React, {createContext, useState, useEffect, useContext} from 'react';

const DestinationContext = createContext();

export function DestinationProvider({children}) {
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);
  
  useEffect(()=>{
    setLoading(true);
    fetch ("https://travel-blog-a7715-default-rtdb.europe-west1.firebasedatabase.app/destinations.json")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      const destiList = [];
      for (const key in data){
        const destination = {
          id:key,
          ...data[key]
        }
        destiList.push(destination)
      }
      setLoading(false);
      setDestinations(destiList)
    })
  },[])

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }


  return (
  <DestinationContext.Provider value={{
    destinations,
    loading}}>
      {children}
  </DestinationContext.Provider>)
 };

 export function DestinationApi(){
    const context = useContext(DestinationContext)
    return context
}