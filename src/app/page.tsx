
import Hero from "./components/Hero";
import { Happyclients } from "./components/happyclients";
import { About } from "./about/About";
import { Projects } from "./projects/projects";
import Experience from "./Experience/experience";


export default function Home() {
  return (
 <> 
  <Hero/>
  <div id="about">
  <About/>   </div>
  <Projects/>
  <Happyclients/>
  <Experience/>

  </>
  );
}
