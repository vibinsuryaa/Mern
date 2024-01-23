import React from "react";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import "../App.css";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home1() {
  return (
    
<div> 
  <div> <Navbar1/> </div>
<div> <Carousal/> </div>
<div className='m-3'> 
  <Card/>
  </div>

<div> <Footer/> </div>
</div>
  )
}

