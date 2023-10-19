import React,{useState} from 'react'
import '../styles/_profile.scss'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const Profile = () => {
    const person =JSON.parse(localStorage.getItem('person') || '{}')
   
    
    const [value,setValue]=useState(person?.value)
    const [name,setName]=useState(person?.name)
    const [disabled,setDisabled]=useState(false)
    const edit=(e:any)=>{
        e.preventDefault()
        console.log(value.length);
        
        if(name.length>2 && value.length===13){            
            setDisabled(true)
            const person2= {name,value};
            
            setTimeout(() => {
                localStorage.setItem('person',JSON.stringify(person2))
                setDisabled(false)
              }, 1000);
        }else{
            
            
        }
        
    }
  return (
    <section className='profile'>
        <div className="container">
            <form onSubmit={edit}>
                <h3>Мои данные</h3>
                <div className="label">
                    <span>Имя</span>
                    <input value={name}  onChange={(e)=>setName(e.target.value)} className='name' type="text" />
                </div>
                <div className="label mt-2">
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
                <button disabled={disabled} className={disabled?"login-btn login-btn-disabled":"login-btn"}>
                        {disabled && <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>}
                        Обновить
                    </button>
            </form>
        </div>
    </section>
  )
}

export default Profile