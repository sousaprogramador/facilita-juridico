// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValue = (obj: any, field: string) => {
  return obj[field] || "";
};
