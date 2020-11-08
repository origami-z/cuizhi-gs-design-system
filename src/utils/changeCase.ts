export const camelToSentenceCase = (camelCase: string) => {
  return camelCase
    .replace(/([A-Z])/g, (match) => {
      return ` ${match}`;
    })
    .replace(/(\D)(\d)/g, (_, p1, p2) => {
      return `${p1} ${p2}`;
    })
    .replace(/^./, (match) => match.toUpperCase());
};
