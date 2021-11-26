import React from "react";
import Ismail from "./ismail.JPG";
import Humza from "./humza.jpg";
import Aliya from "./Aliya.JPG";
import Avinash from "./Avinash.jpg";
import Haarith from "./Haarith.jpg";
import Geethi from "./Geethi Puthiyatath.png";
function Doctors()
{
    return(
        <>
        <div className="container">
            <div className="card-deck">
                <div className="card">
                    <div className="card-body text-center">
                    <img src={Ismail} height="300" width="300"/>
                    <p>Internal Medicine & Diabetology<br/>
                    Dr. Ismail Jani<br/>
                    MD (Internal Medicine)</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                    <img src={Aliya} height="300" width="300"/>
                    <p> General Dentistry<br/>
                        Dr. Aliya Begum<br/>
                        BDS</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                    <img src={Humza} height="300" width="300"/>
                    <p>
                    General Medicine<br/>
                    Dr. Moahammad Humza<br/>
                    MBBS
                    </p>
                    </div>
                </div>
    
            </div>
            <br/><br/>
            <div className="card-deck">
                <div className="card">
                    <div className="card-body text-center">
                    <img src={Geethi} height="300" width="300"/>
                    <p>
                    General Dentistry<br/>
                    Dr. Geethi Puthiyatath<br/>
                    BDS
                    </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                    <img src={Avinash} height="300" width="300"/>
                    <p>
                    General Medicine<br/>
                    Dr.Avinash Patel<br/>
                    MBBS
                    </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                    <img src={Haarith} height="300" width="300"/>
                    <p>
                    General Dentistry<br/>
                    Dr. Moahammad Haarith<br/>
                    BDS

                    </p>
                    </div>
                </div>
    
            </div>
        </div>
        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
            <div className="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.2098818728166!2d55.408435510954845!3d25.182649311738007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x78ea9a86e15f194c!2sAsma%20Residence!5e1!3m2!1sen!2sae!4v1636696470712!5m2!1sen!2sae" width="100%" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </>
    );
}
export default Doctors;