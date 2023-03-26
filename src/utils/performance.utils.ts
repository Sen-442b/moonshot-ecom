export const debounce = (func: Function, delay: number) => {
  let timeoutRef: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeoutRef);
    timeoutRef = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
