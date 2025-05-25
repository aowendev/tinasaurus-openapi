import React from "react";
import { slugify } from "../../util";

const AdmonitionTemplate = {
  name: "Admonition",
  ui: {
    defaultItem: {
      type: "note",
      title: "Note",
    },
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
  fields: [
    {
      name: "type",
      label: "Type",
      type: "string",
      options: [
        {
          label: "Note",
          value: "note",
        },
        {
          label: "Tip",
          value: "tip",
        },
        {
          label: "Info",
          value: "info",
        },
        {
          label: "Caution",
          value: "caution",
        },
        {
          label: "Warning",
          value: "danger",
        },
      ],
    },
    {
      name: "title",
      label: "Title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "children",
      label: "Content",
      type: "rich-text",
    },
  ],
};

const DetailsTemplate = {
  name: "Details",
  fields: [
    {
      name: "summary",
      label: "Summary",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "children",
      label: "Details",
      type: "rich-text",
    },
  ],
};

const CodeBlockTemplate = {
  name: "CodeSnippet",
  label: "Code Block",
  ui: {
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "language",
      label: "Language",
      type: "string",
    },
    {
      name: "filepath",
      label: "File Path",
      type: "string",
      isTitle: true,
      required: true,
    },
  ],
};

const DocCardListTemplate = {
  name: "DocCardList",
  label: "Doc Card List",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
  ],
};

// aowendev components follow

const TabsItemTemplate ={
  name: "TabItem",
  label: "Tab Item",
  fields: [
    {
      name: "label",
      label: "Label",
      type: "string",
    },
    {
      name: "value",
      label: "Value",
      type: "string",
    },
    {
      name: "children",
      label: "Content",
      type: "rich-text",
    },
  ],
}

// fixme: Doesn;t work in the grahpical editor but at least allows content to be valid.

const TabsTemplate = {
  name: "Tabs",
  fields: [
    {
      name: "children",
      label: "Tabs",
      type: "rich-text",
      templates: [ TabsItemTemplate ],
    },
  ],
};

const GlossaryTermTemplate = {
  name: "GlossaryTerm",
  label: "Glossary Term",
  ui: {
  itemProps: (item) => {
    return { label: item?.title };
  },},
  fields: [
    {
      name: "termKey",
      label: "Term Key",
      type: "string",
      isTitle: true,
      required: true,
    },
  ],
};

const SnippetTemplate = {
  name: "Snippet",
  label: "Snippet",
  ui: {
  itemProps: (item) => {
    return { label: item?.title };
  },},
  fields: [
    {
      name: "filepath",
      label: "File Path",
      type: "string",
      isTitle: true,
      required: true,
    },
  ],
};

const VariableSetTemplate = {
  name: "VariableSet",
  label: "Variable",
  ui: {
  itemProps: (item) => {
    return { label: item?.title };
  },},
  fields: [
    {
      name: "setKey",
      label: "Variable Set",
      type: "string",
      required: true,
    },
    {
      name: "variableKey",
      label: "Variable",
      type: "string",
      isTitle: true,
      required: true,
    },
  ],
};

const CommentsTemplate = {
  name: 'hidden',
  label: 'Comment',
  match: {
    start: "<!--",
    end: "-->",
  },
  ui: {
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
  fields: [
    {
      name: "comment",
      label: "Comment",
      type: "string",
      isTitle: true,
      required: true,
    },
  ],
};

// Get the last segment of the path as the slug
const usePageSlug = () => {
  if (typeof window === "undefined") return "";
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  return segments[segments.length - 1] || "";
};

const slug = usePageSlug();

const ContextHelpTemplate = {
  name: "a",
  label: "Context Help",
  ui: {
    itemProps: (item, slug) => {
      return { label: item?.title };
    },
  },
  fields: [
    {
      name: "id",
      label: "Context Help ID (\<URL>/docs/\<slug>#\<ID>)",
      type: "string",
      isTitle: true,
      required: true,
    },
  ],
};

const FigureTemplate = {
  name: "Figure",
  label: "Figure",
  ui: {
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
  fields: [
    {
      name: "img",
      label: "Image",
      type: "image",
      required: true,
    },
    {
      name: "caption",
      label: "Caption",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      name: "size",
      label: "Size",
      type: "string",
    }
  ],
};

export const MDXTemplates = [
  AdmonitionTemplate,
  CommentsTemplate,
  CodeBlockTemplate,
  ContextHelpTemplate,
  DetailsTemplate,
  DocCardListTemplate,
  FigureTemplate,
  GlossaryTermTemplate,
  SnippetTemplate,
  TabsTemplate,
  VariableSetTemplate,
];
