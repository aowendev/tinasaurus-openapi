import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import React from "react";
import { getDocPath, titleFromSlug } from "../../../util";
import styles from "./index.module.css";

export const Hero = ({ data, index }) => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header
      key={index}
      className={clsx("hero hero--primary", styles.heroBanner)}
    >
      <div className="container">
        <h1 className="hero__title">
          {data.title ? data.title : siteConfig.title}
        </h1>
        <p className="hero__subtitle">
          {data.subtitle ? data.subtitle : siteConfig.tagline}
        </p>
        {data.document && (
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={getDocPath(data.document)}
            >
              {data.documentLabel
                ? data.documentLabel
                : titleFromSlug(data.document)}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
