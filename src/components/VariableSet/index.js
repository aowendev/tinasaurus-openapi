import React, { useState, useEffect } from "react";

const VariableSet = ({ setKey, variableKey }) => {
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use absolute path for production/static
        const response = await fetch("../reuse/variableSets/index.json");
        const jsonData = await response.json();
        const lang = document.documentElement.lang || "en";

        // Find the set by setKey
        const set = Array.isArray(jsonData.variableSets)
          ? jsonData.variableSets.find((s) => s.name === setKey)
          : null;

        // Find the variable by variableKey
        const variable = set && Array.isArray(set.variables)
          ? set.variables.find((v) => v.key === variableKey)
          : null;

        // Find the translation by lang, fallback to 'en'
        let value = "";
        if (variable && Array.isArray(variable.translations)) {
          const translationObj =
            variable.translations.find((t) => t.lang === lang) ||
            variable.translations.find((t) => t.lang === "en");
          value = translationObj ? translationObj.value : "";
        }

        setTranslation(value);
      } catch (error) {
        setTranslation("NOT FOUND");
      }
    };

    fetchData();
  }, [setKey, variableKey]);

  return <span>{translation}</span>;
};

export default VariableSet;