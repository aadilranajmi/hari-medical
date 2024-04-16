"use client";
import parsePurify from "@/helpers/ParserPurifyServer";
import React, { useState, useRef, useEffect } from "react";
import { MdArrowForward } from "react-icons/md";

const ReadMoreLess = ({ content, classes }) => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={classes}
      style={{ maxHeight: expanded ? "none" : "150px", overflow: "hidden" }}
    >
      <div ref={contentRef}>{parsePurify(content)}</div>
      {contentHeight > 100 && (
        <div className={`readMoreBtnExpand ${expanded ? "readMoreBtnExpandMore": ""}`}>
          <button onClick={toggleContent}>
            {expanded ? "Read Less" : "Read More"}
            <MdArrowForward size={13} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ReadMoreLess;
