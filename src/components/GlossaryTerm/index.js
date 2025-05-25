import React, { useState, useEffect } from 'react';

const getLangFromPath = () => {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const match = path.match(/^\/([a-z]{2})(\/|$)/i);
  return match ? match[1] : "en";
};

const GlossaryTerm = ({ termKey }) => {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../reuse/glossaryTerms/index.json');
        const jsonData = await response.json();
        const lang = getLangFromPath();
        const entry = jsonData[termKey]?.[lang];
        if (entry) {
          setTerm(entry.term || '');
          setDefinition(entry.definition || '');
        } else {
          setTerm('');
          setDefinition('');
        }
      } catch (error) {
        console.error('Error fetching translation:', error);
        setTerm('');
        setDefinition('');
      }
    };

    fetchData();
  }, [termKey]);

  return (
    <span title={definition} style={{ textDecoration: 'underline', cursor: 'help' }}>
      {term}
    </span>
  );
};

export default GlossaryTerm;
