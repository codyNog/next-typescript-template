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
        templateFile: "plop-templates/domain/index.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/index.test.ts",
        templateFile: "plop-templates/domain/index.test.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/types/index.ts",
        templateFile: "plop-templates/domain/types/index.ts.hbs",
      },
      {
        type: "add",
        path: "domain/{{pascalCase name}}/mock/index.ts",
        templateFile: "plop-templates/domain/mock/index.ts.hbs",
      },
    ],
  });
};
