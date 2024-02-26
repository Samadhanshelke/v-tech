import About from "../components/HomePage/About"
import Expertise from "../components/HomePage/Expertise"
import Footer from "../components/HomePage/Footer"

import Hero from "../components/HomePage/Hero"
import KnowMore from "../components/HomePage/KnowMore"
import OurGoal from "../components/HomePage/OurGoal"
import WhatWe from "../components/HomePage/WhatWe"

function HomePage() {
  return (
    <div>

            <Hero/>
            <WhatWe/>
            <About/>
            <KnowMore/>
            <OurGoal/>
            <Expertise/>
            <Footer/>
            
    </div>
  )
}

export default HomePage