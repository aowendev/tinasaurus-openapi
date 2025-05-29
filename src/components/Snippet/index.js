import React from "react";

const Snippet = ({ filepath }) => {
  let lang = document.documentElement.lang;
  let SnippetMDX;
  try {
    if (lang !== "en") {
      SnippetMDX = require(`@site/reuse/snippets/i18n/${lang}/${filepath}`).default;
    } else {
      SnippetMDX = require(`@site/reuse/snippets/${filepath}`).default;
    }
  } catch (e) {
      return <div>Error: Snippet not found.</div>;
  }

  return <SnippetMDX />;
};

export default Snippet;
