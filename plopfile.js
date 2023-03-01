export default function (plop) {
	// controller generator
    plop.setGenerator('component', {
        description: 'react component',
        prompts: [
          // 入力させたい値につけたnameをactionsやtemplate内で参照できます
          {
            type: 'input',
            name: 'name',
            message: 'component name please',
          },
        ],
        actions: [
          {
            type: 'add',
            path: 'src/components/{{name}}/index.tsx',
            templateFile: 'plop-templates/component/index.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{name}}/index.stories.tsx',
            templateFile: 'plop-templates/component/index.stories.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{name}}/hooks/index.ts',
            templateFile: 'plop-templates/component/hooks/index.ts.hbs',
          },
        ],
    })
}