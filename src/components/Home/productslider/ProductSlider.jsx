import React, { useRef, useEffect } from 'react';
import { ProductsData } from '../../../data';
import './ProductSlider.css';
import { Link } from 'react-router-dom'

const ProductSlider = () => {
    const sliderRef = useRef(null);
    //Initialize slider setting and reset scroll position to the start
    useEffect(() => {
        const slider = sliderRef.current;
        slider.style.scrollBehavior = "smooth";
        slider.scrollLeft = 0;
      
    }, []);

    return (
        <div className="slider-section">
            <div className="top-title">
                <h3>پرفروش‌ترین‌ها</h3>
            </div>
            <div className="slider-box" ref={sliderRef}>
                {ProductsData.map((product) => (
                    <div className="slider" key={product.id}>
                     {/* product image whit link to products component */}
                        <Link to={`/products/${product.id}`}>
                        <img
                            className="img-slider"
                            src={product.images[0]}
                            alt={product.title}
                            onClick={`/products/${product.id}`}
                        />
                        </Link>
                        {/* product title whit link to products component */}
                        <Link to={`/products/${product.id}`}>
                            <h5 onClick={`/products/${product.id}`} className="title">{product.title}</h5>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSlider;