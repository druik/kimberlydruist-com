import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Thinking } from "@/components/Thinking";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Header />
        <About />
        <Work />
        <Thinking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
