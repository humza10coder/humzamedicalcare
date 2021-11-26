import React from "react";
function Contact()
{
    return(
        <>
        <div className="container">
        <div className="card-deck">
        <div className="card">
            <div className="card-body text-center">
            <h1>Contact Our <span style={{color:"orangered"}}>Support Team</span></h1>
            <form method="post" className="was-validated">
                <div className="form-group">
                    <label for="name">Name: </label>
                    <input type="text" name="name" className="form-control" placeholder="Enter your name" required/>
                    <div className="valid-feedback">Valid Entry</div>
                    <div className="invalid-feedback">Please enter your name</div>
                </div>
                <div className="form-group">
                    <label for="EMAIL">Email: </label>
                    <input type="email" name="EMAIL" className="form-control" placeholder="Enter your email here" required/>
                    <div className="valid-feedback">Valid Email</div>
                    <div className="invalid-feedback">Please enter your email</div>
                </div>

                <div className="form-group">
                    <label for="pn">Phone: </label>
                    <input type="number" name="pn" className="form-control" placeholder="Enter your phone here" required/>
                    <div className="valid-feedback">Valid</div>
                    <div className="invalid-feedback">Please correct phone number</div>
                </div>

                <div className="form-group">
                    <label for="req">Your requirements: </label>
                    <textarea rows="5" name="req" className="form-control" placeholder="Enter your requirements here" required/>
                    <div className="valid-feedback">Valid entry</div>
                    <div className="invalid-feedback">Please enter your requirements here</div>
                </div>
                <button type="submit" className="btn btn-outline-success">Submit</button>
            </form>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
            <img src="https://thumbs.gfycat.com/EnchantingFinishedAplomadofalcon-max-1mb.gif" height="50" width="50"/><span>Locations</span>
                      <p>1 floor,Asma residence,Warqa first street,Dubai</p>
            <br/>
            
            <img src="https://i.pinimg.com/originals/e5/2e/c2/e52ec24f8b7c18ae8eafc24a4b9bbba6.gif" height="100" width="100"/><span>Make a Call</span>
                <p>
                    +971 0528766524<br/>
                    EXT: 102 & 115<br/>

                    +971 558763501<br/>
                </p>
            <br/>
               
            <img src="https://support.politemail.com/hc/article_attachments/360041744473/giphy7.gif" height="150" width="150"/><span>Send a Mail</span>
           <p>humza16201449@credencehighschool.com</p>
           <br/>
           
           <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Clock.gif" height="50" width="50"/><span>Opening Hours</span>
           <p>
            7:00 AM to 9:00 PM<br/>
            7 days a week
           </p>
            </div>
            </div>
            </div>
            </div>
          <br/>
          <div className="container">
              <h2>Humza Pharmacy</h2>
              <p>Address: 105 Asma Residence, Warqa first Street, Dubai<br/>
                 Phone: +971 0528766524
              </p>
          </div>
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
export default Contact;