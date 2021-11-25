import React from "react";
function Carousel()
{
    return(
        <>
        <div id="Humz" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#Humz" data-slide-to="0" class="active"></li>
        <li data-target="#Humz" data-slide-to="1"></li>
        <li data-target="#Humz" data-slide-to="2"></li>
        <li data-target="#Humz" data-slide-to="3"></li>
        <li data-target="#Humz" data-slide-to="4"></li>
          </ul>
      <div class="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.healthcareitnews.com/sites/hitn/files/120319%20CaroMont%20Regional%20Medical%20Center%20712.jpg" height="800" width="100%"/>
        </div>
        <div className="carousel-item">
          <img src="https://www.westend61.de/images/0000834558pw/doctor-standing-in-hospital-room-CAIF03282.jpg" height="800" width="100%"/>
        </div>
        <div className="carousel-item">
          <img src="https://www.seha.ae/assets/uploads/2021/04/CW_2504_FieldHospitals_14.jpg" height="800" width="100%"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/originals/75/d9/be/75d9be496ba5b2461c5e3fd20c9dae25.jpg" height="800" width="100%"/>
          </div>
          <div className="carousel-item">
          <img src="https://i.pinimg.com/originals/68/c1/ca/68c1caa8095d41bac0cea177b8701486.jpg" height="800" width="100%"/>
          </div>
      </div>
      <a className="carousel-control-prev" href="#Humz" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a className="carousel-control-next" href="#Humz" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    
    </div>
        </>
    );
}
export default Carousel