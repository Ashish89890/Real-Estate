import "./res.css"
import { Swiper,SwiperSlide } from "swiper/react" ;
// import 'swiper/swiper-bundle.css';


//import data from '../../utils/slider.json'

export default function () {
    return (
        <section className="res-wrap">
            <div className="r-contain innerWidth paddings">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>
            </div>
            <div className="all   ">
            <div className="  prop  innerWidth " >
                <img className="pics" src="r1.png" alt="" />
                <div className="value flexColStart">
                    <span className="paisa">
                      <span style={{ color: "orange" }}>$</span>
                      <span>47,043</span>
                   </span>
                  <span className="Text3">Aliva Priva Jardin</span>
                </div> 

              
            </div>
            <div className="prop   innerWidth" >
                <img className="pics" src="r3.png" alt="" />
                <div className="value flexColStart">
                    <span className="paisa">
                      <span style={{ color: "orange" }}>$</span>
                      <span>66,353</span>
                   </span>
                  <span className="Text3">Assati Garden City</span>
                </div> 

              
              </div>
              <div className="prop   innerWidth" >
                <img src="r2.png" alt="" />
                <div className="value flexColStart">
                    <span className="paisa">
                      <span style={{ color: "orange" }}>$</span>
                      <span>35,853</span>
                   </span>
                  <span className="Text3">Citralan Puri Serang</span>
                </div> 

              
            </div>
            <div className="prop   innerWidth" >
                <img src="r1.png" alt="" />
                <div className="value flexColStart">
                    <span className="paisa">
                      <span style={{ color: "orange" }}>$</span>
                      <span>47,746</span>
                   </span>
                  <span className="Text3">Aliva Priva Jardin</span>
                </div> 

              
            </div>
            </div>
           
        </section>
    )
}