import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';

const Technology = () => {




  const [techData,setbollywoodData]= useState([])
  useEffect(()=>{
       const getdata= async ()=>{
        const bdata = await axios.get("https://blog-app-serverside.herokuapp.com/api/tech")
        setbollywoodData(bdata.data)
       }
       getdata()
  },[]) 
  // const slicedbollywoodData = bollywoodData.slice(0, 40);
  dateConvert(techData);
  return (

    <>
      <Allcard heading='Technology' page={techData} />
    </>
  )
}

export default Technology;