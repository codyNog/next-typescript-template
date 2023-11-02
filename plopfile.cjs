module.exports = function (plop) {
  // controller generator
  plop.setGenerator("component", {
    description: "react component",
    prompts: [
      // 入力させたい値につけたnameをactionsやtemplate内で参照できます
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile: "plop-templates/component/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.test.tsx",
        templateFile: "plop-templates/component/index.test.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/hooks/index.ts",
        templateFile: "plop-templates/component/hooks/index.ts.hbs",
      },
    ],
  });
  plop.setGenerator("page", {
    description: "page component",
    prompts: [
      // 入力させたい値につけたnameをactionsやtemplate内で参照できます
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{name}}/index.tsx",
        templateFile: "plop-templates/page/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{name}}/index.stories.tsx",
        templateFile: "plop-templates/page/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{name}}/hooks/index.ts",
        templateFile: "plop-templates/page/hooks/index.ts.hbs",
      },
      { type: "add",
        path: "src/app/{{name}}/page.tsx",
        templateFile: "plop-templates/page/page.tsx.hbs",
      }
    ],
  });
};
