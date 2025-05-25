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

const TabsTemplate = {
  name: "Tabs",
  fields: [
    {
      name: "children",
      label: "Tabs",
      type: "rich-text",
      templates: [
        {
          name: "TabItem",
          label: "Tab",
          ui: {
            defaultItem: {
              label: "Tab",
              value: "tab",
            },
          },
          fields: [
            {
              name: "label",
              label: "Label",
              type: "string",
              isTitle: true,
              required: true,
            },
            {
              name: "value",
              type: "string",
              ui: {
                component: ({ input, tinaForm }) => {
                  React.useEffect(() => {
                    input.onChange(slugify(tinaForm.values.label));
                  }, [JSON.stringify(tinaForm.values)]);

                  return (
                    <input
                      type="text"
                      id={input.name}
                      className="hidden"
                      {...input}
                    />
                  );
                },
              },
            },
            {
              name: "children",
              label: "Content",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
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

export const MDXTemplates = [
  AdmonitionTemplate,
  CommentsTemplate,
  CodeBlockTemplate,
  DetailsTemplate,
  DocCardListTemplate,
  GlossaryTermTemplate,
  SnippetTemplate,
  TabsTemplate,
  VariableSetTemplate,
];
