/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import Photos from "./components/Photos";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Testimonials></Testimonials>
      <Photos></Photos>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </>
  );
}

export default App;
