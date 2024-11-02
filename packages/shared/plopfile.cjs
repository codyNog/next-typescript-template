module.exports = (plop) => {
  plop.setGenerator("domain", {
    description: "domain",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "domain name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "domain/{{pascalCase name}}/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/index.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/index.test.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/types/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/mock/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/domain/mock/index.ts.hbs",
      },
    ],
  });
  plop.setGenerator("schema", {
    description: "schema",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "schema name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "db/schema/{{camelCase name}}/index.ts",
        templateFile:
          "../../plop-templates/packages/shared/schema/index.ts.hbs",
      },
      {
        type: "append",
        path: "db/schema/index.ts",
        template: "export { {{camelCase name}} } from './{{camelCase name}}';",
      },
    ],
  });
};
