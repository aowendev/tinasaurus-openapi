import React from "react";

const Snippet = ({ filepath }) => {
  const lang = document.documentElement.lang;
  let SnippetMDX;
  if (lang !== "en"){
    SnippetMDX = require(`@site/i18n/${lang}/snippets/${filepath}`).default;
  } else {
    SnippetMDX = require(`@site/reuse/snippets/${filepath}`).default;
  }
  return ( <SnippetMDX /> );
};

export default Snippet;
