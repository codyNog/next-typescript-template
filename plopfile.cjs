module.exports = function (plop) {
  // controller generator
  plop.setGenerator("cc", {
    description: "react client component",
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
        templateFile: "plop-templates/client-component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/hooks/index.ts",
        templateFile: "plop-templates/client-component/hooks/index.ts.hbs",
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
    ],
  });
  plop.setGenerator("sc", {
    description: "react server component",
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
        templateFile: "plop-templates/server-component/index.tsx.hbs",
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
    ],
  });
  // App Router 用のテンプレート
/*   plop.setGenerator("page", {
    description: "app router page component",
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
        path: "src/page-components/{{lowerCase name}}/index.tsx",
        templateFile: "plop-templates/page/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/index.stories.tsx",
        templateFile: "plop-templates/page/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/hooks/index.ts",
        templateFile: "plop-templates/page/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/app/{{lowerCase name}}/page.tsx",
        templateFile: "plop-templates/page/page.tsx.hbs",
      },
    ],
  }); */
  // Page Router 用のテンプレート
  plop.setGenerator("page", {
    description: "page router page component",
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
        path: "src/page-components/{{lowerCase name}}/index.tsx",
        templateFile: "plop-templates/page/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/index.stories.tsx",
        templateFile: "plop-templates/page/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/hooks/index.ts",
        templateFile: "plop-templates/page/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{lowerCase name}}/index.tsx",
        templateFile: "plop-templates/page/page.tsx.hbs",
      },
    ]
  });
  plop.setGenerator("domain", {
    description: "domain",
    prompts:[
      {
        type: "input",
        name: "name",
        message: "domain name please",
      },
    ],
    actions: [
      { 
        type: "add",
        path: "src/domain/repositories/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/domain/repository.ts.hbs",
      },
      { 
        type: "add",
        path: "src/domain/entities/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/domain/entity.ts.hbs",
      },
      { 
        type: "add",
        path: "src/constants/mock/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/domain/mock.ts.hbs",
      }
    ]
  })
};
