import "./contact.css"
import React from 'react';

import { FaPhone,FaComment,FaEnvelope} from 'react-icons/fa';
export default function company() {
    return (
        <section className="cont-wrap">
            <div className="innerWidth flexCenter paddings c-content">
                <div className="left-side flexColStart">
                    <span className="orangeText">Our contacts</span>
                    
                    <span className="primaryText">Easy to contact us </span>
                    <div className="btns flexCenterCol">
                    <div className=" flexCenter contactbar">
                        <FaPhone color= "var(--blue)" size={25} />
                        
                        <button className='button'>call</button>
                    </div>
                    <div className=" flexCenter contactbar">
                        <FaComment color= "var(--blue)" size={25} />
                        
                        <button className='button'>Message</button>
                    </div>
                    <div className=" flexCenter contactbar">
                        <FaEnvelope color= "var(--blue)" size={25} />
                        
                        <button className='button'>Mail</button>
                    </div>
                    </div>

                </div>
                <div className="right-side">
                    <div className="img-contain">
                        <img src="./contact.jpg" alt="" />
                    </div>
                    

                </div>

             </div>
        </section>
    )
}