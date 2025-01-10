import Header from "./components/Home/Header/Header";
import Navbar from "./components/Home/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DataProvider } from "./components/context";
import Products from "./components/products/Products";
import ProductSlider from "./components/Home/productslider/ProductSlider";
import Sliders from "./components/Home/slider/Sliders";
import Cards from "./components/Home/cardPart/Cards";
import QuestionAccordian from "./components/Home/accordian/QuestionAccordian";
import Footer from "./components/Home/footer/Footer";
import Register from "./components/register/Register";
import Details from "./components/products/Details";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Profile from "./components/Login/profile/Profile";
import Contact from "./components/contact/Contact";
import News from "./components/news/News";
function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <ProductSlider/>
              <Sliders/>
              <Cards/>
              <QuestionAccordian/>
            </>
          } />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />

          <Route path="/profile" element={<Profile/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/news" element={<News/>}/>

          <Route path="/products" element={<Products/>} />
          <Route path="/products/:id" element={<Details/>} />
          <Route path="/cart" element={
            <>
              <Cart/>
              <ProductSlider/>
            </>
          }/>


        </Routes>
        <Footer/>

      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
