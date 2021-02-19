const getColors = () => {
  const arrayOfColors = [];
  for (let i = 1; i > -1; i - 0.05) {
    arrayOfColors.push(`rgba(45, 75, 101, ${i})`);
  }
  return arrayOfColors;
};

export const colorsArray = getColors();
