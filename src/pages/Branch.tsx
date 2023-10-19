import React,{useEffect,useRef,useState,useLayoutEffect} from 'react'
import { YMaps, Map } from "react-yandex-maps";
import { useParams } from 'react-router-dom'
import '../styles/_branches.scss'
import axios from 'axios'
import branches from '../branches.js';


const Branch = () => {
    const {id}=useParams()
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
    const branch:any=branches.find(data=>data['id'] ===id)
    
    
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
        <section className='branch'>
        <div className="container">
        <div className="item">
            <div className="left">
                <h1>{branch?.name}</h1>
                <div className="branch_info">
                    <div>
                        <div className="branch_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                            Адрес: {branch?.address}
                        </div>
                        <div className="branch_item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                            Часы работы: {branch?.work_hour_start}-{branch?.work_hour_end}
                        </div>
                        <div className='branch_item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            Номер телефона: {branch?.phone}
                        </div>
                        <div className='branch_item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                            </svg>
                            Ориентир: {branch?.destination}
                        </div>
                    </div>
                    <div className="branches_img">
                        <img src={branch?.image?branch.image:"https://www.maxway.uz/images/Rectangle/max-way.png"} alt="" />
                    </div>
                </div>  
            </div>
            <div id='right' className="right">
                <div className="map">
                    <YMaps>
                        <div>
                            <Map width={710} height={460} defaultState={{ center: [branch?.location?.lat, branch?.location?.long], zoom: 9 }} />
                        </div>
                    </YMaps>
                </div>
            </div>
        </div>
       </div>
       
        </section>
    }
    </>
  )
}

export default Branch