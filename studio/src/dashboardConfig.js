export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "607b071dbd52016d7c4dccd8",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-f95cb78c",
                  apiId: "22dafc5f-2985-4cfd-b35f-3932c6909497",
                },
                {
                  buildHookId: "607b071d735a7175b394c8d2",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zs28c1js",
                  apiId: "96be2056-2f59-40c2-b0a9-0701b716785a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/liangyaohua/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zs28c1js.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
