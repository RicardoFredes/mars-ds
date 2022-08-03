export const FIVE_MB = 1 * 1024 * 1024;

export const isValidExtension = (extension: string, extensions?: string[]) => {
  if (!extensions) return true;

  for (const ext of extensions) {
    const reg = new RegExp(`^${ext}$`, "i");
    if (reg.test(extension)) return true;
  }

  return false;
};

export const dictionary = {
  notifications: {
    notFound: "Nenhum arquivo selecionado",
    notAllowed: "Arquivo inválido. Selecione um arquivo do tipo:",
    tooBig: "Arquivo muito grande. Selecione um arquivo menor que",
  },
};
