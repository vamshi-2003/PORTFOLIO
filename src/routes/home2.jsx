import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/vamshi_resume.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set the workerSrc directly from the module
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      <div className="mb-6">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center space-x-2"
        >
          <AiOutlineDownload />
          <span>Download CV</span>
        </a>
      </div>

      <div className="flex justify-center bg-white shadow-lg p-4">
        <Document file={pdf} className="flex justify-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      <div className="mt-6">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center space-x-2"
        >
          <AiOutlineDownload />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
}

export default Resume;
