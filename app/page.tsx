import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <section id="home" className="min-h-screen pt-40">
        Home
      </section>
      <section id="services" className="min-h-screen">
        Services
      </section>
      <section id="projects" className="min-h-screen">
        Projects
      </section>
    </div>
  );
}
