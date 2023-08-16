import baseConfig from "@instantools/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,ts}"],
  presets: [baseConfig],
};
