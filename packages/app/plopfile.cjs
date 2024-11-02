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
        templateFile:
          "../../plop-templates/packages/app/client-component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/hooks/index.ts",
        templateFile:
          "../../plop-templates/packages/app/client-component/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/modules/index.ts",
        templateFile:
          "../../plop-templates/packages/app/client-component/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/modules/index.test.ts",
        templateFile:
          "../../plop-templates/packages/app/client-component/modules/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/app/client-component/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/app/client-component/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.css",
        templateFile:
          "../../plop-templates/packages/app/client-component/index.module.css.hbs",
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
        templateFile:
          "../../plop-templates/packages/app/server-component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/app/server-component/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.css",
        templateFile:
          "../../plop-templates/packages/app/server-component/index.module.css.hbs",
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
        templateFile: "../../plop-templates/packages/app/page/page.ts.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/index.tsx",
        templateFile: "../../plop-templates/packages/app/page/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/index.module.css",
        templateFile:
          "../../plop-templates/packages/app/page/index.module.css.hbs",
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
        templateFile: "../../plop-templates/packages/app/form/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/hooks/index.ts",
        templateFile:
          "../../plop-templates/packages/app/form/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/modules/index.ts",
        templateFile:
          "../../plop-templates/packages/app/form/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/modules/index.test.ts",
        templateFile:
          "../../plop-templates/packages/app/form/modules/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/types/index.ts",
        templateFile:
          "../../plop-templates/packages/app/form/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/app/form/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/index.module.css",
        templateFile:
          "../../plop-templates/packages/app/form/index.module.css.hbs",
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
        templateFile: "../../plop-templates/packages/app/table/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/types/index.ts",
        templateFile:
          "../../plop-templates/packages/app/table/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/component.tsx",
        templateFile:
          "../../plop-templates/packages/app/table/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/app/table/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/index.module.css",
        templateFile:
          "../../plop-templates/packages/app/table/index.module.css.hbs",
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
        templateFile: "../../plop-templates/packages/app/action/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/actions/{{name}}/index.test.ts",
        templateFile:
          "../../plop-templates/packages/app/action/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/actions/{{name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/app/action/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/actions/{{name}}/mock/index.ts",
        templateFile:
          "../../plop-templates/packages/app/action/mock/index.ts.hbs",
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
        templateFile: "../../plop-templates/packages/app/layout/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/layouts/{{name}}/index.module.css",
        templateFile:
          "../../plop-templates/packages/app/layout/index.module.css.hbs",
      },
      {
        type: "add",
        path: "app/[locale]/{{name}}/layout.ts",
        templateFile: "../../plop-templates/packages/app/layout/layout.ts.hbs",
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
        templateFile: "../../plop-templates/packages/app/api/route.ts.hbs",
      },
      {
        type: "add",
        path: "src/api/{{name}}/index.ts",
        templateFile: "../../plop-templates/packages/app/api/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/api/{{name}}/hooks.ts",
        templateFile: "../../plop-templates/packages/app/api/hooks.ts.hbs",
      },
      {
        type: "add",
        path: "src/api/{{name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/app/api/types/index.ts.hbs",
      },
    ],
  });
};
