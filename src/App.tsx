import "./App.css";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";

function App() {
  return (
    <>
      <body className="bg-background">
        <Header />
        <main id="content">
          <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
            <Hero />
            <Project />
            <Testimonial />
            <Skill />
            <Work />
            <Education />
            <Contact />
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
}

export default App;
