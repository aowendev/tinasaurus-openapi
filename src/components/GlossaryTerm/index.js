import React, { useState, useEffect } from "react";

const GlossaryTerm = ({ termKey }) => {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../reuse/glossaryTerms/index.json");
        const jsonData = await response.json();
        const lang = document.documentElement.lang || "en";

        // Find the glossary term by key
        const entry = Array.isArray(jsonData.glossaryTerms)
          ? jsonData.glossaryTerms.find((t) => t.key === termKey)
          : null;

        // Find the language object
        const langObj = entry && Array.isArray(entry.languages)
          ? entry.languages.find((l) => l.lang === lang) ||
            entry.languages.find((l) => l.lang === "en")
          : null;

        // Find the first translation (if any)
        const translation =
          langObj && Array.isArray(langObj.translations)
            ? langObj.translations[0]
            : null;

        setTerm(translation?.term || "");
        setDefinition(translation?.definition || "");
      } catch (error) {
        setTerm("TERM NOT FOUND");
        setDefinition("NOT FOUND");
      }
    };

    fetchData();
  }, [termKey]);

  return (
    <span
      title={definition}
      style={{ textDecoration: "underline", cursor: "help" }}
    >
      {term}
    </span>
  );
};

export default GlossaryTerm;