/* eslint-disable @typescript-eslint/no-var-requires */
const readline = require("readline");
const fs = require("fs-extra");
const { snakeCaseToPascalCase } = require("./helpers/convertNames");

const PATH_COMPONENT = "./src/components";

const TEMPLATE_MAPPER = [
  [".component.tsx", componentTemplate],
  [".module.scss", styleTemplate],
  [".stories.tsx", storiesTemplate],
  [".types.ts", typesTemplate],
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  const componentName = process.argv[2];
  if (componentName) finalQuestion(componentName);
  else initialQuestion();
  console.log("Success");
  console.log("Considere rodar o seguinte comando agora:");
  console.log("yarn reindex");
}

function initialQuestion() {
  rl.question(
    "Qual o nome do componente? \nexemplos: button-icon, card, forms/text-field\n",
    (pathName) => {
      if (!pathName) {
        console.log("O component precisa ter um nome");
        console.log("O processo foi cancelado");
        rl.close();
        return process.exit(0);
      }
      finalQuestion(pathName);
    }
  );
}

function finalQuestion(pathName) {
  const components = TEMPLATE_MAPPER.reduce((acc, [ext]) => (acc += ` - ${pathName}${ext}\n`), "");
  rl.question(
    `\nOs seguintes arquivos serão criados: \n\n${components}\n\n Confirmar a criação? [*/N]\n`,
    (letter) => {
      if (letter !== "N") {
        createNewComponent(pathName);
        console.log(`o componente ${pathName} foi criado com sucesso`);
      } else {
        console.log("O processo foi cancelado");
        return process.exit(0);
      }
      rl.close();
    }
  );
}

function createNewComponent(pathName) {
  const snakeName = pathName.replace(/.*\//, "");
  const name = snakeCaseToPascalCase(snakeName);
  const groupPath = pathName.replace(snakeName, "");
  const dir = `${PATH_COMPONENT}/${groupPath}${name}`;
  fs.ensureDirSync(dir);
  for (const [ext, fn] of TEMPLATE_MAPPER) {
    const dest = `${dir}/${snakeName}${ext}`;
    const content = fn(name, snakeName);
    fs.writeFileSync(dest, content);
    console.log(`Done: create ${dest}`);
  }
}

function componentTemplate(name, pathName) {
  const typeName = `${name}Props`;
  return `import type { ${typeName} } from "./${pathName}.types";
import classNames from "classnames";

const ${name} = ({ className, children, ...props }: ${typeName}) => {
  const cn = classNames("${pathName}", className);
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default ${name};
`;
}

function styleTemplate(name, pathName) {
  return `.${pathName} {
  background-color: red;
  padding: 24px;
  color: white;
}
`;
}

function typesTemplate(name, pathName) {
  const typeName = `${name}Props`;
  return `export type ${typeName} = React.HTMLProps<HTMLDivElement>;
`;
}

function storiesTemplate(name, pathName) {
  return `import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ${name} from "./${pathName}.component";

export default {
  title: "Components/${name}",
  component: ${name},
  argTypes: {},
} as ComponentMeta<typeof ${name}>;

const Template: ComponentStory<typeof ${name}> = (args) => <${name} {...args} />;

const DefaultArgs = {
  children: "Não esqueça de atualizar o componente!",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
`;
}

main();
