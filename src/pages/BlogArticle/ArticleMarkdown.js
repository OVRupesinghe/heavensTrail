import React from "react";
import ReactMarkdown from "react-markdown";
import "./articleMarkdown.css"; // Import your custom CSS

const ArticleMarkdown = ({ content }) => {
  return (
    <div className="article-content max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default ArticleMarkdown;
