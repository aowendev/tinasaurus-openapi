import React, { useState, useEffect } from 'react';

const getLangFromPath = () => {
  if (typeof window === "undefined") return "en";
  const match = window.location.pathname.match(/^\/([a-z]{2})(\/|$)/i);
  return match ? match[1] : "en";
};

const VariableSet = ({ setKey, variableKey }) => {
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use absolute path for fetch in Docusaurus/static
        const response = await fetch('../reuse/variableSets/index.json');
        const jsonData = await response.json();
        const lang = getLangFromPath();
        const translatedValue =
          jsonData?.[setKey]?.[variableKey]?.[lang] ??
          jsonData?.[setKey]?.[variableKey]?.['en'] ??
          '';
        setTranslation(translatedValue);
      } catch (error) {
        console.error('Error fetching translation:', error);
        setTranslation('');
      }
    };

    fetchData();
  }, [setKey, variableKey]);

  return <span>{translation}</span>;
};

export default VariableSet;