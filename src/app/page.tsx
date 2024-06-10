import Hero from "./(components)/Hero";
import MyProjects from "./(components)/MyProjects";
import AboutMe from "./(components)/AboutMe";
import Contact from "./(components)/Contact";
import Footer from "./(components)/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <MyProjects/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </main>
  );
}
