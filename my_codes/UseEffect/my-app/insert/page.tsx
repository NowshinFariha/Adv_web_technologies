'use client'
import axios from 'axios';
import React, { useState } from 'react';

const Data = () => {
    const [f_name,setf_name]=useState('')
    const [l_name,setl_name]=useState('')
    
   const handleSubmit= async(e:any)=>{
      e.preventDefault()
       const data={f_name,l_name}
       try
       {
       await axios.post('http://localhost:3000/ab/db/add',data)
        alert('Inserted')
        setf_name('')
        setl_name('')
       }
       catch{
        alert('error')
       }
    }

    return (
       <>
       <form onSubmit={handleSubmit}>
         <input type="text" 
         placeholder='Enter F_Name'
         value={f_name}
         onChange={(e)=>setf_name(e.target.value)}
         />
         <input type="text" 
         placeholder='Enter L_Name'
         value={l_name}
         onChange={(e)=>setl_name(e.target.value)}
         />
         <button type='submit'>Add</button>
       </form>
       </>
    );
};

export default Data;
