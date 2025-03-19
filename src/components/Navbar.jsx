import { useState, useEffect } from "react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollThreshold = 5;


  const scrollToSection = (id) => {
    /* const offsets = {
      home: 0,
      about: 80,
      skills: 20,
      projects: 100,
      learningpath: 60,
      contact: 30,
    }; */
    const isMobile = window.innerWidth < 768;

    const offsets = {
      home: isMobile ? 40 : 0,
      about: isMobile ? 100 : 80,
      skills: isMobile ? 10 : 20,
      projects: isMobile ? 20 : 100,
      learningpath: isMobile ? 40 : 60,
      contact: isMobile ? 65 : 30,
    };

    const element = document.getElementById(id);
    if (element) {
      const offset = offsets[id] || 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + scrollThreshold) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-[rgb(24,24,24)] z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div className="text-gray-400 hover:text-gray-300 transition-colors">
              <a href="./">
                <span>~/</span>
                <span className="text-gray-300">prateek</span>
                <span>/portfolio</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {["Home", "About", "Skills", "Projects", "learningPath", "Contact"].map((id) => (
                <span
                  key={id}
                  className="text-gray-400 hover:text-gray-200 hover:lowercase transition-all-700 cursor-pointer capitalize"
                  onClick={() => scrollToSection(id.toLowerCase())}
                >
                  {id}
                </span>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-400 focus:outline-none font-extralight text-2xl transition-transform duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[rgb(24,24,24)] py-4 px-6">
            {["Home", "About", "Skills", "Projects", "LearningPath", "Contact"].map((id) => (
              <span
                key={id}
                className="block py-2 px-3 text-gray-400 hover:text-gray-200 hover:lowercase font-extralight transition-all cursor-pointer"
                onClick={() => scrollToSection(id.toLowerCase())}
              >
                {id}
              </span>
            ))}
          </div>
        )}
      </nav>

      {/* Scroll Progress Bar */}
      <div
        className={`fixed left-0 w-full z-50 bg-[rgb(41,41,41)] transition-all duration-300 ${isVisible ? "top-[56px]" : "top-0"}`}
      >
        <div
          className="h-[1px] bg-[rgba(85,159,255,0.9)] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
