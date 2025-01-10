import React, { useEffect, useState } from 'react'
import { ProductsData } from '../../../data';
import { Link } from 'react-router-dom'
import './Sliders.css'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import formatCurrency from '../../util'
const Sliders = () => {
    //Utility function to randomly select a specific number of slides from the data
    const getRandomSlides = (slides, count) => {
        const shuffled = [...slides].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count)
    }
    //State for storing 4 randomly selected slides from ProductsData
    const [slide, setSlide] = useState(getRandomSlides(ProductsData, 4))
    //State for keeping track of the currently displayed slide index
    const [index, setIndex] = useState(0)

    //Adjust the index to loop slides back or start pr end of the cycle
    useEffect(() => {
        let lastIndex = slide.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        } if (index > lastIndex) {
            setIndex(0)
        }

    }, [index, slide])

    //Automaticaly changes the slide every 4 second
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index + 1);
        }, 4000)
        return () => clearInterval(interval)
    }, [index])
    return (
        <div className='slider-container'>
            <div className='section-center'>
                {
                    slide.map((item, slideindex) => {
                        const { id, images, title ,price} = item;
                        let position = "nextSlide";
                        if (slideindex === index) {
                            position = "activeSlide"

                        }
                        if (slideindex === index - 1 || (index === 0 && slideindex === slide.length - 1)) {
                            position = "lastSlide"
                        }
                        return (
                            <>
                                <article className={`slider-article ${position}`} key={id}>
                                    <img className='img-slider' src={images[0]} alt="" />

                                    <div className='slider-div'>
                                        <Link to={`/products/${item.id}`}>
                                            <h3 className='slider-title'>{title}</h3>
                                            <button className='price' >{formatCurrency(price)}</button>
                                            <button className='learn-more' onClick={`/products/${item.id}`}>اطلاعات بیشتر</button>
                                        </Link>
                                    </div>
                                </article>

                            </>
                        )
                    })
                }
                {/* Buttons to change the slides */}
                <button className='next' onClick={() => { setIndex(index + 1) }}>
                    <FiChevronRight />
                </button>
                <button className='prev' onClick={() => { setIndex(index - 1) }}>
                    <FiChevronLeft />
                </button>
            </div>

        </div>
    )
}

export default Sliders
