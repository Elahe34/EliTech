import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context'
import "./Cart.css"
import formatCurrency from '../util';

const Cart = () => {
    // Accessing context values
    const value = useContext(DataContext);
    const [card, setCard] = value.card; // Cart items
    const increase = value.increase; // Function to increase product count
    const decrease = value.decrease; // Function to decrease product count
    const removeProduct = value.removeProduct; // Function to remove product
    const [total, setTotal] = useState(0); // Total price
    const [discount, setDiscount] = useState(0); // Discount amount
    const [finalprice, setFinalPrice] = useState(0); // Final price after discount

    // Calculate discount based on cart items
    useEffect(() => {
        const getDiscount = () => {
            const res = card.reduce((prev, item) => {
                return prev + (item.price * item.count * 0.1);
            }, 0);
            setDiscount(res);
        }
        getDiscount();
    }, [card]);

    // Calculate total and final prices based on cart items and discount
    useEffect(() => {
        const getTotal = () => {
            const res = card.reduce((prev, item) => {
                return prev + (item.price * item.count); 
            }, 0);
            setFinalPrice(res - discount); // Final price = Total - Discount
            setTotal(res);
        }
        getTotal();
    }, [card, discount]);

    // If the cart is empty, show a message
    if (card.length === 0) {
        return <h1 className='empty-cart'>سبد خرید خالی است</h1>
    }

    return (
        <div className='cart-part'>
            <div className='cart-products'>
                {
                    card.map(product => (
                        <div className='cart-details' key={product.id}>
                            <div className='img-container' style={{ backgroundImage: `url(${product.images[0]})` }}>
                            </div>
                            <div className='cartbox-details'>
                                <h2 className='cardbox-title'>{product.title}</h2>
                                <h3 className='right-price'>قیمت :  {formatCurrency(product.price)}</h3>
                                <div className='colors'>
                                    {
                                        product && product.colors.map((color, index) => (
                                            <button className='color-btn' key={index} style={{ background: color }}></button>
                                        ))
                                    }
                                </div>
                                {/* Quantity and controls */}
                                <div className='amount'>
                                    <button className='count' onClick={() => increase(product.id)}>+</button>
                                    <span className='count-products'>{product.count}</span>
                                    <button className='count' onClick={() => decrease(product.id)}>-</button>
                                    <button className='delete' onClick={() => removeProduct(product.id)}>حذف از سبد خرید</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* Display total summary */}
            <div className='total'>
                <div className='product-number'>
                    <h3>تعداد محصولات : </h3>
                    <h3 className='number'>{card.length}</h3>
                </div>
                <div className='price-product'>
                    <h3>مجموع قیمت : </h3>
                    <h3>{formatCurrency(total)}</h3>
                </div>
                <div className='price-product'>
                    <h3>سود شما از خرید</h3>
                    <h3>{formatCurrency(discount)}</h3>
                </div>
                <div className='final'>
                    <h3>قیمت نهایی :</h3>
                    <h3>{formatCurrency(finalprice)}</h3>
                </div>
                <Link to="/" className='pay'>تایید و تکمیل سفارش</Link>
                <button className='offer'><h4>قابل سفارش در بسته بندی مخصوص هدیه</h4></button>
            </div>
        </div>
    )
}

export default Cart