// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ rất quan trọng để Tailwind hoạt động trong tất cả component
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
