import React from "react";

const Snippet = ({ filepath }) => {
  let SnippetMDX;
  try {
    if (lang !== "en") {
      SnippetMDX = require(`@site/i18n/${lang}/snippets/${filepath}`).default;
    } else {
      SnippetMDX = require(`@site/reuse/snippets/${filepath}`).default;
}
  } catch (e) {
    return <div>Error: Snippet not found.</div>;
  }

  // Render the imported MDX component directly
  return ( <SnippetMDX /> );
};

export default Snippet;
