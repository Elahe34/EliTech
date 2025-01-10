import React, { useContext, useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import { DataContext } from '../context'; 
import './Products.css'; 
import formatCurrency from '../util'; 
import Filter from './Filter';
import AOS from 'aos'; // Library for scroll animations
import 'aos/dist/aos.css';

const Products = () => {
  // Accessing context values (global state)
  const value = useContext(DataContext);
  const [originalProducts] = value.products; 
  const { searchin } = value; // Search input value from context
  const [filteredProducts, setFilteredProducts] = useState(originalProducts); // Filtered product list
  const [sort, setSort] = useState("asc"); // Sorting order state
  const [brand, setBrand] = useState(""); // Selected brand filter state
  const addCard = value.addCard; // Function to add products to the shopping cart

  // Initialize AOS animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Filter products based on the search input whenever `searchin` changes
  useEffect(() => {
    if (searchin === "") {
      setFilteredProducts(originalProducts); 
    } else {
      const results = originalProducts.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchin.toLowerCase()) ||
          item.description.toLowerCase().includes(searchin.toLowerCase()) ||
          item.content.toLowerCase().includes(searchin.toLowerCase())
        );
      });
      setFilteredProducts(results);
      console.log("results:", results);
    }
  }, [searchin]);

  // Function to handle sorting products
  const sortProducts = (e) => {
    const selectedSort = e.target.value; 
    setSort(selectedSort);

    let sortedProducts = [...filteredProducts]; // Create a copy of filtered products
    if (selectedSort === "asc") {
      sortedProducts.sort((a, b) => a.id - b.id); // Sort by ID in ascending order
    } else if (selectedSort === "desc") {
      sortedProducts.sort((a, b) => b.id - a.id); // Sort by ID in descending order
    }

    setFilteredProducts(sortedProducts);
  };

  // Function to handle filtering by brand
  const filterProducts = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);

    if (selectedBrand === "all") {
      setFilteredProducts(originalProducts); // Show all products if "all" is selected
    } else {
      const filtered = originalProducts.filter(
        (product) => product.availableBrand === selectedBrand 
      );
      setFilteredProducts(filtered);
    }
  };

  // JSX for rendering products
  return (
    <div className='products-container'>
      <Filter
        sortProducts={sortProducts}
        brand={brand}
        filterProducts={filterProducts}
      />
      {filteredProducts.map((product) => (
        <div className='product-box' data-aos="fade-up" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img className='store-img' src={product.images[0]} alt='' />
          </Link>
          <div className='information-box'>
            <Link to={`/products/${product.id}`}>
              <h3 className='store-title'>{product.title}</h3> 
            </Link>
            <p className='store-description'>{product.description}</p> 
            <h4 className='store-price'>{formatCurrency(product.price)}</h4>
            <button className='shoping-store-btn' onClick={() => addCard(product.id)}>
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products; 