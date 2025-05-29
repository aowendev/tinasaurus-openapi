import React, { useEffect, useState } from 'react';

const Snippet = ({ filepath }) => {
  const [SnippetMDX, setSnippetMDX] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadSnippet = async () => {
      let lang = "en";
      if (typeof window !== "undefined") {
        const match = window.location.pathname.match(/^\/([a-z]{2})(\/|$)/i);
        lang = match ? match[1] : "en";
      }

      try {
        let mod;
        if (lang !== "en") {
          // Try to load translated snippet first
          mod = await import(
            /* webpackInclude: /\.mdx$/ */
            `@site/i18n/${lang}/snippets/${filepath}`
          );
        } else {
          // Fallback to English
          mod = await import(
            /* webpackInclude: /\.mdx$/ */
            `@site/reuse/snippets/${filepath}`
          );
        }
        if (isMounted) setSnippetMDX(() => mod.default);
      } catch (e) {
        try {
          const mod = await import(
            /* webpackInclude: /\.mdx$/ */
            `@site/reuse/snippets/${filepath}`
          );
          if (isMounted) setSnippetMDX(() => mod.default);
        } catch (e2) {
          if (isMounted) setError("Error: Snippet not found.");
        }
      }
    };

    loadSnippet();
    return () => {
      isMounted = false;
    };
  }, [filepath]);

  if (error) return <div>{error}</div>;
  if (!SnippetMDX) return <div>Loading snippet...</div>;
  return <SnippetMDX />;
};

export default Snippet;