 'use client'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const homePage = () => {
    interface users
{
    f_name:string,
    l_name:string
}
    const [user,setUser]=useState<users[]>([])
    
    useEffect(()=>{
        axios.get('http://localhost:3000/ab/db/getAll')
          .then((res)=>setUser(res.data))
    },[])
    return (
        <>
         {user.map(ab=>ab.f_name)}
         <Link href='data'>Data</Link>
        </>
    );
};

export default homePage;