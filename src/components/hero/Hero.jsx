import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import TypeEffect from "./TypeEffect";

const Hero = () => {



  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Himesh
            </span>
          </h1>

          <div className="flex justify-center mb-8 h-12 ">
            <h3 className="text-2xl md:text-3xl text-slate-300 flex items-center">
              <span className="mr-2">I am a</span>
              <span
                className="min-w-[220px] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 font-semibold inline-block text-left"
              >
                <TypeEffect />
              </span>
            </h3>
          </div>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly applications
            that solve real-world problems with clean, efficient code.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/himeshpanghal01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/himesh-panghal-165b982b2"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:himeshpanghal86@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;