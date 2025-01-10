import React,{createContext, useEffect, useState} from "react";
import {ProductsData} from '../data'
import Cart from "./Cart/Cart";
export const DataContext =createContext()

export const DataProvider =(props)=>{
    const[products,setProducts]=useState(ProductsData)
    const[searchin,setSearchin]=useState("")
    const[showregister,setShowregister]=useState(false)
    console.log("serchin:",searchin)

    const [card,setCard] = useState(()=>{
        const dataCart = JSON.parse(localStorage.getItem("dataCart"))
        return dataCart ? dataCart : []
    })

    useEffect(()=>{
        localStorage.setItem("dataCart",JSON.stringify(card))
    },[card])
    const addCard= (id)=>{
        const check = card.some(item =>{
            return item.id === id
        })
        console.log(check)
        if(!check) {
            const data = products.find(product =>{
                return product.id === id })
            setCard([...card,data])
        }else{
            alert("این محصول در سبد خرید موجود است .")
        }

    }
    const increase=(id)=>{
        card.forEach(item=>{
            if(item.id === id){
                item.count +=  1
            }
        })
        setCard([...card])
    }
    const decrease=(id)=>{
        card.forEach(item=>{
            if(item.id === id){
                item.count ===1 ? item.count =1 : item.count -= 1
            }
        })
        setCard([...card])
    }
    const removeProduct = (id)=>{
        if(window.confirm("آیا میخواهید این محصول از سبد خرید حذف شود؟")){
            card.forEach((item,index)=>{
                    if(item.id === id){
                        card.splice(index,1)
                    }
                }
                
            )
        }
        setCard([...card])
    }







    const value={
        products:[products,setProducts],
        addCard : addCard,
        card :[card,setCard],
        decrease:decrease,
        increase:increase,
        removeProduct :removeProduct,
        setSearchin:setSearchin,
        searchin:searchin,
        setShowregister:setShowregister,
        showregister:showregister
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
