import React, {useState} from 'react'

const App = () => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
         console.log("Form submitted by", title)
    }
  return (
    <div>
        <form onSubmit={(e) =>{
            handleSubmit(e)
        }}>
            <input type="text"
             placeholder='Enter your name'
             value={title} 
             onChange={(e)=>{
                setTitle(e.target.value)
             }} 
             />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default App