import React from 'react';
import './header.css'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const header = () => {
    return (
        <section className='h-wrap'>
            <div className=' flexCenter paddings innerWidth h-contain'>
              <img src="./logo.png" alt="logo" />
                <div className="h-menu flexCenter">
                <Link to='res-wrap' smooth={true} duration={500} offset={0}><a href="">Residencies</a></Link>
                <Link to='v-wrap' smooth={true} duration={500} offset={0}><a href="">our value</a></Link>
                <Link to='cont-wrap' smooth={true} duration={500} offset={0}><a href="">contact us</a></Link>
                
                    
                  
                    <a href="">get started</a>
                    <button className='button' >
                    <a href="">contact</a>
                    </button>
                   
                </div>
            </div>

        </section>
    )
}
export default header;