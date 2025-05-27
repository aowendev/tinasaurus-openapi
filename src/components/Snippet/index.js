import React from "react";

const Snippet = ({ filepath }) => {
  let lang = document.documentElement.lang;
  let SnippetMDX;
  try {
    if (lang !== "en") {
      SnippetMDX = require(`/i18n/${lang}/docusaurus-plugin-content-docs/current/snippets/${filepath}`).default;
    } else {
      SnippetMDX = require(`@site/docs/snippets/${filepath}`).default;
    }
  } catch (e) {
      return <div>Error: Snippet not found.</div>;
  }

  return <SnippetMDX />;
};

export default Snippet;
