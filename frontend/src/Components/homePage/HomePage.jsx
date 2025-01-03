import Navbar from "../Navbar/Navbar";
import Contact from "../contact/Contact";
import About from "../about/About";
import Home from "../home/Home";
import Portfolio from "../portfolio/Portfolio";
import Certificate from "../certificate/Certificate"
export const HomePage = () => {
  return (
    <div>
     
      <Navbar />
      <section id="home">
        <Home />
      </section>
       <section id="about">
        <About />
      </section>
       <section id="certificate">
        <Certificate/>
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      
      
      
     
    </div>
  );
};
