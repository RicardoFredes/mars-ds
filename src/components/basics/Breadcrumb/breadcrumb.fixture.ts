export const mountListMock = (list: string[]) =>
  list.map((label, index) => ({
    label,
    href: `#item-${index}`,
    onClick: (event: { preventDefault: () => void }) => {
      event.preventDefault();
      console.log(label);
    },
  }));

export const mockDefaultBreadcrumbs = mountListMock([
  "ENEM",
  "Matemática",
  "Números Primos e Decomposição",
]);

export const mockBreadcrumbListExpand = mountListMock([
  "ENEM",
  "Matérias",
  "Matemática",
  "Introdução à Matemática",
  "Números Primos e Decomposição",
]);
