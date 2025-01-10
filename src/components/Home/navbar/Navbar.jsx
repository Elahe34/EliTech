import React, { useEffect, useRef, useState, useContext } from 'react'
import { navitem } from "../../../data"
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaShoppingBag, FaTimes, FaUser } from 'react-icons/fa'
import "./Navbar.css"
import { DataContext } from '../../context'


const Navbar = () => {
    //state for togglin navigation menu(icon switch between open and close)
    const [showLinks, setShowLinks] = useState(false)
    // This tow useRef are used to dynamically set the height of the toggled menu
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)
    //Importing value from the DataContext
    const value = useContext(DataContext)
    //Accessing from card array from the context for managing the shopping card
    const [card] = value.card
    //Accessing setSearchin from the context to manage the search input state
    const { setSearchin } = value
    //Use to navigate to other routes
    const navigate = useNavigate()
    const{showregister,setShowregister}=value

    //function to handle search box input 
    const handleSearch = (e) => {
        setSearchin(e.target.value)//Update search value in the context
        if (e.key === "Enter") {//Redirect to /products when Enter is pressed
            navigate('/products')
        }
    }

    //function for search box button
    const handleSearchBtn = () => {
        navigate('./products')
    }
    //This UseEffect dynamically calculates and set the height of the toggle manu
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`//Expand menu
        } else {
            linksContainerRef.current.style.height = "0px"//Collapse menu

        }
    }, [showLinks])

    //function for logging out the user and clearing localStorage
    const handleLogout = (e) => {
        // e.preventDefault()
        // localStorage.clear()
        navigate("/")
        setShowregister(false)
    }



    return (
        <nav className='nav'>
            <div className="container">
                <div className="nav-logo">
                    {/* Toggles navigation menu visibility */}
                    <button onClick={(e) => setShowLinks(!showLinks)} className='nav-toggler'>
                        {
                            showLinks ? <FaTimes /> : <FaBars />

                        }
                    </button>
                    <div>
                        <Link to='/' className='logo'>
                            <h3>Eli</h3>
                            <h3 className='color-part'>T</h3>
                            <h3>ech</h3>
                        </Link>
                    </div>
                </div>
                {/*Navigation links container with dynamic height*/ }
                <div className="nav-links" ref={linksContainerRef}>
                    <ul className='list' ref={linksRef}>
                        {
                            navitem.map((item) => {
                                const { id, url, text } = item
                                return (
                                    <Link className='links' to={url} key={id}>{text}</Link>
                                )
                            })
                        }
                    </ul>
                    {
                        showregister && <Link className='profile-link' to='/profile'>پروفایل</Link>
                    }
                </div>
                <div className="search-site">
                    <button onClick={handleSearchBtn} className='search-button'>جستجو</button>
                    <input onKeyDown={handleSearch} onChange={handleSearch} className='search-input' type="text" placeholder='بگرد و ببین' />
                </div>
                <div className="nav-icon">
                    <div className='shopping-card'>
                        {
                            card.length > 0 && (
                                <Link to='/Cart'>
                                    <span>{card.length}</span>
                                </Link>
                            )
                        }
                        <Link to='/Cart'>
                            <FaShoppingBag className='shop-icon' />
                        </Link>

                    </div>
                    {
                        showregister  ? (
                            <button className='logout-btn' onClick={handleLogout}>خروج</button>

                        ) : (
                            <div className='register-login'>
                                <Link className='register-icon' to="/register"><FaUser /></Link>

                                <span><Link className='now'   to="/Register">ثبت نام / </Link></span>
                                <span><Link className='now'   to="/login">ورود</Link></span>

                            </div>
                        )
                    }


                </div>
            </div>
        </nav>
    )
}

export default Navbar