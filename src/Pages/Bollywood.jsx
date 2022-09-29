import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';
import axios from 'axios';

const Bollywood = () => {

  const [bollywoodData,setbollywoodData]= useState([])
  useEffect(()=>{
       const getdata= async ()=>{
        const bdata = await axios.get("https://blog-app-serverside.herokuapp.com/api/bolly")
        setbollywoodData(bdata.data)
       }
       getdata()
  },[])

  dateConvert(bollywoodData);


  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  return (

    <>
      
        <Allcard heading='Bollywood' page={bollywoodData} />

        
    </>
  )
}

export default Bollywood;