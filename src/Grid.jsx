import React from "react";
function Grid()
{
    return(
         <>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>

            <div className="container">

            <div className="row">
                <div className="col-sm-4">
                 <h2>TOGETHER FOR HEALTH</h2>
                 <br/>
                 <br/>
                 Humza Medical Centre
                        <p>
                        HMC has been providing first class health care services to 
                        the UAE community. We combine highly qualified specialist 
                        care and modern equipment with personalized service to 
                        ensure that our values remain high and our medical 
                        treatment is second to none.
                        </p>
                        <p>
                        Humza Medical Centre was born out of a desire to provide cost-effective
                        yet specialized and superior quality healthcare services to the growing
                        population of the of Abu Dhabi.
                        </p>
                        <hr/>
                        <h2>Services</h2>
                        <ul>
                            <li>Internal Medicine</li>
                            <li>General Medicine</li>
                            <li>Dentistry</li>
                            <li>Laboratory</li>
                        </ul>
                </div>
                <div className="col-sm-4 text-center" style={{width:"250px"}}>
                       <img src="https://www.apollogulf.com/images/mission-800x600.png" height="200" width="200"/> 
                       <p>We make every effort to provide this service in <br/> friendly, caring, professional environment. 
                       We<br/> have a "duty of care" to attend cases quickly as <br/> possible.</p>
                </div>
                <div className="col-sm-4 text-center" style={{width:"250px"}}>
                <img src="https://www.apollogulf.com/images/vision-800x600.png" height="200" width="200"/>
                  <p>We continually strive to implement services,<br/> which will result in having access 
                  to a locally-<br/>based, seamless system of primary and specialty<br/> care.</p>
                   </div>
            </div>
            </div>
            <br/><br/>
        <div className="container">
            <div className="card-deck">
                <div className="card">
                    <div className="card-body text-center">
                        <form method="post" style={{backgroundColor:"orangered"}}>
                            <div className="form-group">
                                <input type="text" className="from-control" placeholder="First Name"/>
                                
                            </div>


                            <div className="form-group">
                            <input type="text" className="from-control" placeholder="Last Name"/>
                            </div>


                            <div className="form-group">
                                <input type="number" className="from-control" placeholder="Phone"/>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <select className="form-contol">
                                    <option>Internal Medicine and Diabetologist</option>
                                    <option>General Medicine</option>
                                    <option>General Dentistry</option>
                                    <option>Orthodontics</option>
                                    <option>Conservative Dentistry and Endodontics</option>
                                    <option>Laboratory</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea rows="5"></textarea>
                            </div>
                            <button type="submit" style={{color:"orange",backgroundColor:"white",height:"50px",width:"200px",borderRadius:"100px"}}>Make appointment</button>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                      <h1>Fill in the form for Appointment with our doctors.</h1>
                      <h5>Teleconsultations also available</h5>
                      <p>Send us your request online and our staffs will be contacting you as soon as<br/> possible for the appointment. Hope to hear from you soon<br/>.Please provide your correct Email id and Phone number</p>
                         <hr></hr>
                         <div className="row">
                             <div className="col-sm-4">
                                <img src="https://thumbs.gfycat.com/ClassicOrderlyJenny-max-1mb.gif" height="100" width="100"/>
                                <p>Appointment</p>
                             </div>
                             <div className="col-sm-4">
                                <img src="https://www.pngitem.com/pimgs/m/332-3322651_doctor-gif-animated-hd-png-download.png" height="100" width="100"/>
                             <p>Select Doctor</p>
                             </div>
                             <div className="col-sm-4">
                                <img src="https://img1.picmix.com/output/stamp/normal/3/6/3/8/1148363_ba7e3.gif" height="100" width="100"/>
                                <p>Consultation</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
         </>
    );
}
export default Grid;