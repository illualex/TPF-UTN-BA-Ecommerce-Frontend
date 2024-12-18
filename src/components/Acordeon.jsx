import React, { useState, useRef, useEffect } from "react";
import "../styles/Acordeon.css";

const Acordeon = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`accordion-item ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
      >
        <h2>{title}</h2>
        <div
          id={`accordion-content-${title}`}
          className="accordion-content"
          style={{ maxHeight }}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Acordeon;
