const path = require("path");

module.exports = exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": [
      2,
      path.join(__dirname, "custom-pages"),
    ],
    "no-console": 1, // Means warning
    "prettier/prettier": 2, // Means error
  },
};
