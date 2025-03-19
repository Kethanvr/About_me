import React, { useEffect } from "react";
import { motion } from "framer-motion";
import resumePDF from "../assets/Kethan_VR_Resume_Pro.pdf";
import { FiDownload } from "react-icons/fi";

const ResumePopUp = ({ onClose }) => {

    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "auto";
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <motion.div
            className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm flex justify-center items-center z-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="w-[90vw] h-[75vh] md:w-[60vw] md:h-[90vh] bg-[rgb(23,23,23)] rounded-lg border border-[rgb(36,36,36)] shadow-lg flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.1, ease: "linear" }}
            >
                {/* Header */}
                <div className="w-full px-4 py-3 flex items-center justify-between gap-3 border-b border-[rgb(36,36,36)] bg-[rgb(23,23,23)] text-white text-xs font-medium">
                    <div className="flex items-center gap-2">
                        <span onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full hover:cursor-pointer"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="text-gray-300 text-xs mt-0.5 ml-2 select-none">Resume.pdf</span>
                    </div>
                    <a href={resumePDF} download="Kethan_VR_Resume_Pro.pdf">
                        <FiDownload size={17} className="mr-2 text-gray-100 hover:cursor-pointer hover:text-white hover:font-bold" />
                    </a>
                </div>

                {/* PDF Display */}
                <div className="flex-1">
                    <iframe src={`${resumePDF}#toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf" className="w-full h-full" />
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ResumePopUp;
