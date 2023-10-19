import React,{useEffect, useState,useRef} from 'react'
import '../styles/_navbar.scss'
import { useShoppingCart } from '../context/ShoppingCartContext'    
import { NavLink,useNavigate } from 'react-router-dom'
import data from '../data.js'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { getLinks } from '../Redux/ApiCalls/Links'

const Navbar = () => {
    const [product,setProduct]=useState([])
    const [links,setLinks]=useState<any>({})
    useEffect(()=>{
        getLinks()
            .then((res)=>{
                // console.log(res)
                setLinks(res[0])
            })
        // axios.get('https://www.maxway.uz/_next/data/uwi69JJaAePmM5WocjiaT/index.json')
        // .then((res)=>{
        //     setProduct(res.data.pageProps.products.products);
          // })
    },[]) 

    console.log(links && links)
   
    const [dropdown,setDropdown]=useState(false)
    const [none,setNone]=useState(false)
    const [disabled,setDisabled]=useState(false)
    const [value,setValue]=useState('')
    const [name,setName]=useState('')
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const navigate = useNavigate();
    const {getItemQuantity,increaseQuantity,decreaseQuantity,removeFromCart,cartItems,cartQuantity}=useShoppingCart()
    const newArr:any=[]
    cartItems.forEach((item)=>product.filter((e:any)=>e.id===item.id).map((element:any,j:number)=>newArr.push(element)))
   
    
    const newPrice=newArr.map((item:any,i:number)=>getItemQuantity(item.id)*Number(item.price))
    const fakeToken=localStorage.getItem("uuidMaxWay")
    const login=(e:any)=>{
        e.preventDefault()
       
        
        if(name.length>2 && value.length===13){
            setDisabled(true)
            const person= {name,value};
            
            setTimeout(() => {
                localStorage.setItem('person',JSON.stringify(person))
                localStorage.setItem('uuidMaxWay',uuidv4())
                setOpen(false)
                setDisabled(false)
              }, 1000);
        }else{
            
            
        }
        
        
    }
    const checkout=()=>{
        if(fakeToken){
            navigate('/checkout')
        }else{
            setOpen(true)
        }
    }
   useEffect(()=>{
    const close=(e:any)=>{
        
        setDropdown(false)
       
    }
    document.body.addEventListener('click',close)
    return ()=>document.body.removeEventListener('click',close)
   },[dropdown])

  return (
    <section className='navbar'>
        <div className="container">
            <div className={!none?"none-menu":"transform none-menu"}>
                <div className="logo">
                    <NavLink onClick={()=>setNone(false)} to='/'>
                        <img src="/images/logo.svg" alt="" />
                    </NavLink>
                    <svg onClick={()=>setNone(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <div className="links">
                    <NavLink onClick={()=>setNone(false)} to={"/"}>{links?.main?.ru}</NavLink>
                    <NavLink onClick={()=>setNone(false)} to={"/branches"}>{links?.branches?.ru}</NavLink>
                    <NavLink onClick={()=>setNone(false)} to={"/about"}>{links?.about?.ru}</NavLink>
                    <NavLink onClick={()=>setNone(false)} to={"/contact"}>{links?.contact?.ru}</NavLink>
                </div>
            </div>
            <div className="left">
                <div onClick={()=>setNone(true)} className="menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
                <div className="logo">
                    <NavLink to='/'>
                        <img src="/images/logo.svg" alt="" />
                    </NavLink>
                </div>
                <div className="links">
                    <NavLink to={"/"}>{links?.main?.ru}</NavLink>
                    <NavLink to={"/branches"}>{links?.branches?.ru}</NavLink>
                    <NavLink to={"/about"}>{links?.about?.ru}</NavLink>
                    <NavLink to={"/contact"}>{links?.contact?.ru}</NavLink>
                    
                </div>
            </div>
            <div className="right">
                <button  className='cart'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <span>Корзина</span>
                   {cartItems?.length !==0?<div className='num'> {cartItems?.length}</div>:<></>}
                   <div className="cartPopup">
                    <div className="cartPopupBox">
                        {cartItems.length !==0?
                            <>
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
                            <button onClick={checkout} className='checkout'>
                                <span>Заказать</span>
                                {newPrice.length >=1 && <span>{newPrice.reduce((acc:number,curr:number)=>acc+curr)} сум</span>}
                            </button>
                            </>
                            :
                            <>
                                <div className="cartEmpty">
                                    <img src="https://www.maxway.uz/images/Icons/empty_cart.png" alt="" />
                                    <h4>В корзине пока пусто</h4>
                                </div>
                            </>
                        }
                    </div>
                   </div>
                </button>
                {fakeToken?
                    <button onClick={(e)=>{
                            setDropdown(true)
                            e.stopPropagation();
                        }}  className='user'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        {dropdown && <ul className="profileDropdown">
                                <li>
                                    <NavLink to='/user/my-profile'>{links?.profile?.ru}</NavLink>
                                </li>
                                <li>
                                    <a onClick={()=>{
                                        localStorage.removeItem('person')
                                        localStorage.removeItem('uuidMaxWay')
                                    }} href="/">Выйти</a>
                                </li>
                        </ul>}
                       
                    </button>
                    :
                    <button onClick={onOpenModal} className="login">
                        Войти
                    </button>
                }
                
                
            </div>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
            <div className="login">
                <h3>Вход на сайт</h3>
                <span className='info-span'>Войдите с вашим номером телефона</span>
                <form onSubmit={login}>
                    <input required value={name} onChange={(e)=>setName(e.target.value)} className='name' placeholder='Имя' type="text" />
                    <PhoneInput
                    international
                    max={9}
                    limitMaxLength={true}
                    value={value}
                    onChange={(value:string)=>setValue(value)}
                    required
                    defaultCountry={"UZ"}
                    name="phone"
                    autoComplete='off'
                    disabled={false}
                    />
                    <button disabled={disabled} className={disabled?"login-btn login-btn-disabled":"login-btn"}>
                        {disabled && <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>}
                        Войти
                    </button>
                </form>
                {/* <p>У вас нет ак каунта? <span>Регистрация</span></p> */}
            </div>
        </Modal>
    </section>
  )
}

export default Navbar