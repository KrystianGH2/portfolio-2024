import Hero from "./(components)/Hero";
import MyProjects from "./(components)/MyProjects";

export default function Home() {
  return (
    <main className="flex flex-col-reverse">
      <MyProjects/>
      <Hero />
    </main>
  );
}
