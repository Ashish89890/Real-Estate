import React from "react";
import './value.css'

export default function value() {
    return (
        <section className="v-wrap">
            <div className="padding innerWidth flexCenter v-content">
                <div className="  v-left">
                    <div className=" img-contain">
                        <img src="value.png" alt="" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className="orangeText">Our value</span>
                    <span className="primaryText">Value we give to you</span>
                    <span className="secondaryText">
                        We are alaways ready to help you 
                        <br />
                        We believe a good place to live can make life better
                    </span>

                    <div className="faida">
                    <p className="primaryText munafa">Best Interest Rates In the Market</p>
                    <p className="primaryText munafa">Prevent Unstable prices</p>
                    <p className="primaryText munafa">Best price in the market</p>
                  
                    </div>
                </div>

            </div>
            
        </section>
    )
}