import React from 'react';
import './hero.css'
import { HiLocationMarker } from 'react-icons/hi';
import CountUp from "react-CountUp";


const header = () => {
    return (
        <section className='Hero-wrap '>
            <div className="innerWidth flexCenter paddings hero-contain">
                <div className=" flexColStart left-part">
                    <div className="left-texts">
                        <div className="circle"/>
                        <h1>
                            Discover  <br />Most Suitable <br />Property
                        </h1>
                    </div>
                    <div className=" flexColStart descr">
                        <p>find a variety of properties that suit you very easily</p>
                        <p>forget all difficulties in finding a residence for you</p>
                    </div>
                    <div className=" flexCenter searchbar">
                        <HiLocationMarker color= "var(--blue)" size={25} />
                        <input type="text" name="" id="" />
                        <button className='button'>search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            
                            <span className='num'>
                            <CountUp start={8800} end={9000} duration={5} />  
                                <span className='pulus'> +</span>
                                </span>
                            
                           
                            <span className='under'>Premium Product</span>
                        </div>
                        <div className="flexColStart stat">
                            
                            <span className='num'>
                            <CountUp start={1990} end={2000} duration={5} />  
                                <span className='pulus'> +</span>
                                </span>
                            
                           
                            <span className='under'>Happy costumer</span>
                        </div>
                        <div className="flexColStart stat">
                            
                            <span className='num'>
                            <CountUp start={25} end={28} duration={5} />  
                                <span className='pulus'> +</span>
                                </span>
                            
                           
                            <span className='under'>awards winnimg</span>
                        </div>

                        
                    </div>
                </div>
                <div className="right-part">
                    <div className="img-contain">
                        <img src="hero-image.png" alt="" />
                    </div>

                </div>
         </div>
        </section>
    )
}
export default header;