export const FIVE_MB = 5 * 1024 * 1024;

export const cutText = (text: string, maxLength = 28, end = "...") => {
  if (text.length < maxLength) return text;
  return text.slice(0, maxLength) + end;
};

export const isValidExtension = (extension: string, extensions?: string[]) => {
  if (!extensions) return true;
  for (const ext of extensions) {
    const reg = new RegExp(`^${ext}$`, "i");
    if (reg.test(extension)) return true;
  }
  return false;
};

export const dictionary = {
  placeholder: "Toque para escolher um arquivo",
  placeholderImage:
    "https://cdn.mesalva.com/uploads/image/MjAyMi0wNS0xNiAxOTozNDozMiArMDAwMDQ5NTY5MQ%3D%3D%0A.png",
  notifications: {
    notFound: "Nenhum arquivo selecionado",
    notAllowed: "Arquivo inválido. Selecione um arquivo do tipo:",
    tooBig: "Arquivo muito grande. Selecione um arquivo menor que",
  },
};
