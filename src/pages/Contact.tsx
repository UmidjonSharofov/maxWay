import React from 'react'
import "../styles/_contact.scss"

const Contact = () => {
  return (
    <section className='contact'>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <h2>Контакты</h2>
                            <div className='card-body-main'>
                                <div className="card-body-header">
                                    <span>Единный call-центр</span>
                                    <span>
                                        <a href="tel:+998712005400">+998 71 200 54 00</a>
                                    </span>
                                </div>
                                <div className="card-body-footer">
                                    <span>
                                        Вы можете написать нам <a href="#">@MaxWaySupport_bot </a>
                                          также вы можете звонить по номеру +998712005400.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact