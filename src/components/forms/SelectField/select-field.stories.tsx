import type { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectField, { SelectFieldOption } from ".";

export default {
  title: "Forms/SelectField",
  component: SelectField,
  argTypes: {
    defaultOption: {},
  },
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />;

const options = getCourses();

export const Default = Template.bind({});
Default.args = {
  label: "Modalidade de acesso",
  enableFilter: false,
  disabled: false,
  onSelect: console.log,
  options: [
    { label: "Ampla Concorrência", value: 1 },
    { label: "Candidato Afrodescendente, Indígena ou Transsexual", value: 2 },
    { label: "Candidato com Deficiência", value: 3 },
    { label: "Candidato egresso de escola pública, carente", value: 4 },
    { label: "Candidato egresso de escola pública", value: 5 },
  ],
};

export const Filter = Template.bind({});
Filter.args = { disabled: false, enableFilter: true, options, label: "Cursos" };

export const OptionSelected = Template.bind({});
OptionSelected.args = {
  disabled: false,
  enableFilter: true,
  options,
  label: "Cursos",
  defaultOption: { label: "Design de Produto", value: 27 },
  onSelect: console.log,
};

function getCourses(): SelectFieldOption[] {
  return [
    "Administração",
    "Administração Pública e Social",
    "Agronomia",
    "Arquitetura e Urbanismo",
    "Arquivologia",
    "Artes Visuais",
    "Bacharelado em Desenvolvimento Rural - Ensino a Distância",
    "Biblioteconomia",
    "Biblioteconomia - Ensino a Distância",
    "Biomedicina",
    "Biotecnologia",
    "Ciência da Computação",
    "Ciências Atuariais",
    "Ciências Biológicas",
    "Ciências Biológicas - Ceclimar",
    "Ciências Biológicas - Licenciatura",
    "Ciências Biológicas - Licenciatura - Ensino a Distância",
    "Ciências Contábeis",
    "Ciências Econômicas",
    "Ciências Jurídicas e Sociais",
    "Ciências Sociais",
    "Ciências Sociais - Ensino a Distância",
    "Ciências da Natureza para Os Anos Finais do Ensino Fundamental - Ensino a Distância",
    "Computação e Robótica Educativa - Educação a Distância - Ensino a Distância",
    "Dança",
    "Desenvolvimento Regional - Litoral Norte",
    "Design Visual",
    "Design de Produto",
    "Educação Física",
    "Educação do Campo - Ciências da Natureza - Litoral",
    "Educação do Campo - Ciências da Natureza - Porto Alegre",
    "Enfermagem",
    "Engenharia Ambiental",
    "Engenharia Cartográfica e Agrimensura",
    "Engenharia Civil",
    "Engenharia Elétrica",
    "Engenharia Física",
    "Engenharia Hídrica",
    "Engenharia Mecânica",
    "Engenharia Metalúrgica",
    "Engenharia Química",
    "Engenharia de Alimentos",
    "Engenharia de Computação",
    "Engenharia de Controle e Automação",
    "Engenharia de Energia",
    "Engenharia de Gestão de Energia - Litoral Norte",
    "Engenharia de Materiais",
    "Engenharia de Minas",
    "Engenharia de Produção",
    "Engenharia de Serviços - Litoral Norte",
    "Estatística",
    "Farmácia",
    "Filosofia",
    "Fisioterapia",
    "Fonoaudiologia",
    "Física",
    "Física - Licenciatura",
    "Geografia",
    "Geografia - Ensino a Distância",
    "Geografia - Litoral Norte",
    "Geologia",
    "História",
    "História da Arte",
    "Interdisciplinar em Ciência e Tecnologia - Litoral Norte",
    "Jornalismo",
    "Letras",
    "Matemática",
    "Medicina",
    "Medicina Veterinária",
    "Museologia",
    "Música",
    "Nutrição",
    "Odontologia",
    "Pedagogia",
    "Pedagogia - Ensino a Distância",
    "Pedagogia - Ensino a Distância",
    "Políticas Públicas",
    "Psicologia",
    "Publicidade e Propaganda",
    "Química",
    "Relações Internacionais",
    "Relações Públicas",
    "Saúde Coletiva",
    "Serviço Social",
    "Teatro",
    "Zootecnia",
  ].map((label, value) => ({ label, value }));
}
