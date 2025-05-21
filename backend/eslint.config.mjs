import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"], // Apply to all JavaScript files
    languageOptions: {
      sourceType: "commonjs", // Use CommonJS modules
      ecmaVersion: 2021, // Support modern JavaScript (ES2021)
      globals: globals.node, // Use Node.js global variables
    },
    rules: {
      "no-unused-vars": "warn", // Warn about unused variables
      "no-console": "warn", // Warn about console statements
      "semi": ["error", "always"], // Enforce semicolons
      "quotes": ["error", "double"], // Enforce double quotes
      "indent": ["error", 2], // Enforce 2-space indentation
      "space-before-function-paren": ["error", "always"], // Enforce space before function parentheses
      "eol-last": ["error", "always"], // Enforce newline at the end of files
      "no-multiple-empty-lines": ["error", { max: 1 }], // Disallow multiple empty lines
    },
  },
]);