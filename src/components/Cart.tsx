import React,{useEffect,useState} from 'react'
import '../styles/_cart.scss'
import { useShoppingCart } from '../context/ShoppingCartContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import data from '../data.js'

const Cart = () => {
    const [open,setOpen]=useState(false)
    const navigate = useNavigate();
    const fakeToken=localStorage.getItem("uuidMaxWay")
    // const [product,setProduct]=useState([])
    // useEffect(()=>{
    //     axios.get('https://www.maxway.uz/_next/data/uwi69JJaAePmM5WocjiaT/index.json')
    //     .then((res)=>{
    //         // setProduct(res.data.pageProps.products.products);
          
            
    //     })
    // },[]) 
    const {getItemQuantity,increaseQuantity,decreaseQuantity,removeFromCart,cartItems,cartQuantity}=useShoppingCart()

    const newArr:any=[]
    cartItems.forEach((item)=>data.filter((e:any)=>e.id===item.id).map((element:any,j:number)=>newArr.push(element)))
   
    
    const newPrice=newArr.map((item:any,i:number)=>getItemQuantity(item.id)*Number(item.price))

    const checkout=()=>{
        if(fakeToken){
            navigate('/checkout')
            setOpen(false)
        }else{
           setOpen(false)
           toast.warning("Royxatdan o'ting")
        }
    }
  return (
    <section className='cart'>
        <button onClick={()=>setOpen(true)} className='cart-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            {cartItems.length !==0 && <div className="num">{cartItems.length}</div>}
        </button>
        <div className={open?'cart-items open':'cart-items'}>
            <div className="cart-items-top">
                <h6>Корзина</h6>
                <button onClick={()=>setOpen(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
            </div>
            <div className="cart-items-body">
                    
                <div className="cartPopupProducts">
                                    {cartItems.map((item,i)=>{
                                        return(
                                            <>
                                            {data.filter((e:any)=>e.id===item.id).map((element:any,j:number)=>{
                                                return(
                                                    <div key={j} className="cartPopupItem">
                                                        <div className="cartPopupImg">
                                                            <img src={element.img} alt="" />
                                                        </div>
                                                        <div className="cartPopupInfo">
                                                            <span className='infoTitle'>{element.title}</span>
                                                            <div className="cartPopupQuantity">
                                                                <div className="cartPopupQuantityBtn">
                                                                    <button onClick={()=>decreaseQuantity(element.id)}>-</button>
                                                                    <span>{getItemQuantity(element.id)}</span>
                                                                    <button onClick={()=>increaseQuantity(element.id)}>+</button>
                                                                </div>
                                                                <span className='price'>{element.price * getItemQuantity(element.id) } сум</span>
                                                            </div>
                                                        </div>
                                                        <div className="cartPopupDelete">
                                                            <svg onClick={()=>removeFromCart(element.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            </>
                                        )
                                    })}
                                    
                </div>

            </div>
            <button onClick={checkout} className='check'>
                <span>Заказать</span>
                <span>{newPrice.length >=1 && <span>{newPrice.reduce((acc:number,curr:number)=>acc+curr)} сум</span>}</span>
                
            </button>
        </div>
    </section>
  )
}

export default Cart