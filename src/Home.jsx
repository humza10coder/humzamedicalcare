import React from "react";
import Carousel from "./Carousel";
import Doc from "./Doc";
import Grid from "./Grid";
import Navbar from "./Navbar";
function Home()
{
    return(
        <>
         <Navbar/>
         <Carousel/>
         <Grid/>
         <Doc/>        
         </>
    );
}
export default Home;