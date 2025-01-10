import React, { useEffect, useState } from 'react'
import { ProductsData } from '../../../data'
import{Link} from 'react-router-dom'
import './Cards.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Cards = () => {
    //Utility function to randomly select a specific number of slides from the data
    const getRandomSlides = (slides, count) => {
        const shuffled = [...slides].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count)
    }
    //State for storing 4 randomly selected slides from ProductsData
    const [cards, setCards] = useState(getRandomSlides(ProductsData, 4))
    //useEffect hook for initializing the animation library
    useEffect(()=>{
        AOS.init({
            duration:1000,
        })
    },[])
    return (
        <section>
            <div className='title-star'>
                <img className='starpic' src='/images/star.png' />
                <span className='new'>جدیدترین ها در ماه گذشته</span>
            </div>

            <div className='card-container'>

                {
                    cards.map((cards,index) => {
                        const { id, images, title } = cards
                        return (
                            <div className='card'
                            // cards at even index will fade in from the right , others from the left
                            data-aos={index%2===0 ? 'fade-right' : 'fade-left'}
                             key={id}>
                                <img className='card-img' src={images[0]} alt="" />
                                <h1 className='card-title'>{title}</h1>
                                <Link to={`/products/${cards.id}`}>
                                    <button className='buy'>خرید</button>
                                    <button className='learn-more'>اطلاعات بیشتر</button>
                                </Link>
                            </div>

                        )
                    })
                }
            </div>
        </section>
    )
}

export default Cards
