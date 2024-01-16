import slugify from "slugify";

export const makeVarsName = (value: string) => {
  const slug = slugify(value.replace(/(\(|\))/g, "_"), {
    replacement: "_",
    lower: true,
    strict: true,
  });

  return `{{${slug}}}`;
};
