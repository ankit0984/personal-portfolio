import Landing from "@/app/app-component/Landing";
import Navbar from "@/app/app-component/Navbar";
import About from "./app-component/About";
import Skills from "./app-component/Skills";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <About/>
      <Skills/>

    </main>
  );
}
