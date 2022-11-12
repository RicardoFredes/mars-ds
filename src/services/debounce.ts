export const debounce = (func: () => any, ms: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: []) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      clearTimeout(timer);
      func(...args);
    }, ms);
  };
};
