import type { SidebarList } from "./sidebar.types";

export const defaultSidebarList: SidebarList = [
  {
    label: "Geral",
    items: [
      {
        label: "Painel do aluno",
        iconName: "painel",
        href: "https://google.com",
        target: "_blank",
      },
      {
        label: "Minha Turma",
        iconName: "turma",
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
        iconName: "materias",
        href: "/materias",
        target: "_blank",
        onClick: () => {
          alert("Eu fui clicado");
        },
      },
      {
        label: "Plano de estudos",
        iconName: "plano-de-estudos",
        href: "/plano-de-estudos",
        target: "_blank",
      },
      {
        label: "Aulas ao vivo",
        iconName: "aula-ao-vivo",
        href: "/aula-ao-vivo",
        target: "_blank",
      },
      {
        label: "Correção de redação",
        iconName: "correcao",
        href: "/correcao",
        target: "_blank",
      },
      {
        label: "Exercícios de provas",
        iconName: "exercicio",
        href: "/exercicio",
        target: "_blank",
      },
      {
        label: "Mentorias",
        iconName: "mentoria",
        href: "/mentorias",
        target: "_blank",
      },
      {
        label: "Apostilas",
        iconName: "apostila",
        href: "/apostila",
        target: "_blank",
      },
    ],
  },
  {
    label: "Materiais",
    items: [
      {
        label: "Simulados",
        iconName: "simulado",
        href: "/simulados",
        target: "_blank",
      },
      {
        label: "Banco de provas",
        iconName: "banco-de-prova",
        href: "/banco-de-prova",
        target: "_blank",
      },
      {
        label: "Forúm de dúvidas",
        iconName: "forum",
        href: "/forum",
        target: "_blank",
      },
      {
        label: "Academia do hábito",
        iconName: "academia-do-habito",
        href: "/academia-do-habito",
        target: "_blank",
      },
      {
        label: "Loja de livros",
        iconName: "loja-de-livros",
        href: "/loja-de-livros",
        target: "_blank",
      },
    ],
  },
  {
    label: "Opções",
    items: [
      {
        label: "Planos",
        iconName: "planos",
        href: "/planos",
        target: "_blank",
      },
    ],
  },
];
