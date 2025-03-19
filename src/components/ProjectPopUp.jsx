import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ProjectPopUp = ({ content, onClose }) => {
    if (!content) return null;

    const isWebsite = content.startsWith("http");
    const isImage = content.match(/\.(jpeg|jpg|png|gif)$/i);
    const isPDF = content.match(/\.pdf$/i);
    const isGitHubRepo = /^https:\/\/github\.com\/[\w-]+\/[\w-]+\/?$/.test(content); // Checks for GitHub repo URL

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
                className="w-[75vw] h-[75vh] bg-[rgb(23,23,23)] rounded-lg border border-[rgb(36,36,36)] shadow-lg flex flex-col relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.1, ease: "linear" }}
            >
                {/* Header */}
                <div className="w-full px-4 py-3 flex items-center gap-3 border-b border-[rgb(36,36,36)] bg-[rgb(23,23,23)] text-white text-xs font-medium">
                    <div className="flex items-center space-x-2">
                        <span onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full hover:cursor-pointer"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-xs mt-0.5 ml-2 select-none">Preview.js</span>
                    {isWebsite && !isGitHubRepo && (
                        <a href={content} target="_blank" className="ml-auto cursor-pointer text-gray-300 hover:text-gray-100 text-xs font-medium hover:underline underline-offset-3">
                            Visit Website →
                        </a>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 flex justify-center items-center bg-[rgb(23,23,23)]">
                    {isImage ? (
                        <img src={content} alt="Popup" className="max-w-full max-h-full object-contain" />
                    ) : isPDF ? (
                        <embed src={content} type="application/pdf" className="w-full h-full" />
                    ) : isWebsite && !isGitHubRepo ? (
                        <div className="w-[90%] h-[95%] bg-[rgb(36,36,36)] rounded-md border border-[rgb(45,45,45)] overflow-hidden">
                            <iframe src={content} title="Webpage" className="w-full h-full border-none" style={{ aspectRatio: "16/9" }} />
                        </div>
                    ) : isGitHubRepo ? (
                        <div className="text-gray-400 text-center flex flex-col items-center">
                            <p className="text-lg">📂 GitHub Repository Preview</p>
                            <p className="text-sm text-gray-500 mt-1">View the source code on GitHub.</p>
                            <a
                                href={content}
                                target="_blank"
                                className="mt-3 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
                            >
                                Open Repository →
                            </a>
                        </div>
                    ) : (
                        <div className="text-gray-400 text-center flex flex-col items-center">
                            <p className="text-lg">🔍 Preview Not Available</p>
                            <p className="text-sm text-gray-500 mt-1">
                                Check the project on <a href="https://github.com/Kethanvr" className="text-blue-400 hover:underline">GitHub</a> instead.
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectPopUp;
