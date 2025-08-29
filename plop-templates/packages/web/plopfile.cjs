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
          "../../plop-templates/packages/web/client-component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/hooks/index.ts",
        templateFile:
          "../../plop-templates/packages/web/client-component/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/modules/index.ts",
        templateFile:
          "../../plop-templates/packages/web/client-component/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/modules/index.test.ts",
        templateFile:
          "../../plop-templates/packages/web/client-component/modules/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/web/client-component/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/web/client-component/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.css",
        templateFile:
          "../../plop-templates/packages/web/client-component/index.module.css.hbs",
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
          "../../plop-templates/packages/web/server-component/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/web/server-component/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.module.css",
        templateFile:
          "../../plop-templates/packages/web/server-component/index.module.css.hbs",
      },
    ],
  });
  // web Router 用のテンプレート
  plop.setGenerator("page", {
    description: "web router page",
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
        path: "web/[locale]/{{lowerCase name}}/page.ts",
        templateFile: "../../plop-templates/packages/web/page/page.ts.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/index.tsx",
        templateFile: "../../plop-templates/packages/web/page/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/page-components/{{lowerCase name}}/index.module.css",
        templateFile:
          "../../plop-templates/packages/web/page/index.module.css.hbs",
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
        templateFile: "../../plop-templates/packages/web/form/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/hooks/index.ts",
        templateFile:
          "../../plop-templates/packages/web/form/hooks/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/modules/index.ts",
        templateFile:
          "../../plop-templates/packages/web/form/modules/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/modules/index.test.ts",
        templateFile:
          "../../plop-templates/packages/web/form/modules/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/types/index.ts",
        templateFile:
          "../../plop-templates/packages/web/form/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/web/form/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Form/index.module.css",
        templateFile:
          "../../plop-templates/packages/web/form/index.module.css.hbs",
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
        templateFile: "../../plop-templates/packages/web/table/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/types/index.ts",
        templateFile:
          "../../plop-templates/packages/web/table/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/component.tsx",
        templateFile:
          "../../plop-templates/packages/web/table/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/index.stories.tsx",
        templateFile:
          "../../plop-templates/packages/web/table/index.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}Table/index.module.css",
        templateFile:
          "../../plop-templates/packages/web/table/index.module.css.hbs",
      },
    ],
  });
  plop.setGenerator("function", {
    description: "server function",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "function name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/functions/{{name}}/index.ts",
        templateFile: "../../plop-templates/packages/web/function/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/functions/{{name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/web/function/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/functions/{{name}}/mock/index.ts",
        templateFile:
          "../../plop-templates/packages/web/function/mock/index.ts.hbs",
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
        templateFile: "../../plop-templates/packages/web/layout/index.tsx.hbs",
      },
      {
        type: "add",
        path: "src/layouts/{{name}}/index.module.css",
        templateFile:
          "../../plop-templates/packages/web/layout/index.module.css.hbs",
      },
      {
        type: "add",
        path: "web/[locale]/{{name}}/layout.ts",
        templateFile: "../../plop-templates/packages/web/layout/layout.ts.hbs",
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
        path: "web/api/{{name}}/route.ts",
        templateFile: "../../plop-templates/packages/web/api/route.ts.hbs",
      },
      {
        type: "add",
        path: "src/api/{{name}}/index.ts",
        templateFile: "../../plop-templates/packages/web/api/index.ts.hbs",
      },
      {
        type: "add",
        path: "src/hooks/api/{{name}}/hooks.ts",
        templateFile: "../../plop-templates/packages/web/api/hooks.ts.hbs",
      },
      {
        type: "add",
        path: "src/api/{{name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/web/api/types/index.ts.hbs",
      },
    ],
  });
};
