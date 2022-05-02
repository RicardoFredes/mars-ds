import type { IconLibProps } from "@/components/basics/Icon/icon.types";

import bankSlip from "./checkout/bank-slip";
import creditCard from "./checkout/credit-card";
import mastercard from "./checkout/mastercard";
import pix from "./checkout/pix";
import twoCreditCards from "./checkout/two-credit-cards";
import visa from "./checkout/visa";
import AcademiaDoHabito from "./customs/academia-do-habito";
import ajuda from "./customs/ajuda";
import apostila from "./customs/apostila";
import artes from "./customs/artes";
import aulaAoVivo from "./customs/aula-ao-vivo";
import bancoDeProva from "./customs/banco-de-prova";
import biologia from "./customs/biologia";
import correcao from "./customs/correcao";
import educacaoFisica from "./customs/educacao-fisica";
import espanhol from "./customs/espanhol";
import exercicio from "./customs/exercicio";
import filosofia from "./customs/filosofia";
import fisica from "./customs/fisica";
import forum from "./customs/forum";
import geografia from "./customs/geografia";
import historia from "./customs/historia";
import humanas from "./customs/humanas";
import ingles from "./customs/ingles";
import linguaPortuguesa from "./customs/lingua-portuguesa";
import linguagens from "./customs/linguagens";
import literatura from "./customs/literatura";
import lojaLivros from "./customs/loja-livros";
import matematica from "./customs/matematica";
import materias from "./customs/materias";
import mesalvaMini from "./customs/me-salva-mini";
import medicina from "./customs/medicina";
import mentoria from "./customs/mentoria";
import natureza from "./customs/natureza";
import painel from "./customs/painel";
import planoDeEstudos from "./customs/plano-de-estudos";
import planos from "./customs/planos";
import ppl from "./customs/ppl";
import quimica from "./customs/quimica";
import redacao from "./customs/redacao";
import sair from "./customs/sair";
import simulado from "./customs/simulado";
import sociologia from "./customs/sociologia";
import tri from "./customs/tri";
import turma from "./customs/turma";
import alert from "./generics/alert";
import alertCircle from "./generics/alert-circle";
import arrowBack from "./generics/arrow-back";
import attach from "./generics/attach";
import checkmark from "./generics/checkmark";
import checkmarkCircle from "./generics/checkmark-circle";
import checkmarkSquare from "./generics/checkmark-square";
import chevronDown from "./generics/chevron-down";
import chevronLeft from "./generics/chevron-left";
import chevronRight from "./generics/chevron-right";
import chevronUp from "./generics/chevron-up";
import clock from "./generics/clock";
import close from "./generics/close";
import copy from "./generics/copy";
import doneAll from "./generics/done-all";
import download from "./generics/download";
import edit from "./generics/edit";
import expand from "./generics/expand";
import externalLink from "./generics/external-link";
import eye from "./generics/eye";
import eyeOff from "./generics/eye-off";
import file from "./generics/file";
import fileText from "./generics/file-text";
import grid from "./generics/grid";
import info from "./generics/info";
import layers from "./generics/layers";
import list from "./generics/list";
import liveCircle from "./generics/live-circle";
import menu from "./generics/menu";
import minusSquare from "./generics/minus-square";
import moreHorizontal from "./generics/more-horizontal";
import moreVertical from "./generics/more-vertical";
import play from "./generics/play";
import plus from "./generics/plus";
import print from "./generics/print";
import radioButtonOff from "./generics/radio-button-off";
import radioButtonOn from "./generics/radio-button-on";
import search from "./generics/search";
import shield from "./generics/shield";
import shoppingCart from "./generics/shopping-cart";
import square from "./generics/square";
import star from "./generics/star";
import trash from "./generics/trash";
import video from "./generics/video";
import apple from "./socials/apple";
import facebook from "./socials/facebook";
import google from "./socials/google";

const icons: {
  [key: string]: (props: IconLibProps) => JSX.Element;
} = {
  apple,
  "alert-circle": alertCircle,
  alert,
  "arrow-back": arrowBack,
  "attach": attach,
  "bank-slip": bankSlip,
  "checkmark-circle": checkmarkCircle,
  checkmark,
  "checkmark-square": checkmarkSquare,
  copy,
  close,
  "credit-card": creditCard,
  "chevron-down": chevronDown,
  "chevron-left": chevronLeft,
  "chevron-right": chevronRight,
  "chevron-up": chevronUp,
  clock,
  "done-all": doneAll,
  download,
  "eye-off": eyeOff,
  eye,
  edit,
  expand,
  "external-link": externalLink,
  facebook,
  file,
  "file-text": fileText,
  google,
  grid,
  info,
  layers,
  list,
  mastercard,
  menu,
  "minus-square": minusSquare,
  "me-salva-mini": mesalvaMini,
  "more-horizontal": moreHorizontal,
  "more-vertical": moreVertical,
  pix,
  plus,
  ppl,
  print,
  "radio-button-off": radioButtonOff,
  "radio-button-on": radioButtonOn,
  search,
  shield,
  "shopping-cart": shoppingCart,
  square,
  star,
  tri,
  video,
  visa,
  trash,
  "two-credit-cards": twoCreditCards,
  apostila,
  "aula-ao-vivo": aulaAoVivo,
  "banco-de-prova": bancoDeProva,
  correcao,
  exercicio,
  forum,
  "academia-do-habito": AcademiaDoHabito,
  "loja-de-livros": lojaLivros,
  materias,
  painel,
  "plano-de-estudos": planoDeEstudos,
  planos,
  simulado,
  turma,
  mentoria,
  ajuda,
  sair,
  matematica,
  natureza,
  biologia,
  fisica,
  quimica,
  humanas,
  filosofia,
  geografia,
  historia,
  sociologia,
  linguagens,
  artes,
  "educacao-fisica": educacaoFisica,
  espanhol,
  ingles,
  "lingua-portuguesa": linguaPortuguesa,
  literatura,
  redacao,
  medicina,
  "live-circle": liveCircle,
  play,
};

export default icons;
