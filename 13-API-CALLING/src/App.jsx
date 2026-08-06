import axios from 'axios'
import React, {useState} from 'react'

const App = () => {
  const [data, setData] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data);
    
      setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem, idx){
          return <div>
            <img src={elem.url} />
          </div>
        })}
      </div>
    </div>
  )
}

export default App