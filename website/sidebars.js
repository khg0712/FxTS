const func = require("./function.json");
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  api: [
    { type: "doc", id: "index", label: "Index" },
    ...Object.keys(func).map((key) => {
      return {
        type: "category",
        label: key,
        collapsible: true,
        collapsed: false,
        items: func[key],
      };
    }),
  ],
  docs: [
    {
      type: "doc",
      id: "getting-started",
      label: "Getting Started",
    },
    {
      type: "category",
      label: "Guide",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "function-composition",
          label: "Function Composition",
        },
        {
          type: "doc",
          id: "lazy-evaluation",
          label: "Lazy Evaluation",
        },
        {
          type: "doc",
          id: "handle-concurrency",
          label: "Handle Concurrency",
        },
        {
          type: "doc",
          id: "error-handling",
          label: "Error handling",
        },
      ],
    },
    {
      type: "category",
      label: "FAQ",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "to-async",
          label: "When to use the `toAsync` function?",
        },
        {
          type: "doc",
          id: "how-to-debug",
          label: "How to debug in pipeline easily?",
        },
      ],
    },
  ],
};

module.exports = sidebars;