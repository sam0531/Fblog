import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Allcard = ({ heading, page }) => {

  const [trendData,settrendData]= useState([])
  useEffect(()=>{
       const getdata= async ()=>{
        const bdata = await axios.get("https://blog-app-serverside.herokuapp.com/api/trend")
        settrendData(bdata.data)
       }
       getdata()
  },[]) 
 
  return (
    <>


      <div className='allcardgrid'>



        <div className='allcardpage'>
          <div className='allcardheading'>{heading}</div>
          <div className='allcardparent'>
            {
              page.map((ele, i) => {
                return (
                  <NavLink style={{ textDecoration: 'none' }} state={{ title: ele.title, publishdate: ele.publishedAt, img: ele.urlToImage, content: ele.content, author: ele.author, url: ele.url, id: `a${i}` }} to={`a${i}`}>
                    <div className='allcard' id={`a${i}`}>
                      <img src={ele.urlToImage} alt="" />
                      <div className='alltextflex'>
                        <p>{ele.title}</p>
                        <div>{ele.description.slice(0, 50)}...</div>

                        <span>{heading} / {ele.publishedAt}</span>
                        
                      </div>
                    </div>
                  </NavLink>
                )
              })
            }
          </div>
        </div>





        <div className='toppostcontainer'>
          <div className='toppostheading'>Top Posts</div>
          <div className='toppostcardparent'>
            {
              trendData.map((ele, i) => {
                return (
                  <NavLink style={{ textDecoration: 'none' }} state={{ title: ele.title, publishdate: ele.publishedAt, img: ele.urlToImage, content: ele.content, author: ele.author, url: ele.url, id: `a${i}` }} to={`a${i}`}>
                    <div className='toppostcard' id={`t${i}`}>
                      <img src={ele.urlToImage} alt="" />
                      <p>{ele.title}</p>
                      <span>Top Posts / {ele.publishedAt}</span>
                    </div>
                  </NavLink>
                )
              })
            }
          </div>
        </div>



      </div>
    </>
  )
}

export default Allcard;