import React, { useState,useEffect } from 'react'
import '../styles/_checkout.scss'
import { useShoppingCart } from '../context/ShoppingCartContext'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from 'moment';
import data from '../data.js'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Checkout = () => {
  const [product,setProduct]=useState([])
  const [loading,setLoading]=useState(false)
//   useEffect(()=>{
//     axios.get('https://www.maxway.uz/_next/data/uwi69JJaAePmM5WocjiaT/index.json')
//     .then((res)=>{
//         setProduct(res.data.pageProps.products.products);       
//     })
//     .finally(()=>{
//       setLoading(false)
//     })
// },[]) 
  const person =JSON.parse(localStorage.getItem('person') || '{}')
   const navigate=useNavigate()
    
    const [value,setValue]=useState(person?.value)
    const [name,setName]=useState(person?.name)
  const {getItemQuantity,increaseQuantity,decreaseQuantity,removeFromCart,cartItems,removeAll}=useShoppingCart()

  const newArr:any=[]
  cartItems.forEach((item)=>data.filter((e:any)=>e.id===item.id).map((element:any,j:number)=>newArr.push(element)))
 
  
  const newPrice=newArr.map((item:any,i:number)=>getItemQuantity(item.id)*Number(item.price))

  const [type,setType]=useState(false)
  const now = moment().hour(0).minute(0);
  const [time, setTime] = useState(moment());
  const handleValueChange =(value:any) => {
    setTime(value);
    
  };
  const [payment,setPayment]=useState('money')
  const [delivery,setDelivery]=useState(false)
  const check=(e:any)=>{
    e.preventDefault()
    toast.success('Sizning zakazingiz qabul qilindi')
    removeAll()
    navigate('/')
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });

  }
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
       <section className='checkout'>
        <div className="container">
            <div className="row">
              <div className="col-8">
                <form onSubmit={check}>
                  <div className="title">
                    <h4>Оформление заказа</h4>
                  </div>
                  <div className="label">
                    <span>Имя</span>
                    <input value={name} onChange={(e)=>setName(e.target.value)} className='name' type="text" />
                  </div>
                  <div className="label">
                    <span>Номер телефона</span>
                    <PhoneInput
                    international
                    max={9}
                    limitMaxLength={true}
                    value={value}
                    onChange={setValue}
                    required
                    defaultCountry={"UZ"}
                    name="phone"
                    autoComplete='off'
                    disabled={false}
                    />
                </div>
                <div className="payment-type">
                  <span>Тип оплаты</span>
                  <div className="payment-type-cards">
                    <div onClick={()=>setPayment('money')} className={payment==='money'?"payment-type-card active":"payment-type-card"}>
                      <img src="https://www.maxway.uz/images/Icons/Payment/cash.png" alt="" />
                      <p>Наличные</p>
                    </div>
                    <div onClick={()=>setPayment('click')}  className={payment==='click'?"payment-type-card active":"payment-type-card"}>
                      <img src="https://www.maxway.uz/images/Icons/Payment/click.png" alt="" />
                      <p>Click</p>
                    </div>
                    <div onClick={()=>setPayment('payme')} className={payment==='payme'?"payment-type-card active":"payment-type-card"}>
                      <img src="https://www.maxway.uz/images/Icons/Payment/payme.png" alt="" />
                      <p>Payme</p>
                    </div>
                  </div>
                </div>
                <div className="shipping-method">
                  <span>Метод доставки</span>
                  <div className="shipping-method-cards">
                    <div onClick={()=>setDelivery(!delivery)} className={!delivery?"shipping-method-card active":"shipping-method-card"}>
                      <img src="https://www.maxway.uz/images/Icons/Delivery/delivery.svg" alt="" />
                      <p>Доставка</p>
                    </div>
                    <div onClick={()=>setDelivery(!delivery)} className={delivery?"shipping-method-card active":"shipping-method-card"}>
                      <img src="https://www.maxway.uz/images/Icons/Delivery/box.svg" alt="" />
                      <p>Самовывоз</p>
                    </div>
                  </div>
                </div>
                <div className="time">
                  <span>Время доставки</span>
                  <div className="type">
                    <p onClick={()=>setType(false)} className={!type?"active":""}>Срочная доставка</p>
                    <p onClick={()=>setType(true)} className={type?"active":""}>Доставка по расписанию</p>
                  </div>
                  {type && <TimePicker
                     defaultValue={time}
                    showSecond={false}
                    onChange={handleValueChange}
                  />}
                 
                </div>
                <div className="phone">
                  <span>Хотели бы что бы вам позвонил курьер?</span>
                 <div className="phone-checks">
                 <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                      <label className="form-check-label">
                      Да
                      </label>
                  </div>
                  <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                      <label className="form-check-label">
                      Нет
                      </label>
                  </div>
                 </div>
                 
                </div>
                <div className="address">
                  <span>Адрес</span>
                  <textarea required placeholder='Адрес' name="" id="" cols={30} rows={7}/>
                 </div>
                 <div className="address">
                  <span>Комментария</span>
                  <textarea placeholder='Комментария' name="" id="" cols={30} rows={7}/>
                 </div>
                 <button className='large-button'> Подтвердить заказ</button>
                </form>
              </div>
              <div className="col-4">
                <div className="item">
                  <div className="item-top">
                    <h4>Ваш заказ</h4>
                  </div>
                  <div className="item-body">
                    {newArr.length>=1 && newArr?.map((item:any,i:number)=>{
                      return(
                        <div className="item-product">
                          <div className="item-product-left">
                            <p>{getItemQuantity(item.id)}</p>
                            <p>x</p>
                            <p>{item.title} </p>
                          </div>
                          <div className="item-product-right">
                            <p>{getItemQuantity(item.id) * item.price} сум </p>
                          </div>
                      </div>
                      )
                    })}
                    
                    {!delivery && <div className="delivery">
                      <p>Доставка</p>
                      <p>9 000 сум</p>
                    </div>}
                  </div>
                  <div className="item-footer">
                    <h4>Всего</h4>
                    {delivery && newPrice.length>=1 && <h4>{newPrice.reduce((acc:number,curr:number)=>acc+curr)} сум</h4>}
                    {!delivery && newPrice.length>=1 && <h4>{newPrice.reduce((acc:number,curr:number)=>acc+curr)+9000} сум</h4>}
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
      }
   </>
  )
}

export default Checkout