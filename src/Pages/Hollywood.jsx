import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';

const Hollywood = () => {


  const [hollywoodData,setbollywoodData]= useState([])
  useEffect(()=>{
       const getdata= async ()=>{
        const bdata = await axios.get("https://blog-app-serverside.herokuapp.com/api/holly")
        setbollywoodData(bdata.data)
       }
       getdata()
  },[]) 
  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  dateConvert(hollywoodData);

  return (

    <>
      <Allcard heading='Hollywood' page={hollywoodData} />
    </>
  )
}

export default Hollywood;