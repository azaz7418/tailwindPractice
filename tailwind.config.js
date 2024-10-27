
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'text-shadow': '2px 2px 4px #1e293d', // Example shadow
        'text-glow': '0 0 8px rgba(255, 255, 255, 0.8)',   // Example glow
      },
    },
  },
  daisyui: {
    themes: ["sunset", "dracula", "garden", "dark", "cupcake", "wireframe", "emerald", "corporate", "synthwave"],
  },
  // eslint-disable-next-line no-undef
  plugins: [
    // require("daisyui"), 
    function ({ addUtilities }) {
    const newUtilities = {
      '.text-shadow': {
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      '.text-glow': {
        textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
};
