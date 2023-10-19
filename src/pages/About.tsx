import React from 'react'
import '../styles/_about.scss'

const About = () => {
  return (
    <section className='about'>
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <div className="card">
              <div className="card-body">
                <div className="img-div">
                    <img loading='lazy' src="https://www.maxway.uz/images/Rectangle/about.png" alt="" />
                </div>
                <div className="info">
                  <h3>О компании</h3>
                  <p>
                  Компания была основана в феврале 2005 года в Ташкенте. На сегодняшний момент у компании 14 филиалов в Ташкенте.
                  Меню состоит в основном из клаб сендвичей, хот-догов, бургеров, лавашей и донаров. Наши приоритеты – свежесть и качество ингредиентов, разнообразие начинок, доступные цены и внимание к просьбам гостей.
                  Ежедневно в MaxWay заказывают большое количество самых разных людей. И мы стараемся увеличивать как число посетителей, так и число филиалов. С каждым приготовленным блюдом мы оттачиваем детали фирменных рецептов и ищем идеальный баланс цены и качества, чтобы и дальше оставаться вашим любимым брендом.
                  Если вдруг вы столкнулись с плохим обслуживанием или низким качеством приготовленной еды с нашей стороны, обязательно напишите нам на <a target="_blank" href="https://t.me/maxwaymasterfoodsupport">https://t.me/maxwaymasterfoodsupport</a>. Мы с радостью принимаем как положительные, так и отрицательные отзывы. Жалоба гостя – подарок, благодаря которому нам есть куда расти.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About