export const removeCharacter = (value: string) => {
  const regex = /[^0-9]/g;
  return Number(value.replace(regex, ''));
};
