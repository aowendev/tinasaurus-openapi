import React from "react";

const Snippet = ({ filepath }) => {
  let SnippetMDX;
  try {
    SnippetMDX = require(`@site/reuse/snippets/${filepath}`).default;
  } catch (e) {
    return <div>Error: Snippet not found.</div>;
  }

  // Render the imported MDX component directly
  return ( <SnippetMDX /> );
};

export default Snippet;
