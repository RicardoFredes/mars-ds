import type { IconLibProps } from "@/components/basics/Icon/icon.types";

import AcademiaDoHabito from "./academia-do-habito";
import alert from "./alert";
import alertCircle from "./alert-circle";
import apostila from "./apostila";
import apple from "./apple";
import arrowBack from "./arrow-back";
import attach from "./attach";
import aulaAoVivo from "./aula-ao-vivo";
import bancoDeProva from "./banco-de-prova";
import bankSlip from "./bank-slip";
import checkmark from "./checkmark";
import checkmarkCircle from "./checkmark-circle";
import checkmarkSquare from "./checkmark-square";
import chevronDown from "./chevron-down";
import chevronLeft from "./chevron-left";
import chevronRight from "./chevron-right";
import chevronUp from "./chevron-up";
import clock from "./clock";
import close from "./close";
import copy from "./copy";
import correcao from "./correcao";
import creditCard from "./credit-card";
import doneAll from "./done-all";
import download from "./download";
import edit from "./edit";
import exercicio from "./exercicio";
import expand from "./expand";
import externalLink from "./external-link";
import eye from "./eye";
import eyeOff from "./eye-off";
import facebook from "./facebook";
import file from "./file";
import fileText from "./file-text";
import forum from "./forum";
import google from "./google";
import grid from "./grid";
import info from "./info";
import layers from "./layers";
import list from "./list";
import lojaLivros from "./loja-livros";
import mastercard from "./mastercard";
import materias from "./materias";
import mesalvaMini from "./me-salva-mini";
import mentoria from "./mentoria";
import menu from "./menu";
import minusSquare from "./minus-square";
import moreHorizontal from "./more-horizontal";
import moreVertical from "./more-vertical";
import painel from "./painel";
import pix from "./pix";
import planoDeEstudos from "./plano-de-estudos";
import planos from "./planos";
import plus from "./plus";
import ppl from "./ppl";
import print from "./print";
import radioButtonOff from "./radio-button-off";
import radioButtonOn from "./radio-button-on";
import search from "./search";
import shield from "./shield";
import shoppingCart from "./shopping-cart";
import simulado from "./simulado";
import square from "./square";
import star from "./star";
import trash from "./trash";
import tri from "./tri";
import turma from "./turma";
import twoCreditCards from "./two-credit-cards";
import video from "./video";
import visa from "./visa";

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
};

export default icons;
