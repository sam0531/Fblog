import React from 'react';
import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react';
import breakingnews from '../Assets/animation_640_l7klw457.gif';
import '../style.css';

const Welcomepage = () => {



    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: breakingnews,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice"
    //     }
    //   };

    return (
        <div>

            <div className='welcomediv'>
                <div className='welcometext'>
                    <h1>Hi There <span className='emoji1'>👋</span>, hope you've brought your curiosity. </h1>
                    <br />
                    <h1>Here at <span className='siren'>Siren</span> we have a huge team of <br/> One guy </h1>
                    <h1>that made all this,</h1>
                    <h1>hope you appreciate.</h1>
                    <h1>(i'll only accept positive feedbacks)  </h1>


                    <Link style={{textDecoration: 'none'}} to='/home'><div className='scrolldown'><span className='downemoji'>👊🏻</span> Let's Dive in.</div></Link>
                    
                </div>
                <div className='lottie'><img src={breakingnews} alt='no img' width={400} height={400} /></div>

            </div>

        </div>
    )
}

export default Welcomepage;