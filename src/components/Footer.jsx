import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.2)] mt-18 md:mt-auto py-6">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4 text-gray-300 text-center">

        {/* Main Text */}
        <div className="w-[95%] border-b border-[rgba(255,255,255,0.2)] pb-6 text-sm md:text-base sm:text-sm">
          Have an exciting idea? Let’s build something awesome together!! 🚀
        </div>

        {/* Social Links & Made With Section */}
        <div className="w-[95%] flex flex-col-reverse md:flex-row justify-between items-center py-4 gap-4 text-base md:text-sm sm:text-xs">

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Kethanvr"
              className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kethan-vr-433ab532b/"
              className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:kethan.ise24@cmrit.ac.in"
              className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href="https://x.com/VrKethan"
              className="text-[rgb(106,106,106)] hover:text-[rgb(125,125,125)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={18} />
            </a>
          </div>

          {/* Made With */}
          <div className="flex items-center space-x-2 text-[rgb(106,106,106)] whitespace-nowrap sm:p-5 text-xs md:text-sm">
            <span className="text-[rgb(85,159,255)]">const</span>
            <span>
              madeWith = &#91;
              '<FaHeart className="inline text-red-500 text-sm sm:text-base" />', 
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
