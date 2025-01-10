import React from 'react'
import { FaPhoneAlt, FaLinkedinIn, FaInstagram, FaTwitter, FaTelegram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
 
    return (
        <>
            <div className='myfooter' >
                <div className='about-us' >
                    <h4 className='title-right'>درباره ما</h4>
                    <p className='description'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته  .</p>
                </div>
                <div className='contact'>
                    <h4 className='title-left'>راه های ارتباط با ما :</h4>
                    <div className='socials'>
                        {/* Contact part */}
                        <a className='contact-btn' href=""><FaTelegram className='icons' size={20} color='#A1A4A5' /><span className='span-contactpart'>soltanielahe34</span></a>
                        <a className='contact-btn' href=""><FaTwitter className='icons' size={20} color='#A1A4A5' /><span className='span-contactpart'>soltanielahe34</span></a>
                        <a className='contact-btn' href=""><FaInstagram className='icons' size={20} color='#A1A4A5' /><span className='span-contactpart'>soltanielahe34</span></a>
                        <a className='contact-btn' href=""><FaLinkedinIn className='icons' size={20} color='#A1A4A5' /><span className='span-contactpart'>soltanielahe34</span></a>
                        <a className='contact-btn' href=""><FaPhoneAlt className='icons' size={20} color='#A1A4A5' /><span className='span-contactpart'>09129749769</span></a>
                    </div>
                </div>

            </div>
            <div className='end-footer'>کلیه حقوق محفوظ می باشد . @2025</div>
        </>
    )
}

export default Footer
