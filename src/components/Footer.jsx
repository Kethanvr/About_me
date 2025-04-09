import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.2)] mt-10 md:mt-18 py-4 md:py-6">
      <div className="container mx-auto px-3 md:px-4 flex flex-col items-center space-y-3 md:space-y-4 text-gray-300 text-center">

        {/* Main Text */}
        <div className="w-[95%] border-b border-[rgba(255,255,255,0.2)] pb-4 md:pb-6 text-xs md:text-sm lg:text-base">
          Have an exciting idea? Let's build something awesome together!! 🚀
        </div>

        {/* Social Links & Made With Section */}
        <div className="w-full md:w-[95%] flex flex-col md:flex-row justify-between items-center py-2 md:py-4 gap-3 md:gap-4">

          {/* Social Icons */}
          <div className="flex space-x-5 md:space-x-6 mb-3 md:mb-0">
            <a
              href="https://github.com/Kethanvr"
              className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={16} className="md:text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/kethan-vr-433ab532b/"
              className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={16} className="md:text-lg" />
            </a>
            <a
              href="mailto:kethan.ise24@cmrit.ac.in"
              className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={16} className="md:text-lg" />
            </a>
            <a
              href="https://x.com/VrKethan"
              className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={16} className="md:text-lg" />
            </a>
          </div>

          {/* Made With */}
          <div className="flex items-center space-x-1 md:space-x-2 text-[rgb(106,106,106)] whitespace-nowrap px-2 py-1 text-xs md:text-sm">
            <span className="text-[rgb(85,159,255)]">const</span>
            <span>
              madeWith = &#91;
              '<FaHeart className="inline text-red-500 text-xs md:text-sm" />', 
              'Code', 'Coffee'
              &#93;;
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
