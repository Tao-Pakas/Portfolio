import './App.css'
import RecentProjects from './Projects/projects'
import Footer from './footer/footer'
import HeroSection from './Hero/hero'
import Nav from './navbar/nav'
import Service from './Services/services'
import AboutMe from './About/about'
import Tools from './Tools/tools'

function App() {
  
  return (
    <>
    <div className="body">
      <Nav/>
      <HeroSection/>
      <AboutMe/>
      <Service/>
      <Tools/>
      <RecentProjects/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
