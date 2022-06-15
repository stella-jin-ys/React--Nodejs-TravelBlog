import React,{useState, useEffect} from 'react';
import './destinations.css'


function Destinations() {
  const [loading, setLoading] = useState(true);
  const [desti, setDesti] = useState([]);

  useEffect(() => {
    setLoading(true)
    fetch('https://travel-blog-a7715-default-rtdb.europe-west1.firebasedatabase.app/destinations.json')
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      let destinations = [];
      for (const key in data){
        const item = {
          id:key,
          ...data[key]
        }
        destinations.push(item)
      }
      setLoading(false)
      setDesti(destinations)
    })
  },[])

  if(loading){
    return (
      <section>
        <p>Is loading</p>
      </section>
    )
  }

  return (
    <div className='destinations'>
      <div className='desti-header'>
        <h2>Destinations</h2>
        <h4>Luxury vacation or backpack trip </h4>
        {desti.map((item)=>(
          <ul>
            <li key={item.id}>
            <h3> {item.country}</h3>
              <img src={item.image} alt="" />
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Destinations