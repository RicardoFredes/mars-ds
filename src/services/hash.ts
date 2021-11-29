export const generateHash = (suffix = "hash") =>
  `${suffix}-${(Math.random() * 1000000).toFixed(0)}`;
