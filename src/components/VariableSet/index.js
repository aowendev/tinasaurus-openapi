import React, { useState, useEffect } from "react";

const VariableSet = ({ setKey, variableKey }) => {
  const [translation, setTranslation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../reuse/variableSets/index.json");
        const jsonData = await response.json();
        const lang = document.documentElement.lang;
        const translatedValue =
          jsonData?.[setKey]?.[variableKey]?.[lang] ??
          jsonData?.[setKey]?.[variableKey]?.["en"] ??
          "";
        setTranslation(translatedValue);
      } catch (error) {
        console.error("Error fetching translation:", error);
        setTranslation("");
      }
    };

    fetchData();
  }, [setKey, variableKey]);

  return <span>{translation}</span>;
};

export default VariableSet;
