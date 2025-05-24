import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import CodeBlock from "@theme-original/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";

import GlossaryTerm from "@site/src/components/GlossaryTerm";
import VariableSet from "@site/src/components/VariableSet";

export default {
  ...MDXComponents,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList: DocCardList,

  GlossaryTerm: GlossaryTerm,
  VariableSet: VariableSet,
};
