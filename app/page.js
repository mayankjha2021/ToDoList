"use client"
import { Input } from 'postcss'
import React, { useState } from 'react'

const page = () => {
    const [title, settitle] = useState("")
     const [desc, setdesc] = useState("")

     const [mainTask, setmainTask] = useState([])
   
     const submitHandler = (e)=>{
        e.preventDefault() //it will not reload the page i.e.after clicking add task it will not delete from both form
       
        setmainTask([...mainTask,{ title,desc}]);
        settitle("");
        setdesc("");
        console.log(mainTask);
     }  
      
      const deleteHandler = (i)=>{
         let copytask = [...mainTask]
         copytask.splice(i,1)
         //splice is use for deleting the elements from array but not permanently we can store it at any place
         setmainTask(copytask)
      }

     let renderTask = <h2>No Task Available</h2>
      
     if(mainTask.length>0){
      renderTask = mainTask.map((t,i)=>{
         return (
         <li key={i} className='flex items-center justify-between'>
           <div className='flex items-center justify-between mb-5 w-2/3'>
           <h5 className='text-2xl font-semibold'>{t.title}</h5>
           <h6 className='text-lg font-medium'>{t.desc}</h6>
         </div>
         <button
            onClick={()=>{
               deleteHandler(i)
               //we have called deletehandler inside a function coz if we call directly on onclick we can't see it will automatically delete
            }} 
         className='bg-red-400 text-white px-4 py-2 rounded font-bold'>
            Delete
            </button>
         </li>
         );
     })
     }
       
  return (
   <>
   <h1 className='bg-black text-white
       p-4 text-4xl font-bold text-center'>Mayank's ToDo List </h1>
     <form onSubmit={submitHandler}>
        <input
         type="text" 
         className=' text-2xl border-zinc-800 border-4
        m-5 px-3 py-2'
         placeholder='Enter Title here'
         value={title}
         onChange={(e)=>{
            settitle(e.target.value)
         }}
         />

        <input
         type="text" 
         className=' text-2xl border-zinc-800 border-4
        m-5 px-3 py-2'
         placeholder='Enter Description here'
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
         }}
        />
        
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task
        </button>
        
     </form> 
     <hr/>
     <div className='p-8 bg-slate-300'>
        <ul>
         {renderTask}
        </ul>
      </div>  
   </>
  )
}

export default page