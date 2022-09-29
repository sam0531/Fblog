import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';

const Food = () => {


 

  const [foodData,setbollywoodData]= useState([])
  useEffect(()=>{
       const getdata= async ()=>{
        const bdata = await axios.get("https://blog-app-serverside.herokuapp.com/api/food")
        setbollywoodData(bdata.data)
       }
       getdata()
  },[])
  dateConvert(foodData);
  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  return (

    <>
      <Allcard heading='Food' page={foodData} />
    </>
  )
}

export default Food;