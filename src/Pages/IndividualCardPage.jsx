import React from 'react';
import { useLocation } from 'react-router-dom';
//import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import userimg from '../Assets/userimg.png';

const IndividualCardPage = () => {

    const location = useLocation();
    const { title, img, content, publishdate, author } = location.state;

    return (
        <div className='indpage'>
            
            
            <h1 className='indtitle'>{title}</h1>

            <div className='indauthorinfo'>
                <div className='indimgandname'>
                    <img className='induserimg' src={userimg} alt="" />
                    <div className='indauthorandpublish'>
                        <div className='indauthor'>{author}</div>
                        <div className='indpublishdate'>{publishdate}</div>
                    </div>
                </div>
                
                {/* <div className='icons-social'>
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaTwitterSquare />
                    <FaYoutube />
                </div> */}
            </div>
            



            <img className='indimg' src={img} alt="" />
            <p className='inddescription'>{content}</p>



        </div>
    )
}

export default IndividualCardPage;