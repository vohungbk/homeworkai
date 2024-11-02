import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "f-primary": "var(--f-primary)",
        "f-primary-hover": "var(--f-primary-hover)",
        "f-primary-active": "var(--f-primary-active)",
        "f-text": "var(--f-text)",
        "f-text-secondary": "var(--f-text-secondary)",
        "f-text-tertiary": "var(--f-text-tertiary)",
        "f-bg-base": "var(--f-bg-base)",
        "f-bg-container": "var(--f-bg-container)",
        "f-bg-elevated": "var(--f-bg-elevated)",
        "f-bg-mask": "var(--f-bg-mask)",
        "f-bg-layout": "var(--f-bg-layout)",
        "f-bg-hover": "var(--f-bg-hover)",
        "f-bg-active": "var(--f-bg-active)",
        "f-bg-disabled": "var(--f-bg-disabled)",
        "f-border": "var(--f-border)",
        "f-secondary": "var(--f-secondary)",
        "f-secondary-hover": "var(--f-secondary-hover)",
        "f-secondary-active": "var(--f-secondary-active)",
        "f-border-hover": "var(--f-border-hover)",
        "f-border-active": "var(--f-border-active)",
        "f-border-secondary": "var(--f-border-secondary)",
        "f-text-quaternary": "var(--f-text-quaternary)",
        "f-text-disabled": "var(--f-text-disabled)",
        "f-text-light": "var(--f-text-light)",
        "f-text-light-secondary": "var(--f-text-light-secondary)",
        "f-primary-style-1": "var(--f-primary-style-1)",
        "f-success-bg": "var(--f-success-bg)",
        "f-success-bg-hover": "var(--f-success-bg-hover)",
        "f-success-border": "var(--f-success-border)",
        "f-success-border-hover": "var(--f-success-border-hover)",
        "f-success": "var(--f-success)",
        "f-success-hover": "var(--f-success-hover)",
        "f-success-active": "var(--f-success-active)",
        "f-warning-bg": "var(--f-warning-bg)",
        "f-warning-bg-hover": "var(--f-warning-bg-hover)",
        "f-warning-border": "var(--f-warning-border)",
        "f-warning-border-hover": "var(--f-warning-border-hover)",
        "f-warning": "var(--f-warning)",
        "f-warning-hover": "var(--f-warning-hover)",
        "f-warning-active": "var(--f-warning-active)",
        "f-error-bg": "var(--f-error-bg)",
        "f-error-bg-hover": "var(--f-error-bg-hover)",
        "f-error-border": "var(--f-error-border)",
        "f-error-border-hover": "var(--f-error-border-hover)",
        "f-error": "var(--f-error)",
        "f-error-hover": "var(--f-error-hover)",
        "f-error-active": "var(--f-error-active)",
        "f-primary-style-2": "var(--f-primary-style-2)",
        "f-primary-style-3": "var(--f-primary-style-3)",
        "f-primary-style-4": "var(--f-primary-style-4)",
        "f-primary-style-5": "var(--f-primary-style-5)",
        "f-primary-style-6": "var(--f-primary-style-6)",
        "f-primary-style-7": "var(--f-primary-style-7)",
        "f-primary-style-8": "var(--f-primary-style-8)",
        "f-secondary-style-1": "var(--f-secondary-style-1)",
        "f-secondary-style-2": "var(--f-secondary-style-2)",
        "f-secondary-style-3": "var(--f-secondary-style-3)",
        "f-secondary-style-4": "var(--f-secondary-style-4)",
        "f-secondary-style-5": "var(--f-secondary-style-5)",
        "f-secondary-style-6": "var(--f-secondary-style-6)",
        "f-secondary-style-7": "var(--f-secondary-style-7)",
        "f-secondary-style-8": "var(--f-secondary-style-8)",
        "f-blue-1": "var(--f-blue-1)",
        "f-blue-2": "var(--f-blue-2)",
        "f-blue-3": "var(--f-blue-3)",
        "f-blue-4": "var(--f-blue-4)",
        "f-blue-5": "var(--f-blue-5)",
        "f-blue-6": "var(--f-blue-6)",
        "f-blue-7": "var(--f-blue-7)",
        "f-green-1": "var(--f-green-1)",
        "f-green-2": "var(--f-green-2)",
        "f-green-3": "var(--f-green-3)",
        "f-green-4": "var(--f-green-4)",
        "f-green-5": "var(--f-green-5)",
        "f-green-6": "var(--f-green-6)",
        "f-green-7": "var(--f-green-7)",
        "f-red-1": "var(--f-red-1)",
        "f-red-2": "var(--f-red-2)",
        "f-red-3": "var(--f-red-3)",
        "f-red-4": "var(--f-red-4)",
        "f-red-5": "var(--f-red-5)",
        "f-red-6": "var(--f-red-6)",
        "f-red-7": "var(--f-red-7)",
        "f-yellow-1": "var(--f-yellow-1)",
        "f-yellow-2": "var(--f-yellow-2)",
        "f-yellow-3": "var(--f-yellow-3)",
        "f-yellow-4": "var(--f-yellow-4)",
        "f-yellow-5": "var(--f-yellow-5)",
        "f-yellow-6": "var(--f-yellow-6)",
        "f-yellow-7": "var(--f-yellow-7)",
        "f-orange-1": "var(--f-orange-1)",
        "f-orange-2": "var(--f-orange-2)",
        "f-orange-3": "var(--f-orange-3)",
        "f-orange-4": "var(--f-orange-4)",
        "f-orange-5": "var(--f-orange-5)",
        "f-orange-6": "var(--f-orange-6)",
        "f-orange-7": "var(--f-orange-7)",
      },
    },
  },
  plugins: [],
};
export default config;
