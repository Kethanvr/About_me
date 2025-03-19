import { FaFolder, FaChevronDown, FaJs, FaPython, FaDatabase } from 'react-icons/fa';

function Explorer() {
  return (
    <div className="w-64 bg-dark border-r border-gray-800 h-screen">
      <div className="p-4">
        <h2 className="text-sm uppercase text-gray-500 mb-2">EXPLORER</h2>
        <div>
          <div className="flex items-center gap-2 hover:bg-gray-800 px-4 py-1 cursor-pointer">
            <FaChevronDown />
            <FaFolder className="text-blue-400" />
            <span>Projects/</span>
          </div>
          <div className="flex items-center gap-2 hover:bg-gray-800 px-4 py-1 cursor-pointer pl-8">
            <FaChevronDown />
            <FaFolder className="text-yellow-400" />
            <span>Skills/</span>
          </div>
          <div className="pl-12">
            <div className="flex items-center gap-2 hover:bg-gray-800 px-4 py-1 cursor-pointer">
              <FaJs className="text-yellow-300" />
              <span>frontend.js</span>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-800 px-4 py-1 cursor-pointer">
              <FaPython className="text-blue-300" />
              <span>backend.py</span>
            </div>
            <div className="flex items-center gap-2 hover:bg-gray-800 px-4 py-1 cursor-pointer">
              <FaDatabase className="text-gray-400" />
              <span>database.sql</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explorer;