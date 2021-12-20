const readline = require("readline");
const fs = require("fs-extra");
const { kebabCaseToPascalCase } = require("./helpers/convert-names");

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
  if (componentName) return finalQuestion(componentName);
  return initialQuestion();
}

async function question(text) {
  return new Promise((resolve) => rl.question(text, resolve));
}

async function initialQuestion() {
  const text = "Qual o nome do componente? \nexemplos: button-icon, card, forms/text-field\n";
  return question(text).then((pathName) => {
    if (pathName) return finalQuestion(pathName);
    console.log("O component precisa ter um nome");
    console.log("O processo foi cancelado");
    process.exit(0);
  });
}

async function finalQuestion(pathName) {
  const snakeName = pathName.replace(/.*\//, "");
  const componentName = kebabCaseToPascalCase(pathName);
  const components = TEMPLATE_MAPPER.reduce(
    (acc, [ext]) => (acc += ` - ${componentName}/${snakeName}${ext}\n`),
    ""
  );
  const text = `\nOs seguintes arquivos serão criados: \n\n${components}\n\n Confirmar a criação? [*/N]\n`;
  return question(text).then((letter) => {
    if (letter === "N") {
      console.log("O processo foi cancelado");
      return process.exit(0);
    }
    createNewComponent(pathName);
    console.log(`o componente ${pathName} foi criado com sucesso`);
    require("./reindex");
    return process.exit(0);
  });
}

function createNewComponent(pathName) {
  const snakeName = pathName.replace(/.*\//, "");
  const name = kebabCaseToPascalCase(snakeName);
  const groupPath = pathName.replace(snakeName, "");
  const dir = `${PATH_COMPONENT}/${groupPath}${name}`;
  fs.ensureDirSync(dir);
  for (const [ext, fn] of TEMPLATE_MAPPER) {
    const dest = `${dir}/${snakeName}${ext}`;
    const content = fn(name, snakeName);
    fs.writeFileSync(dest, content);
    console.log(`Done: create ${dest}`);
  }
  const dest = `${PATH_COMPONENT}/${groupPath}${name}/index.ts`;
  const content = indexTemplate(name, snakeName);
  fs.writeFileSync(dest, content);
  console.log(`Done: create ${dest}`);
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

function indexTemplate(name, pathName) {
  return `import ${name} from "./${pathName}.component";
export default ${name};
`;
}

function typesTemplate(name, pathName) {
  const typeName = `${name}Props`;
  return `export type ${typeName} = React.HTMLProps<HTMLDivElement>;
`;
}

function storiesTemplate(name, pathName) {
  return `import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ${name} from "./";

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
