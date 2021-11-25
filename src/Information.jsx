import React from "react";
import Untitled from "./Untitled.png"
function Information()
{
    return(
        <>
        <h1>hello</h1>
 <p id="s1">huzmzmaa</p>
 <p style={{backgroundColor:'yellow',color:'indigo',FontSize:'100px'}}>humza</p>
 <img src="https://www.lockheedmartin.com/content/dam/lockheed-martin/space/photo/exploration/Earth_Moon_Mars.jpg.pc-adaptive.full.medium.jpeg"></img>
  <h1>1. Speak up!</h1>
  <p id="s2">What’s the single biggest way you can make an impact on global climate change?
     “Talk to your friends and family, and make sure your representatives are making 
     good decisions,” Haq says. By voicing your concerns—via social media or, better yet,
      directly to your elected officials—you send a message that you care about the warming world.
       Encourage Congress to enact new laws that limit carbon emissions and require polluters to pay
        for the emissions they produce. “The main reason elected officials do anything difficult is 
        because their constituents make them,” Haq says. You can help protect public lands, stop offshore
         drilling, and more here.</p>
         <h1>Power your home with renewable energy.</h1>
           <p id="s3">Choose a utility company that generates at least half its power from
              wind or solar and has been certified by Green-e Energy, an organization
              that vets renewable energy options. If that isn’t possible for you, take 
              a look at your electric bill; many utilities now list other ways to support
               renewable sources on their monthly statements and websites.</p>
               <h1>Weatherize, weatherize, weatherize.</h1>
               <p id="s4"v>“Building heating and cooling are among the biggest uses of energy,” 
                 Haq says. Indeed, heating and air-conditioning account for almost half 
                 of home energy use. You can make your space more energy efficient by 
                 sealing drafts and ensuring it’s adequately insulated. You can also claim 
                 federal tax credits for many energy-efficiency home improvements.</p>
                 <h1>4. Invest in energy-efficient appliances.</h1>
                 <p id="s5">Since they were first implemented nationally in 1987, efficiency standards
                    for dozens of appliances and products have kept 2.3 billion tons of carbon
                     dioxide out of the air. That’s about the same amount as the annual carbon
                      pollution coughed up by nearly 440 million cars. “Energy efficiency is the
                       lowest-cost way to reduce emissions,” Haq says. When shopping for refrigerators
                       , washing machines, and other appliances, look for the Energy Star label. It will
                        tell you which are the most efficient.</p>
    <br/>
    
        <button type="button" className="btn btn-primary" data-toggle="tooltip" title="hooray!!!">Click me</button>
       <a href="#" data-toggle="tooltip" title="hooray!!!">
         <img src={Untitled}/>
       </a>
             
        </>
    );
}

export default Information;