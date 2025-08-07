// eslint.config.mjs
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Base configuration for JavaScript
  js.configs.recommended,

  // TypeScript-specific configuration
  {
    
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules, // Use recommended TypeScript rules
      '@typescript-eslint/no-unused-vars': 'warn', // Example: Customize a rule
    },
  },
];
