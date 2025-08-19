// src/components/sections/Hero.jsx
import React from "react";
import { Download, Mail } from "lucide-react";
import Button from "../ui/Button";
import { personalInfo } from "../../data/personalInfo";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl text-blue-400 font-medium animate-fade-in">
                {personalInfo.subtitle}
              </h3>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up">
                I'm {personalInfo.name}{" "}
                <span className="text-blue-400">&lt;</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.title}
                </span>
                <span className="text-purple-400">&gt;</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl animate-fade-in-up delay-200">
                {personalInfo.bio}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#contact")}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Hire Me
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src="/images/hero-main-image.png"
                  alt="Brijesh - Frontend Developer"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl animate-fade-in-up"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80 animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-80 animate-bounce delay-2000"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-60 animate-bounce delay-500"></div>

              {/* Background Shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out;
  }

  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-500 { animation-delay: 500ms; }
  .delay-1000 { animation-delay: 1000ms; }
  .delay-2000 { animation-delay: 2000ms; }
`}</style>
    </section>
  );
};

export default Hero;
