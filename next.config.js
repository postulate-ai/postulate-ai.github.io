export default {
  reactStrictMode: true,
  images: { loader: "custom" },
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "docs" : undefined,
};
