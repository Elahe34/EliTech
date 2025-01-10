import React from 'react'
import './News.css'
const News = () => {
    return (
        <div className='news-part'>
            <h1 className='title-news'>جدیدترین اخبار برترین شرکت های شش ماه اخیر</h1>
            <div className='cards'>
                <div className='company-card apple'>
                    <h1 className='title-company'>شرکت Apple </h1>
                    <button className='view'> <a className='company-link' href="https://www.zoomit.ir/apple/" target='-blank'>مشاهده</a>
                    </button>
                </div>
                <div className='company-card sony'>
                    <h1 className='title-company'>شرکت Sony </h1>
                    <button className='view'><a className='company-link' href="https://www.zoomit.ir/sony/" target='-blank'>مشاهده</a>
                    </button>
                </div>
                <div className='company-card asus'>
                    <h1 className='title-company'>شرکت Asus </h1>
                    <button className='view'> <a className='company-link' href="https://www.zoomit.ir/asus/" target='-blank'>مشاهده</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default News
