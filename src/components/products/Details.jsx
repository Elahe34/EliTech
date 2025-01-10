import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../context'; 
import { useParams } from 'react-router-dom'; // Used to get route parameters (product id)
import formatCurrency from '../util';
import './Details.css';

const Details = () => {
    const { id } = useParams(); // Getting the product id from the URL parameters
    const value = useContext(DataContext);
    const addCard = value.addCard;
    const imgDiv = useRef(); // Reference for the image container to handle styles and interactions

    const [products, setProducts] = value.products; // Accessing products from the context
    const [index, setIndex] = useState(0); // State to track the selected image index

    // Filtering the product that matches the id from the URL
    const details = products.filter((product) => {
        return product.id === parseInt(id);
    });

    // Function to handle zoom effect on the image when the mouse moves
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
    };

    return (
        <>
            {
                details.map((product) => (
                    <div className="details" key={product.id}>
                        <div
                            onMouseMove={handleMouseMove}
                            ref={imgDiv}
                            onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`}
                            className="img-container"
                            style={{ backgroundImage: `url(${product.images[index]})` }}
                        ></div>
                        <div className="box-details">
                            <h2 className='product-title'>{product.title}</h2>
                            <h3 className='product-price'>{formatCurrency(product.price)}</h3>
                            <div className="colors">
                                {
                                    product && product.colors.map((color, index) => (
                                        <button className='color-btn' key={index} style={{ background: color }}></button>
                                    ))
                                }
                            </div>
                            <p className="description">{product.description}</p> 
                            <p className="content">{product.content}</p>
                            <div className="thumb">
                                {
                                    product.images.map((img, index) => (
                                        <img 
                                            className='image-thumb'
                                            src={img} 
                                            key={index} 
                                            alt="" 
                                            onClick={() => setIndex(index)}
                                        />
                                    ))
                                }
                            </div>
                            <button 
                                className="card" 
                                onClick={() => addCard(product.id)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Details;