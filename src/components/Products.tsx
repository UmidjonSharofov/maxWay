import React, { useState ,useEffect} from 'react'
import data from "../data.js"
import list from "../list.js"
import '../styles/_products.scss'
import { useShoppingCart } from '../context/ShoppingCartContext'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import axios from 'axios'


const Products = ({product}:any) => { 
   
    const [item,setItem]=useState<any>({})
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        const divId=document?.getElementById('#products') as HTMLDivElement 
        window.addEventListener('scroll', () => {
            if (window.scrollY > (divId?.offsetTop)-50) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const {getItemQuantity,increaseQuantity,decreaseQuantity,removeFromCart,cartItems}=useShoppingCart() 
    const toTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
  return (
    <section id="#products" className='products'>
        <div className="container">
            {list.map((item,i)=>{
                return(
                    <div key={i}>
                        <div id={item.id} className='products-root'>
                            <div>
                                <h6 className='category-title'>{item.name}</h6>
                                <div className="row">
                                    {data.filter((e)=>e.category===item.id).map((p,j)=>{
                                        return(
                                            <div key={j} className='col-3'>
                                                <div className="card">
                                                    <div  onClick={()=>{
                                                             setOpen(true)
                                                             setItem(p)
                                                        }} className="card-header">
                                                        <span>
                                                            <img loading='lazy' className='w-100' src={p.img?p.img:"https://www.maxway.uz/images/Rectangle/no-image.png"} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="card-body">
                                                        <h6  onClick={()=>{
                                                             setOpen(true)
                                                             setItem(p)
                                                            }} className='product-title'>{p.title}</h6>
                                                        <p  onClick={()=>{
                                                             setOpen(true)
                                                             setItem(p)
                                                        }}>{p.desc}</p>
                                                    </div>
                                                    <div className='card-footer'>
                                                        <span className='price'>{p.price} сум</span>
                                                        {getItemQuantity(p.id)===0?
                                                            <button onClick={()=>increaseQuantity(p.id)} className="add">Выбрать</button>
                                                        :   
                                                            <div className='quantity-div'>
                                                                <button onClick={()=>decreaseQuantity(p.id)}>-</button>
                                                                <span>{getItemQuantity(p.id)}</span>
                                                                <button onClick={()=>increaseQuantity(p.id)}>+</button>
                                                            </div> 
                                                        }
                                                        </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            {/* {
                product.map((item:any,i:number)=>{
                    return(
                        <div key={i}>
                            <div id={item.id} className='products-root'>
                                <div>
                                    <h6 className='category-title'>{item.name}</h6>
                                    <div className="row">
                                        {item.products.length>=1?
                                            <>
                                                {item.products.map((p:any,q:any)=>{
                                            return(
                                                <div key={q} className='col-3'>
                                                    <div className="card">
                                                    <div onClick={()=>{
                                                             setOpen(true)
                                                             setItem(p)
                                                        }} className="card-header">
                                                       <span>
                                                             <img loading='lazy' className='w-100' src={p.image?p.image:"https://www.maxway.uz/images/Rectangle/no-image.png"} alt="" />
                                                     </span>
                                                        
                                                    </div>
                                                    <div className="card-body">
                                                        <h6  onClick={()=>{
                                                             setOpen(true)
                                                             setItem(p)
                                                        }} className='product-title'>{p.name}</h6>
                                                        <p  onClick={()=>{
                                                             setOpen(true)
                                                             setItem(p)
                                                        }}>{p.description}</p>
                                                    </div>
                                                    <div className='card-footer'>
                                                        <span className='price'>{p.price} сум</span>
                                                        {getItemQuantity(p.id)===0?
                                                            <button onClick={()=>increaseQuantity(p.id)} className="add">Выбрать</button>
                                                        :   
                                                            <div className='quantity-div'>
                                                                <button onClick={()=>decreaseQuantity(p.id)}>-</button>
                                                                <span>{getItemQuantity(p.id)}</span>
                                                                <button onClick={()=>increaseQuantity(p.id)}>+</button>
                                                            </div> 
                                                        }
                                                        </div>
                                                    
                                                </div>
                                                </div>
                                            )
                                        })}
                                            </>   
                                            :
                                            <>
                                            {item.child_categories.map((p:any,i:any)=>{
                                               return(
                                                <>
                                                
                                                    {
                                                        p.products.map((p2:any,f:number)=>{
                                                            return(
                                                                <div key={f} className='col-3'>
                                                                    <div className="card">
                                                                    <div onClick={()=>{
                                                                            setOpen(true)
                                                                            setItem(p2)
                                                                        }} className="card-header">
                                                                    <span>
                                                                            <img loading='lazy' className='w-100' src={p2.image} alt="" />
                                                                    </span>
                                                                        
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <h6  onClick={()=>{
                                                                            setOpen(true)
                                                                            setItem(p2)
                                                                        }} className='product-title'>{p2.name}</h6>
                                                                        <p  onClick={()=>{
                                                                            setOpen(true)
                                                                            setItem(p2)
                                                                        }}>{p2.description}</p>
                                                                    </div>
                                                                    <div className='card-footer'>
                                                                        <span className='price'>{p2.price} сум</span>
                                                                        {getItemQuantity(p2.id)===0?
                                                                            <button onClick={()=>increaseQuantity(p2.id)} className="add">Выбрать</button>
                                                                        :   
                                                                            <div className='quantity-div'>
                                                                                <button onClick={()=>decreaseQuantity(p2.id)}>-</button>
                                                                                <span>{getItemQuantity(p.id)}</span>
                                                                                <button onClick={()=>increaseQuantity(p2.id)}>+</button>
                                                                            </div> 
                                                                        }
                                                                        </div>
                                                                    
                                                                </div>
                                                                </div>
                                                            )
                                                           })
                                                    }
                                                </>
                                               )
                                        })}
                                            </> 
                                    }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )                    
                })
            } */}
            
            {showTopBtn && <button onClick={()=>toTop()} className='toTop'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
            </button>}
        </div>
        {item && <Modal classNames={{modal:"customModal"}} open={open} onClose={onCloseModal} center>
           <div className='card-body'>
                <div className='left'>
                    <img loading='lazy' src={item.img} alt="" />
                </div>
                <div className='right'>
                    <h1>{item.title}</h1>
                    <span className='desc'>{item?.desc}</span>
                    <div className="quantity">
                        <div className='quantityBtn'>
                            <button onClick={()=>decreaseQuantity(item.id)}>-</button>
                            <span>{getItemQuantity(item.id) || 1}</span>
                            <button onClick={()=>increaseQuantity(item.id)}>+</button>
                        </div>    
                        {getItemQuantity(item.id) ===0 ? 
                            <>
                            <button onClick={()=>increaseQuantity(item.id)} className='add-toCart'>
                                <span>В корзину</span>
                                <span>{item.price} сум</span>
                            </button>
                        </>
                        :
                        <>
                            <button disabled={true} className='add-toCart disabled'>
                                <span>Добавлено</span>
                                <span>{item.price * getItemQuantity(item.id)} сум</span>
                            </button>
                        </>}
                        
                    </div>
                </div>
           </div>
      </Modal>}
    </section>
    
  )
  
}


export default Products;

