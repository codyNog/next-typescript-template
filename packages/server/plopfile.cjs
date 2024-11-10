module.exports = (plop) => {
  // controller generator
  plop.setGenerator("route", {
    description: "add route",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "route name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/routes/{{name}}/index.ts",
        templateFile: "../../plop-templates/packages/server/route/index.ts.hbs",
      },
    ],
  });
};
