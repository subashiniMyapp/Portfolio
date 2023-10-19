import Header from "./apps/components/Header"
import Portfolio from "./apps/components/Portfolio"
import Profile from "./apps/components/Profile"
import { About } from "./apps/components/About"
import { Experience } from "./apps/components/Experience"
import { Education } from "./apps/components/Education"
import { Footer } from "./apps/components/Footer"

function App() {
  return(
    <main>
      <Header/>
      <Profile/>
       <Portfolio/>
       <About/>
        <Experience/>
        <Education/>
        <Footer/>
    </main>
  )
}

export default App
