
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import { Grid } from "./components/Grid";
import { Projects } from "./components/projects";
import { Happyclients } from "./components/happyclients";
import Experience from "./components/Experience";

export default function Home() {
  return (
 <> <Navbar/>
  <Hero/>
  <div id="about">
  <Grid/> </div>
  <Projects/>
  <Happyclients/>
  <Experience/>

  </>
  );
}
