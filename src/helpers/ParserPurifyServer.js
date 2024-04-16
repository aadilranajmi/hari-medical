import DOMPurify from "isomorphic-dompurify";
import parse from "html-react-parser";

const parsePurify = (html = "") => {
  return typeof html === "string"
    ? parse(DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }))
    : "";
};

export default parsePurify;
