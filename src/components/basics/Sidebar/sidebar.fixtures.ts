import { SidebarList } from "./sidebar.types";

export const defaultSidebarList: SidebarList = [
  {
    label: "Geral",
    items: [
      {
        label: "Painel do aluno",
        icon: { name: "painel" },
        href: "https://google.com",
        target: "_blank",
      },
      {
        label: "Minha Turma",
        icon: { name: "turma" },
        href: "https://facebook.com",
        target: "_blank",
      },
    ],
  },
  {
    label: "Aulas",
    items: [
      {
        label: "Matérias",
        icon: { name: "materias" },
        href: "https://youtube.com",
        target: "_blank",
        isActive: true,
        onClick: () => {
          alert("Eu fui clicado");
        },
      },
      {
        label: "Plano de estudos",
        icon: { name: "plano-de-estudos" },
        href: "https://youtube.com",
        target: "_blank",
      },
      {
        label: "Aulas ao vivo",
        icon: { name: "aula-ao-vivo" },
        href: "https://youtube.com",
        target: "_blank",
      },
      {
        label: "Correção de redação",
        icon: { name: "correcao" },
        href: "https://youtube.com",
        target: "_blank",
      },
      {
        label: "Exercícios de provas",
        icon: { name: "exercicio" },
        href: "https://youtube.com",
        target: "_blank",
      },
      {
        label: "Mentorias",
        icon: { name: "mentoria" },
        href: "https://youtube.com",
        target: "_blank",
      },
      {
        label: "Apostilas",
        icon: { name: "apostila" },
        href: "https://youtube.com",
        target: "_blank",
      },
    ],
  },
  {
    label: "Materiais",
    items: [
      {
        label: "Simulados",
        icon: { name: "simulado" },
        href: "https://youtube.com",
        target: "_blank",
        onClick: () => console.log("google."),
      },
      {
        label: "Banco de provas",
        icon: { name: "banco-de-prova" },
        href: "https://youtube.com",
        target: "_blank",
      },
      {
        label: "Forúm de dúvidas",
        icon: { name: "forum" },
        href: "https://youtube.com",
        target: "_blank",
      },
      {
        label: "Academia do hábito",
        icon: { name: "academia-do-habito" },
        href: "https://youtube.com",
        target: "_blank",
      },
      {
        label: "Loja de livros",
        icon: { name: "loja-de-livros" },
        href: "https://youtube.com",
        target: "_blank",
      },
    ],
  },
  {
    label: "Opções",
    items: [
      {
        label: "Planos",
        icon: { name: "planos" },
        href: "https://youtube.com",
        target: "_blank",
      },
    ],
  },
];
