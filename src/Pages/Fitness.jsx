import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';


const Fitness = () => {



  const [fitnessData,setbollywoodData]= useState([])
  useEffect(()=>{
       const getdata= async ()=>{
        const bdata = await axios.get("https://blog-app-serverside.herokuapp.com/api/fitness")
        setbollywoodData(bdata.data)
       }
       getdata()
  },[])
  dateConvert(fitnessData);
  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  return (

    <>
      <Allcard heading='Fitness' page={fitnessData} />
    </>
  )
}

export default Fitness;