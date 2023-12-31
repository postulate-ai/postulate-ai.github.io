export const reactStrictMode = true;
export const images = { loader: "custom" };
export const output = "export";
export const distDir =
  process.env.NODE_ENV === "production" ? "docs" : undefined;
