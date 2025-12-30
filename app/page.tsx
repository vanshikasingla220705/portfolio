import About from "@/components/about";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Platforms from "@/components/platforms";
import Projects from "@/components/projects";
import Sectiondivider from "@/components/Sectiondivider"
import Skills from "@/components/skills";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <Sectiondivider/>
      <About/>
      <Projects/>
      <Achievements/>
      <Skills/>
      <Platforms/>
      <Education/>
      <Contact/>
    </main>
  )
}
