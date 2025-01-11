export const toggleTheme: () => void = () => {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle("dark");
};
