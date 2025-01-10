import React, { useState } from 'react'
import './Filter.css'

const Filter = (props) => {

    return (
        <div className='filter'>
            <div className='filter-sort'>
                <div className='sort-title'>مرتب سازی بر اساس</div>
                <div className='form-checkbox'>
                    <div className='forms'>
                        <input onChange={props.sortProducts} className='filter-inputs' type="radio" name="radiosort" id="newest" value="asc" />
                        <label className='filter-label' for="newest">جدیدترین محصولات</label>
                    </div>
                    <div className='forms'>
                        <input onChange={props.sortProducts} className='filter-inputs' type="radio" name="radiosort" id="oldest" value="desc" />
                        <label className='filter-label' for="oldest">قدیمی ترین محصولات</label>
                    </div>
                </div>
            </div>
            <div className='filter-brand'>
                برندها
                <select className='select-part' name="" id="" value={props.brand} onChange={props.filterProducts}>
                    <option value="all">همه</option>
                    <option value="samsung">سامسونگ</option>
                    <option value="apple">اپل</option>
                    <option value="sony">سونی</option>
                    <option value="asus">ایسوس</option>
                    <option value="lg">ال جی</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
