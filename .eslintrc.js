module.exports = {
  parser: "@typescript-eslint/parser",
  env: { es6: true, node: true },
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "no-console": "off",
    "prettier/prettier": "warn",
  },
};
