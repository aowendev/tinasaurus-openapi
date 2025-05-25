import React, { useState, useEffect } from 'react';

const GlossaryTerm = ({ termKey }) => {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../reuse/glossaryTerms/index.json');
        const jsonData = await response.json();
        const lang = document.documentElement.lang;
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
