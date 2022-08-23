export const dictionary = {
  alt: "Foto de perfil",
  overlayText: "Adicionar foto",
  acceptMimeTypes: "image/*",
  caption: (extensions: string[], maxSize: number): string => {
    const ext = extensions.map((extension) => `*.${extension}`).join(", ");
    const sizeInMB = Math.round(maxSize / 1024 / 1024);

    return `Arquivos ${ext}<br/>Tamanho máximo ${sizeInMB} MB`;
  },
};
