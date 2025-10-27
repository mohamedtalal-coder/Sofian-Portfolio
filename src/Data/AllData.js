import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const apiValue = createContext();

function AllData({children}) {
    const [api,setApi] = useState([]);
    
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then( (item)=>{
            setApi(item.data.products)
        } )
    },[]);
  
    return (
    <apiValue.Provider value={api} >
        {children}
    </apiValue.Provider>
  )
}

export  {AllData,apiValue};