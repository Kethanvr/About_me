import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full my-5 bg-[rgb(38,38,38)] px-4 sm:px-10 py-20"
    >
      {/* File Tab */}
      <div className="w-full border-b border-[#474747] flex items-center mb-6 hover:cursor-pointer">
        <div className="px-4 py-2 bg-[rgb(64,64,64)] border border-[#373737] flex items-center space-x-4 group">
          <span className="text-[#d8d8d8] text-xs sm:text-sm font-extralight">about.jsx</span>
          <div className="w-2 h-2 rounded-full bg-[rgb(115,115,115)] group-hover:bg-transparent relative flex items-center justify-center transition-all">
            <span className="hidden group-hover:block text-[14px] text-[#d8d8d8] absolute">×</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="bg-[rgb(23,23,23)] space-y-5 px-5 sm:px-10 py-7 rounded-tl-xl rounded-br-xl">
        <div className="space-y-3">
          {/* About Me Section */}
          <p className="text-[rgb(133,132,132)] text-xs sm:text-sm leading-relaxed">
            /** <span className="font-bold">About Me</span> - Passionate developer crafting clean code and efficient solutions!! */
          </p>

          {/* Developer Object */}
          <p className="text-xs sm:text-sm">
            <span className="text-[rgb(205,112,255)]">const</span> <span className="text-[rgb(112,192,255)]">developer</span> = &#123;
          </p>
          <div className="ml-5 space-y-2 text-xs sm:text-sm">
            <p><span className="text-[rgb(9,194,102)]">name:</span> <span className="text-[rgb(248,138,0)]">'Prateek Bisht'</span>,</p>
            <p><span className="text-[rgb(9,194,102)]">title:</span> <span className="text-[rgb(248,138,0)]">'Full Stack Developer'</span>,</p>
            <p><span className="text-[rgb(9,194,102)]">skills:</span> <span className="text-[rgb(248,138,0)]">[ 'JavaScript', 'React', 'Java', 'Python' ]</span>,</p>
            <p><span className="text-[rgb(9,194,102)]">description:</span> <span className="text-[rgb(248,138,0)]">`</span></p>
            <p className="ml-5 text-[rgb(190,190,190)]">
              Turning ideas into functional, elegant code. I specialize in crafting seamless web solutions with a deep passion for clean architecture, efficiency, and user experience!!
            </p>
            <p className="text-[rgb(248,138,0)]">`</p>
            <p><span className="text-[rgb(9,194,102)]">education:</span> <span className="text-[rgb(248,138,0)]">'Computer Science Engineering, GGSIPU, 2022-2026'</span>,</p>
          </div>
          <p className="text-xs sm:text-sm">&#125;;</p>
        </div>

        {/* Stats Section - Always Horizontal */}
        <div className="bg-[rgb(38,38,38)] rounded-lg p-5 border border-[rgb(61,61,61)] hover:border-[hsl(0,1%,31%)] transition-colors flex flex-row justify-evenly gap-8">
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg sm:text-2xl font-medium text-[rgb(85,159,255)]">9+</span>
            <span className="text-xs text-gray-400 sm:hidden">Projects</span>
            <span className="hidden sm:block text-xs sm:text-sm text-gray-400">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg sm:text-2xl font-medium text-[rgb(85,159,255)]">100%</span>
            <span className="text-xs text-gray-400 sm:hidden">Efficiency</span>
            <span className="hidden sm:block text-xs sm:text-sm text-gray-400">Efficient Work</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg sm:text-2xl font-medium text-[rgb(85,159,255)]">24/7</span>
            <span className="text-xs text-gray-400 sm:hidden">Active</span>
            <span className="hidden sm:block text-xs sm:text-sm text-gray-400">Development Mode</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
