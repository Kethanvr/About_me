import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
  FaDownload,
} from "react-icons/fa";

const MediaGallery = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Preload images and get their dimensions
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageDimensions((prev) => ({
          ...prev,
          [index]: {
            width: img.width,
            height: img.height,
            aspectRatio: img.width / img.height,
          },
        }));
      };
    });
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDownload = (e, imageUrl, index) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = imageUrl;
    // Extract filename from the URL
    const filename = imageUrl.split("/").pop();
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getImageName = (imageUrl) => {
    const filename = imageUrl.split("/").pop();
    return filename.replace(/\.[^/.]+$/, "").replace(/-/g, " ");
  };

  const FullscreenView = () => {
    const dimensions = imageDimensions[currentIndex] || { width: 0, height: 0 };
    const isPortrait = dimensions.height > dimensions.width;
    const currentImageName = getImageName(images[currentIndex]);

    return (
      <motion.div
        className="fixed inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm flex justify-center items-center z-50"
        onClick={() => setIsFullscreen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className={`${
            isMobile ? "w-[90vw] h-[90vh]" : "w-[80vw] h-[80vh]"
          } bg-[rgb(23,23,23)] rounded-lg border border-[rgb(36,36,36)] shadow-lg flex flex-col relative overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.1, ease: "linear" }}
        >
          {/* Header */}
          <div className="w-full px-4 py-3 flex items-center justify-between border-b border-[rgb(36,36,36)] bg-[rgb(23,23,23)]">
            <div className="flex items-center gap-2">
              <span
                onClick={() => setIsFullscreen(false)}
                className="w-3 h-3 bg-red-500 rounded-full hover:cursor-pointer"
              ></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-gray-300 text-xs mt-0.5 ml-2 select-none">
                {currentImageName}
              </span>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Image Display */}
          <div className="flex-1 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={images[currentIndex]}
                  alt={currentImageName}
                  className={`${
                    isPortrait ? "h-[90%] w-auto" : "w-[90%] h-auto"
                  } object-contain`}
                />
                <button
                  onClick={(e) =>
                    handleDownload(e, images[currentIndex], currentIndex)
                  }
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  title="Download Image"
                >
                  <FaDownload size={20} />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <FaChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="h-20 bg-[rgb(23,23,23)] border-t border-[rgb(36,36,36)] p-2 overflow-x-auto">
            <div className="flex gap-2 h-full">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-full aspect-video rounded-md overflow-hidden border-2 transition-all ${
                    currentIndex === index
                      ? "border-blue-500 scale-105"
                      : "border-transparent hover:border-gray-600"
                  }`}
                >
                  <img
                    src={image}
                    alt={getImageName(image)}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-[90vw] h-[90vh] bg-[rgb(23,23,23)] rounded-lg border border-[rgb(36,36,36)] shadow-lg flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.1, ease: "linear" }}
      >
        {/* Header */}
        <div className="w-full px-4 py-3 flex items-center justify-between border-b border-[rgb(36,36,36)] bg-[rgb(23,23,23)]">
          <div className="flex items-center gap-2">
            <span
              onClick={onClose}
              className="w-3 h-3 bg-red-500 rounded-full hover:cursor-pointer"
            ></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-gray-300 text-xs mt-0.5 ml-2 select-none">
              Media Gallery
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Grid View */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => {
              const dimensions = imageDimensions[index] || { aspectRatio: 1 };
              const imageName = getImageName(image);
              return (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    if (isMobile) {
                      setCurrentIndex(index);
                      setIsFullscreen(true);
                    }
                  }}
                >
                  <div
                    className="relative rounded-lg overflow-hidden bg-[rgb(30,30,30)]"
                    style={{
                      aspectRatio: dimensions.aspectRatio || 1,
                    }}
                  >
                    <img
                      src={image}
                      alt={imageName}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {isMobile ? (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <FaExpand className="text-white text-2xl" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                          onClick={(e) => handleDownload(e, image, index)}
                          className="p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                          title={`Download ${imageName}`}
                        >
                          <FaDownload size={24} />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {Math.round(dimensions.width || 0)}x
                    {Math.round(dimensions.height || 0)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Fullscreen View */}
      <AnimatePresence>{isFullscreen && <FullscreenView />}</AnimatePresence>
    </motion.div>
  );
};

export default MediaGallery;
