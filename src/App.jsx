import { BrowserRouter } from "react-router-dom"

import {About,Client, Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas,Portfolio,Freelance,WhatsAppButton} from './components'



const App=()=> {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Client/>
        <Portfolio/>
        <Freelance/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      <WhatsAppButton /> 
      </div>

    </BrowserRouter>
    )
}

export default App
