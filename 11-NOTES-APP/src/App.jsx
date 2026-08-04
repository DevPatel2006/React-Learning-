import React, {useState} from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  function submitHandler(e){
    e.preventDefault()
    const newTask = [...task]
    newTask.push({title, details})
    setTask(newTask)
    setTitle('')
    setDetails('')
  }
  
  const deleteNote = (idx) => {
    const delTask = [...task]
    delTask.splice(idx, 1)
    setTask(delTask)
  }

  return (
    <div className='h-screen lg:flex bg-black  text-white'>
      <form onSubmit={(e)=>{submitHandler(e)}} className='flex p-10 gap-4 flex-col lg:w-1/2 items-start'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input type="text" 
        placeholder="Enter Notes Heading "
        className='font-medium px-5 py-2 border-2 rounded outline-none w-full'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        />
        <textarea type='text'
        placeholder='Enter Details'
        className='font-medium px-5 py-2 h-32 border-2 rounded outline-none flex items-start flex-row w-full'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }}
        />
        <button className='active:scale-95 font-medium bg-white text-black px-5 py-2 rounded outline-none w-full'>Add Notes</button>
      </form>
      <div className='p-10 bg-gray-950 lg:border-l-2 lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap item-start justify-start h-full overflow-auto gap-5 mt-5'>
          {task.map(function(elem, idx){
            return (
              <div key={idx} className='relative h-52 w-40 flex justify-between flex-col item-start rounded-xl pt-9 pb-4 px-4 bg-cover text-black bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                <div>
                  <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
                  <p className='text-gray-700 mt-4 font-medium leading-tight'>{elem.details}</p>
                </div>
                <button onClick = {() => {deleteNote(idx)}} className='w-full bg-red-500 text-white py-1 text-xs rounded font-semibold cursor-pointer active:scale-95'>Delete</button>
              </div>
            )
          })}
         
        </div>
      </div>
    </div>
  )
}

export default App