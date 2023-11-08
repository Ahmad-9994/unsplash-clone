import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from 'axios'

const Home = () => {

  const [data, setData] = useState("cat")
  const [pic, setPic] = useState([])
  

  useEffect(() => {
    axios.get(`https://api.unsplash.com/search/photos?client_id=z6PDB9D_JqsA831lDZKF77Ecg_dNeqIaOZQYRjoFxdE&query=${data}`)
      .then((res) => setPic(res.data.results))
      .catch((error) => console.log(error))
  }, [data]) 






  

  function mapping(item) {
    return (
      <div className='image'>
        <img key={item.id} style={{ width: 350 }} height={350} src={item.urls.regular}></img>
      </div>
    )
  }

   
  return (
    <div className='home'>

      <div className='search'>
        <label>search picture</label>
        <br></br>
        <input type='text' value={data} onChange={(e) => setData(e.target.value)}></input>
        
      </div>
      <br></br>

      <div className='pare'>
        {pic.map(mapping)}

      </div>

    
    </div>

  )
}

export default Home

