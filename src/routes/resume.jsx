import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/vamshi_resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set the workerSrc to the correct path for pdfjs-dist version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="z-20 flex flex-col items-center py-10 bg-gray-100 dark:bg-gray-900">
      <div className="mb-6 flex items-center justify-center rounded-xl
          dark:bg-purple-800 text-3xl hover:dark:bg-purple-700 hover:bg-purple-400 bg-purple-300 dark:text-gray-200 text-gray-600 border-2 dark:border-gray-200 border-gray-600">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className=" px-6 py-3 rounded-md  flex items-center space-x-2"
        >
          <AiOutlineDownload className=""/>
          <span>Download CV</span>
        </a>
      </div>

      <div className="flex justify-center bg-white shadow-lg p-4">
        <Document file={pdf} className="flex justify-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      <div className="mt-6 flex items-center justify-center  rounded-xl
          dark:bg-purple-800 text-3xl hover:dark:bg-purple-700 hover:bg-purple-400 bg-purple-300 dark:text-gray-200 text-gray-600 border-2 dark:border-gray-200 border-gray-600">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className=" px-6 py-3 rounded-md  flex items-center space-x-2"
        >
          <AiOutlineDownload className="" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
}

export default Resume;
