/**
 * @param {import("plop").NodePlopAPI} plop
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator("component", {
    description: "Generates a component package",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Enter component name:",
      },
      {
        type: "input",
        name: "radixPrimitive",
        message:
          "Enter package name of Radix UI primitive, without '@radix-ui/react-' (optional):",
      },
      {
        when: (answers) => answers.radixPrimitive.trim() !== "",
        type: "input",
        name: "radixPrimitiveVersion",
        message: "Enter version of Radix UI primitive:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "./packages/react/{{dashCase componentName}}",
        templateFiles: "plop-templates/react/component/**/*",
        base: "plop-templates/react/component",
      },
      {
        when: (answers) => answers.radixPrimitive.trim() !== "",
        type: "append",
        path: "./packages/react/{{dashCase componentName}}/package.json",
        pattern: '"@desktop-ui/styles": "workspace:*",',
        template:
          '    "@radix-ui/react-{{dashCase radixPrimitive}}": "{{radixPrimitiveVersion}}",',
      },
      {
        when: (answers) => answers.radixPrimitive.trim() !== "",
        type: "append",
        path: "./packages/react/{{dashCase componentName}}/src/{{pascalCase componentName}}.tsx",
        pattern: 'import * as React from "react";',
        template:
          "import * as {{pascalCase radixPrimitive}}Primitive from '@radix-ui/react-{{dashCase radixPrimitive}}';",
      },
    ],
  });
}
