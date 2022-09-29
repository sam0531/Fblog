import React from 'react';
import { NavLink } from 'react-router-dom';
import { dateConvert } from '../Components/Dateconvert';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [trendData,settrendData]= useState([])
  useEffect(()=>{
       const getdata= async ()=>{
        const bdata = await axios.get("https://blog-app-serverside.herokuapp.com/api/trend")
        settrendData(bdata.data)
       }
       getdata()
  },[]) 

  const [bollywoodData,setbollywoodData]= useState([])
  useEffect(()=>{
       const getdata= async ()=>{
        const bdata = await axios.get("https://blog-app-serverside.herokuapp.com/api/bolly")
        setbollywoodData(bdata.data)
       }
       getdata()
  },[]) 

  dateConvert(trendData);
  dateConvert(bollywoodData);
 


  const slicedtrendData = trendData.slice(0, 5);
  const slicedbollywoodData = bollywoodData.slice(0, 4);




  return (
    <>

      <div className='trendcardparent'>
        {
          slicedtrendData.map((ele, i) => {
            return (
              // <NavLink style={{ textDecoration: 'none' }} state={{ title: ele.title, publishdate: ele.publishedAt, img: ele.urlToImage, content: ele.content, author: ele.author, url: ele.url, id: `h${i}` }} to={`h${i}`}>
                <div className='trendcard' id={`c${i}`}>
                  <img src={ele.urlToImage} alt="" style={{ maxWidth: '100%' }} />
                  <p>{ele.title}</p>
                  <span>Trending / {ele.publishedAt}</span>
                </div>
              // </NavLink>

            )
          })
        }
      </div>



      <div className='bollyparent'>
        <div className='bollyheading'>Bollywood</div>
        <div className='bollycardparent'>
          {
            slicedbollywoodData.map((ele, i) => {
              return (
                <NavLink style={{ textDecoration: 'none' }} state={{ title: ele.title, publishdate: ele.publishedAt, img: ele.urlToImage, content: ele.content, author: ele.author, url: ele.url, id: `a${i}` }} to={`a${i}`}>
                  <div className='bollycard' id={`b${i}`}>
                    <img src={ele.urlToImage} alt="" style={{ width: '100%' }} />
                    <p>{ele.title}</p>
                    <span>Bollywood / {ele.publishedAt}</span>
                  </div>
                </NavLink>
              )
            })
          }
        </div>
      </div>



    </>
  );
}

export default App;
