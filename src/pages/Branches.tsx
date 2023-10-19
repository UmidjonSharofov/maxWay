import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/_branches.scss'
import branches from '../branches.js'

const Branches = () => {
    const [loading,setLoading]=useState(false)
    // const [branches,setBranches]=useState([])
    // useEffect(()=>{
    //     axios.get('https://www.maxway.uz/_next/data/uwi69JJaAePmM5WocjiaT/branches.json')
    //     .then((res)=>{
    //         // setBranches(res.data.pageProps.branches.branches)
    //     })
    //     .finally(()=>{
    //         setLoading(false)
    //     })
    // },[])
  return (
    
    <>
        {loading? 
            <div className='loader'>
                <div className="spinner-grow" role="status">
                    <span  className="sr-only"></span>
                </div>
                <h1><span>Max</span> <span>Way</span></h1>
             </div>    
             :
             <section className='branches'>
             <div className="container">
                 {branches.map((item:any,i:number)=>{
                     return(
                         <NavLink key={item.id} to={`/branches/${item.id}`}>
                             <div className="branchListItem">
                                 <div className="left">
                                     <h1>{item.name}</h1>
                                     <span>{item.address}</span>
                                 </div>
                                 <div className="middle">
                                     <span>Часы работы</span>
                                     <span>Ежедневно: {item.work_hour_start}-{item.work_hour_end} </span>
                                 </div>
                                 <div className="right">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                         <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                     </svg>
                                 </div>
                             </div>
                     </NavLink>
         
                     )
                 })}
             </div>
            </section>
    }
       
    </>
  )
}

export default Branches