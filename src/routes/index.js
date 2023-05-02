import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Main'
import Footer from '../components/Footer/Main'
import Home from '../components/Home/Main'
import HomeTwo from '../components/HomeTwo/Main'
import HomeThree from '../components/HomeThree/Main'
import AboutUs from '../components/AboutUs/Main'
import Service from '../components/Service/Main'
import ServiceDetails from '../components/Service/ServiceDetails/Main'
import Gallery from '../components/Pages/Gallery/Main'
import Pricing from '../components/Pages/Pricing/Main'
import Faq from '../components/Pages/Faq/Main'
import Team from '../components/Pages/Team/Main'
import TeamDetails from '../components/Pages/TeamDetails/Main'
import TeamDetails2 from '../components/Pages/TeamDetails/Main2'
import TeamDetails3 from '../components/Pages/TeamDetails/Main3'
import TeamDetails4 from '../components/Pages/TeamDetails/Main4'
import TeamDetails5 from '../components/Pages/TeamDetails/Main5'
import TeamDetails6 from '../components/Pages/TeamDetails/Main6'
import TeamDetails7 from '../components/Pages/TeamDetails/Main7'
import TeamDetails8 from '../components/Pages/TeamDetails/Main8'
import TeamDetails9 from '../components/Pages/TeamDetails/Main9'
import TeamDetails10 from '../components/Pages/TeamDetails/Main10'
import TeamDetails11 from '../components/Pages/TeamDetails/Main11'
import TeamDetails12 from '../components/Pages/TeamDetails/Main12'
import TeamDetails13 from '../components/Pages/TeamDetails/Main13'
import TeamDetails14 from '../components/Pages/TeamDetails/Main14'
import Shop from '../components/Pages/Shop/Main'
import ShopDetails from '../components/Pages/ShopDetails/Main'
import Blog from '../components/BlogMain/Blog/Main'
import BlogDetails from '../components/BlogMain/BlogDetails/Main'
import Contact from '../components/Contact/Main'


const Routing = () => {

  const [homepage, sethomepage] = useState(false)

  const location = useLocation();
  const path = location.pathname
  useEffect(() => {
    if (location.pathname === "/home-three") {
      sethomepage(false)
    } else {
      sethomepage(true)
    }
  }, [location])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return (
    <>
      {homepage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details" element={<TeamDetails />} />
        <Route path="/team-details2" element={<TeamDetails2 />} />
        <Route path="/team-details3" element={<TeamDetails3 />} />
        <Route path="/team-details4" element={<TeamDetails4 />} />
        <Route path="/team-details5" element={<TeamDetails5 />} />
        <Route path="/team-details6" element={<TeamDetails6 />} />
        <Route path="/team-details7" element={<TeamDetails7 />} />
        <Route path="/team-details8" element={<TeamDetails8/>} />
        <Route path="/team-details9" element={<TeamDetails9 />} />
        <Route path="/team-details10" element={<TeamDetails10 />} />
        <Route path="/team-details11" element={<TeamDetails11 />} />
        <Route path="/team-details12" element={<TeamDetails12 />} />
        <Route path="/team-details13" element={<TeamDetails13 />} />
        <Route path="/team-details14" element={<TeamDetails14 />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </>
  )
}

export default Routing