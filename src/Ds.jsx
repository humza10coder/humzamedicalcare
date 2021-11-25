import React from "react"
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Ismail from "./ismail.JPG"
function Ds()
{
    return(
           <>
            <Navbar/>
            <Carousel/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
            <div class="card-deck">
                <div class="card">
                    <div class="card-body text-center">
                      <img src="https://www.apollogulf.com/slider/slider-0.jpg" height="500" width="501"/>
                      <p>Internal Medicine department deals with adult patients to prevent or manage general adult
                       illnesses, specific diseases, and chronic conditions. Our doctors are internationally trained
                        with vast experience in premium hospitals in UK and India and are well equipped with the
                         knowledge and experience to deal with whatever conditions our patient's common or rare, 
                         simple or complex condition and help to arrive at proper diagnosis quickly and treat the 
                         condition as per international standards.</p>
                         <br/>
                         <br/>
                         <p>Most of the patients with diabetes who found it very difficult previously to control their
                          blood sugars have experienced their target achieving very easily with our treatment with proper
                           treatment tailored to each patient's needs. We are experts in dealing with chronic medical
                            conditions including, but not limited to Diabetes, Hypertension, Fatty liver, medical management
                             of Heart Disease, Asthma and Respiratory disorders. We also offer executive & annual health check 
                             ups at affordable costs.</p>
                             <br/>
                             <br/>
                             <p>Our diabetic patients receive periodic dental checkups free of cost even if their insurance cards
                              do not cover these specialties which are part of the comprehensive diabetes care. We also provide
                               laboratory services including routine and specialized blood and urine tests, RTPCR for Covid 19 ,
                                other routine tests like ECG and Spirometry</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body text-center">
                      <h1>Our specialist</h1>
                      <img src={Ismail} height="500" width="500"/>
                      <h1>Dr. Ismail</h1>
                      <p>MBBS, MD (Internal Medicine), MRCP (UK)</p>
                      <hr></hr>
                      <p>Fellowship in Diabetes (Royal Liverpool Academy (UK)</p>
                      <hr></hr>
                      <p>Certified in Diabetes Management Course (Harvard Medical School, USA)</p>
                      <hr></hr>
                      <p>Specialist Internal Medicine & Managing Director)</p>
                      <hr></hr>
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
 export default Ds