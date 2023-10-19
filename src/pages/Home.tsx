import React,{useEffect,useState} from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import Products from '../components/Products'
import axios from 'axios'


const Home = () => {
  const [product,setProduct]=useState([])
  const [banner,setBanner]=useState([])
  const [loading,setLoading]=useState(false)
//   useEffect(()=>{
//     axios.get('https://www.maxway.uz/_next/data/uwi69JJaAePmM5WocjiaT/index.json')
//     .then((res)=>{
//         setBanner(res.data.pageProps.banner.banners);
//         setProduct(res.data.pageProps.categories.categories);
//     })
//     .finally(()=>{
//       setLoading(false)
//     })
// },[]) 
  return (
        <>
        {loading?
      <>
        <div className='loader'>
            <div className="spinner-grow" role="status">
              <span  className="sr-only"></span>
            </div>
            <h1><span>Max</span> <span>Way</span></h1>
        </div>
      </>
      :
      <>
          <Banner banner={banner}/>
          <Category/>
          <Products product={product}/>
        </>
}
    </>
  )
}

export default Home