module.exports = (plop) => {
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
        path: "src/components/{{pascalCase name}}/modules/index.ts",
        templateFile: "plop-templates/client-component/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/modules/index.test.ts",
        templateFile:
          "plop-templates/client-component/modules/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/types/index.ts",
        templateFile: "plop-templates/client-component/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile: "plop-templates/client-component/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.css",
        templateFile: "plop-templates/client-component/index.module.css.hbs",
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
        templateFile: "plop-templates/server-component/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.css",
        templateFile: "plop-templates/server-component/index.module.css.hbs",
      },
    ],
  });
  // App Router 用のテンプレート
  plop.setGenerator("page", {
    description: "app router page",
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
        path: "app/[locale]/{{lowerCase name}}/page.ts",
        templateFile: "plop-templates/page/page.ts.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/index.tsx",
        templateFile: "plop-templates/page/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/index.module.css",
        templateFile: "plop-templates/page/index.module.css.hbs",
      },
    ],
  });
  plop.setGenerator("form", {
    description: "react form component",
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
        path: "src/components/{{pascalCase name}}Form/index.tsx",
        templateFile: "plop-templates/form/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/hooks/index.ts",
        templateFile: "plop-templates/form/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/modules/index.ts",
        templateFile: "plop-templates/form/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/modules/index.test.ts",
        templateFile: "plop-templates/form/modules/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/types/index.ts",
        templateFile: "plop-templates/form/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/index.stories.tsx",
        templateFile: "plop-templates/form/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/index.module.css",
        templateFile: "plop-templates/form/index.module.css.hbs",
      },
    ],
  });
  plop.setGenerator("table", {
    description: "react table component",
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
        path: "src/components/{{pascalCase name}}Table/index.tsx",
        templateFile: "plop-templates/table/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/types/index.ts",
        templateFile: "plop-templates/table/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/component.tsx",
        templateFile: "plop-templates/table/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/index.stories.tsx",
        templateFile: "plop-templates/table/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/index.module.css",
        templateFile: "plop-templates/table/index.module.css.hbs",
      },
    ],
  });
  plop.setGenerator("action", {
    description: "action",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "action name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/actions/{{name}}/index.ts",
        templateFile: "plop-templates/action/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/actions/{{name}}/index.test.ts",
        templateFile: "plop-templates/action/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/actions/{{name}}/types/index.ts",
        templateFile: "plop-templates/action/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/actions/{{name}}/mock/index.ts",
        templateFile: "plop-templates/action/mock/index.ts.hbs",
      },
    ],
  });
  plop.setGenerator("layout", {
    description: "layout",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "layout name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/layouts/{{name}}/index.tsx",
        templateFile: "plop-templates/layout/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/layouts/{{name}}/index.module.css",
        templateFile: "plop-templates/layout/index.module.css.hbs",
      },
      {
        type: "add",
        path: "app/[locale]/{{name}}/layout.ts",
        templateFile: "plop-templates/layout/layout.ts.hbs",
      },
    ],
  });
  plop.setGenerator("api", {
    description: "api",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "api name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/api/{{name}}/route.ts",
        templateFile: "plop-templates/api/route.ts.hbs",
      },
      {
        type: "add",
        path: "src/api/{{name}}/index.ts",
        templateFile: "plop-templates/api/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/api/{{name}}/hooks.ts",
        templateFile: "plop-templates/api/hooks.ts.hbs",
      },
      {
        type: "add",
        path: "src/api/{{name}}/types/index.ts",
        templateFile: "plop-templates/api/types/index.ts.hbs",
      },
    ],
  });
};
